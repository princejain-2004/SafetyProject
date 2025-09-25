import React, { useState } from 'react';
import { Award, Search, Filter } from 'lucide-react';
import EarthquakeQuiz from './earthquake';
import FireQuiz from './fire';
import FloodQuiz from './flood';

export default function Quiz() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeQuiz, setActiveQuiz] = useState(null);

  const categories = ['all', 'Earthquake', 'Fire Safety', 'Flood'];

  // List of quiz modules
  const quizzes = [
    {
      id: 'earthquake',
      title: 'Earthquake Quiz',
      component: EarthquakeQuiz,
      category: 'Earthquake',
    },
    {
      id: 'fire',
      title: 'Fire Quiz',
      component: FireQuiz,
      category: 'Fire Safety',
    },
    {
      id: 'flood',
      title: 'Flood Quiz',
      component: FloodQuiz,
      category: 'Flood',
    },
  ];

  // Filter quizzes based on selected category and search term
  const filteredQuizzes = quizzes.filter((quiz) => {
    const matchesCategory =
      selectedCategory === 'all' || quiz.category === selectedCategory;
    const matchesSearch = quiz.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (activeQuiz) {
    const QuizComponent = activeQuiz.component;
    return (
      <div className="fixed inset-0 z-50 bg-gray-900 bg-opacity-95 flex flex-col">
        <div className="p-4 flex justify-between items-center bg-gray-800">
          <h2 className="text-xl font-bold text-white">{activeQuiz.title}</h2>
          <button
            onClick={() => setActiveQuiz(null)}
            className="text-white bg-red-600 hover:bg-red-700 px-3 py-1 rounded-md"
          >
            Back
          </button>
        </div>
        <div className="flex-1 overflow-auto p-6">
          <QuizComponent />
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">QUIZ</h1>
          <p className="text-gray-600 mt-1">Interactive emergency preparedness QUIZ</p>
        </div>
        <div className="flex items-center space-x-2">
          <Award className="w-5 h-5 text-yellow-500" />
          <span className="text-sm font-medium text-gray-700">Earn points and badges</span>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search modules..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5 text-gray-400" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Quiz Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {filteredQuizzes.length > 0 ? (
          filteredQuizzes.map((quiz) => (
            <div key={quiz.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 flex flex-col">
              <h3 className="font-semibold text-gray-900 mb-2">{quiz.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{quiz.category}</p>
              <button
                onClick={() => setActiveQuiz(quiz)}
                className="mt-auto py-2 px-4 rounded-md bg-blue-600 text-white hover:bg-blue-700 font-medium"
              >
                Start Quiz
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-500 col-span-full">No quizzes found.</p>
        )}
      </div>
    </div>
  );
}
