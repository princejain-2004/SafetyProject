import React, { useState } from 'react';
import { Award, Search, Filter } from 'lucide-react';
import EarthquakeQuiz from './earthquake';
import FireQuiz from './fire';
import FloodQuiz from './flood';
import EarthQuakeQuizHindi from './EarthQuakeHindi';
import FloodQuizHindi from './FloodHindi';
import FireQuizHindi from './FireHindi';
import EarthQuakeQuizPunjabi from './EarthQuakePunjabi';
import FireQuizPunjabi from './FirePunjabi';
import FloodQuizPunjabi from './FloodPunjabi';

export default function Quiz() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all'); // default all categories
  const [selectedLanguage, setSelectedLanguage] = useState('English'); // default language
  const [activeQuiz, setActiveQuiz] = useState(null);

  const categories = ['all', 'Earthquake', 'Fire Safety', 'Flood'];
  const languages = ['English', 'Hindi', 'Punjabi']; // ✅ removed "all"

  // List of quiz modules
  const quizzes = [
    // English
    { id: 'earthquake', title: 'Earthquake Quiz', component: EarthquakeQuiz, category: 'Earthquake', language: 'English' },
    { id: 'fire', title: 'Fire Quiz', component: FireQuiz, category: 'Fire Safety', language: 'English' },
    { id: 'flood', title: 'Flood Quiz', component: FloodQuiz, category: 'Flood', language: 'English' },

    // Hindi
    { id: 'earthquake-hindi', title: 'भूकंप क्विज़', component: EarthQuakeQuizHindi, category: 'Earthquake', language: 'Hindi' },
    { id: 'fire-hindi', title: 'आग से सुरक्षा क्विज़', component: FireQuizHindi, category: 'Fire Safety', language: 'Hindi' },
    { id: 'flood-hindi', title: 'बाढ़ क्विज़', component: FloodQuizHindi, category: 'Flood', language: 'Hindi' },

    // Punjabi
    { id: 'earthquake-punjabi', title: 'ਭੂਚਾਲ ਕਵਿਜ਼', component: EarthQuakeQuizPunjabi, category: 'Earthquake', language: 'Punjabi' },
    { id: 'fire-punjabi', title: 'ਅੱਗ ਸੁਰੱਖਿਆ ਕਵਿਜ਼', component: FireQuizPunjabi, category: 'Fire Safety', language: 'Punjabi' },
    { id: 'flood-punjabi', title: 'ਬਾਰਸ਼/ਬਹਾਵ ਕਵਿਜ਼', component: FloodQuizPunjabi, category: 'Flood', language: 'Punjabi' },
  ];

  // Filter quizzes based on category, language, and search term
  const filteredQuizzes = quizzes.filter((quiz) => {
    const matchesCategory = selectedCategory === 'all' || quiz.category === selectedCategory;
    const matchesLanguage = quiz.language === selectedLanguage;
    const matchesSearch = quiz.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesLanguage && matchesSearch;
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
          {/* Search Bar */}
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

          {/* Category Filter */}
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

          {/* Language Filter */}
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5 text-gray-400" />
            <select
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {languages.map((lang) => (
                <option key={lang} value={lang}>
                  {lang}
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
            <div
              key={quiz.id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 flex flex-col"
            >
              <h3 className="font-semibold text-gray-900 mb-2">{quiz.title}</h3>
              <p className="text-sm text-gray-600 mb-1">{quiz.category}</p>
              <p className="text-xs text-gray-500 mb-4">{quiz.language}</p>
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
