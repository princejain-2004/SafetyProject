import React, { useState } from 'react';
import { 
  BookOpen, 
  Clock, 
  Star, 
  Play, 
  CheckCircle, 
  Award,
  Filter,
  Search
} from 'lucide-react';

export default function EducationModules() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const modules = [
    {
      id: '1',
      title: 'Fire Safety Fundamentals',
      description: 'Learn essential fire safety principles, evacuation procedures, and prevention techniques.',
      category: 'Fire Safety',
      difficulty: 'beginner',
      duration: 25,
      points: 150,
      completed: true,
      rating: 4.8,
      thumbnail: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: '2',
      title: 'Earthquake Response Tactics',
      description: 'Master drop, cover, and hold techniques plus post-earthquake safety protocols.',
      category: 'Earthquake',
      difficulty: 'intermediate',
      duration: 35,
      points: 200,
      completed: false,
      rating: 4.9,
      thumbnail: 'https://images.pexels.com/photos/9978539/pexels-photo-9978539.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: '3',
      title: 'First Aid Essentials',
      description: 'Critical first aid skills for emergency situations and basic life support.',
      category: 'Medical',
      difficulty: 'beginner',
      duration: 45,
      points: 250,
      completed: false,
      rating: 4.7,
      thumbnail: 'https://images.pexels.com/photos/263337/pexels-photo-263337.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: '4',
      title: 'Severe Weather Preparedness',
      description: 'Stay safe during tornadoes, hurricanes, and other extreme weather events.',
      category: 'Weather',
      difficulty: 'intermediate',
      duration: 30,
      points: 180,
      completed: true,
      rating: 4.6,
      thumbnail: 'https://images.pexels.com/photos/1446076/pexels-photo-1446076.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: '5',
      title: 'Lockdown Procedures',
      description: 'Understanding security protocols and emergency lockdown procedures.',
      category: 'Security',
      difficulty: 'advanced',
      duration: 20,
      points: 300,
      completed: false,
      rating: 4.9,
      thumbnail: 'https://images.pexels.com/photos/8923181/pexels-photo-8923181.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: '6',
      title: 'Chemical Spill Response',
      description: 'Safe handling and response procedures for hazardous material incidents.',
      category: 'Hazmat',
      difficulty: 'advanced',
      duration: 40,
      points: 280,
      completed: false,
      rating: 4.8,
      thumbnail: 'https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const categories = ['all', ...Array.from(new Set(modules.map(m => m.category)))];

  const filteredModules = modules.filter(module => {
    const matchesCategory = selectedCategory === 'all' || module.category === selectedCategory;
    const matchesSearch = module.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          module.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'beginner': return 'text-green-600 bg-green-100';
      case 'intermediate': return 'text-yellow-600 bg-yellow-100';
      case 'advanced': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Learning Modules</h1>
          <p className="text-gray-600 mt-1">Interactive emergency preparedness training</p>
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
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Modules Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredModules.map((module) => (
          <div
            key={module.id}
            className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
          >
            {/* Thumbnail */}
            <div className="relative">
              <img
                src={module.thumbnail}
                alt={module.title}
                className="w-full h-40 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <button className="bg-white bg-opacity-90 p-3 rounded-full hover:bg-opacity-100 transition-all">
                  <Play className="w-6 h-6 text-blue-600" />
                </button>
              </div>
              {module.completed && (
                <div className="absolute top-3 right-3 bg-green-500 p-1 rounded-full">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-4">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-semibold text-gray-900 line-clamp-2">{module.title}</h3>
                <div className="flex items-center ml-2">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-600 ml-1">{module.rating}</span>
                </div>
              </div>

              <p className="text-sm text-gray-600 mb-3 line-clamp-2">{module.description}</p>

              <div className="flex items-center justify-between mb-3">
                <span className={`px-2 py-1 rounded-full text-xs font-medium capitalize ${getDifficultyColor(module.difficulty)}`}>
                  {module.difficulty}
                </span>
                <span className="text-xs text-gray-500">{module.category}</span>
              </div>

              <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{module.duration} min</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-4 h-4 mr-1 text-yellow-500" />
                  <span className="font-medium text-yellow-600">{module.points} pts</span>
                </div>
              </div>

              <button
                className={`w-full py-2 px-4 rounded-md font-medium transition-colors ${
                  module.completed
                    ? 'bg-green-100 text-green-700 hover:bg-green-200'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {module.completed ? 'Review Module' : 'Start Learning'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}