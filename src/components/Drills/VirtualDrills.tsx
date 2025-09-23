import React, { useState } from 'react';
import { 
  Play, 
  Clock, 
  Target, 
  Award, 
  Users, 
  TrendingUp,
  CheckCircle,
  AlertTriangle,
  Flame,
  CloudLightning,
  Shield
} from 'lucide-react';

interface DrillData {
  id: string;
  title: string;
  type: 'fire' | 'earthquake' | 'severe-weather' | 'lockdown';
  description: string;
  duration: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  points: number;
  participants: number;
  averageScore: number;
  completed: boolean;
  lastScore?: number;
}

export default function VirtualDrills() {
  const [selectedDrill, setSelectedDrill] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'available' | 'results'>('available');

  const drills: DrillData[] = [
    {
      id: '1',
      title: 'School Fire Evacuation',
      type: 'fire',
      description: 'Practice safe and efficient evacuation procedures during a fire emergency.',
      duration: 10,
      difficulty: 'beginner',
      points: 200,
      participants: 234,
      averageScore: 87,
      completed: true,
      lastScore: 92
    },
    {
      id: '2',
      title: 'Earthquake Drop, Cover & Hold',
      type: 'earthquake',
      description: 'Master the essential earthquake response actions and post-quake procedures.',
      duration: 8,
      difficulty: 'beginner',
      points: 180,
      participants: 189,
      averageScore: 85,
      completed: false
    },
    {
      id: '3',
      title: 'Severe Weather Shelter',
      type: 'severe-weather',
      description: 'Learn proper sheltering techniques during tornado and severe weather warnings.',
      duration: 12,
      difficulty: 'intermediate',
      points: 250,
      participants: 156,
      averageScore: 79,
      completed: true,
      lastScore: 88
    },
    {
      id: '4',
      title: 'Campus Lockdown Protocol',
      type: 'lockdown',
      description: 'Practice security procedures during lockdown situations and threat assessments.',
      duration: 15,
      difficulty: 'advanced',
      points: 300,
      participants: 98,
      averageScore: 82,
      completed: false
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'fire': return Flame;
      case 'earthquake': return AlertTriangle;
      case 'severe-weather': return CloudLightning;
      case 'lockdown': return Shield;
      default: return Target;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'fire': return 'text-red-600 bg-red-100';
      case 'earthquake': return 'text-yellow-600 bg-yellow-100';
      case 'severe-weather': return 'text-blue-600 bg-blue-100';
      case 'lockdown': return 'text-purple-600 bg-purple-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'text-green-700 bg-green-100';
      case 'intermediate': return 'text-yellow-700 bg-yellow-100';
      case 'advanced': return 'text-red-700 bg-red-100';
      default: return 'text-gray-700 bg-gray-100';
    }
  };

  const recentResults = [
    { drill: 'School Fire Evacuation', score: 92, date: '2 days ago', improvement: '+5%' },
    { drill: 'Severe Weather Shelter', score: 88, date: '1 week ago', improvement: '+12%' },
    { drill: 'Earthquake Response', score: 85, date: '2 weeks ago', improvement: '+8%' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Virtual Emergency Drills</h1>
          <p className="text-gray-600 mt-1">Practice emergency procedures in a safe, simulated environment</p>
        </div>
        <div className="flex items-center space-x-2">
          <Award className="w-5 h-5 text-yellow-500" />
          <span className="text-sm font-medium text-gray-700">Earn points for participation</span>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex space-x-4 border-b border-gray-200">
        <button
          onClick={() => setActiveTab('available')}
          className={`py-2 px-4 font-medium transition-colors ${
            activeTab === 'available'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          Available Drills
        </button>
        <button
          onClick={() => setActiveTab('results')}
          className={`py-2 px-4 font-medium transition-colors ${
            activeTab === 'results'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          My Results
        </button>
      </div>

      {activeTab === 'available' ? (
        /* Available Drills */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {drills.map((drill) => {
            const IconComponent = getTypeIcon(drill.type);
            return (
              <div
                key={drill.id}
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-2 rounded-lg ${getTypeColor(drill.type)}`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    {drill.completed && (
                      <div className="flex items-center space-x-1 bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                        <CheckCircle className="w-3 h-3" />
                        <span>Completed</span>
                      </div>
                    )}
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{drill.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{drill.description}</p>

                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium capitalize ${getDifficultyColor(drill.difficulty)}`}>
                      {drill.difficulty}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium capitalize ${getTypeColor(drill.type)}`}>
                      {drill.type.replace('-', ' ')}
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <Clock className="w-4 h-4 text-gray-400" />
                      </div>
                      <p className="font-medium text-gray-900">{drill.duration} min</p>
                      <p className="text-gray-500 text-xs">Duration</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <Users className="w-4 h-4 text-gray-400" />
                      </div>
                      <p className="font-medium text-gray-900">{drill.participants}</p>
                      <p className="text-gray-500 text-xs">Participants</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <Award className="w-4 h-4 text-yellow-500" />
                      </div>
                      <p className="font-medium text-yellow-600">{drill.points}</p>
                      <p className="text-gray-500 text-xs">Points</p>
                    </div>
                  </div>

                  {drill.completed && drill.lastScore && (
                    <div className="bg-green-50 p-3 rounded-lg mb-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-green-700">Last Score</span>
                        <span className="text-lg font-bold text-green-700">{drill.lastScore}%</span>
                      </div>
                    </div>
                  )}

                  <button
                    className={`w-full py-2 px-4 rounded-md font-medium transition-colors flex items-center justify-center space-x-2 ${
                      drill.completed
                        ? 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                  >
                    <Play className="w-4 h-4" />
                    <span>{drill.completed ? 'Practice Again' : 'Start Drill'}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* Results Tab */
        <div className="space-y-6">
          {/* Performance Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-gray-600">Drills Completed</h3>
                <CheckCircle className="w-5 h-5 text-green-500" />
              </div>
              <p className="text-2xl font-bold text-gray-900">
                {drills.filter(d => d.completed).length}/{drills.length}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                {Math.round((drills.filter(d => d.completed).length / drills.length) * 100)}% completion rate
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-gray-600">Average Score</h3>
                <Target className="w-5 h-5 text-blue-500" />
              </div>
              <p className="text-2xl font-bold text-gray-900">89%</p>
              <p className="text-sm text-green-600 mt-1">↑ +7% from last month</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-gray-600">Points Earned</h3>
                <Award className="w-5 h-5 text-yellow-500" />
              </div>
              <p className="text-2xl font-bold text-gray-900">750</p>
              <p className="text-sm text-gray-500 mt-1">From drill participation</p>
            </div>
          </div>

          {/* Recent Results */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900">Recent Results</h2>
                <TrendingUp className="w-5 h-5 text-green-500" />
              </div>
              <div className="space-y-4">
                {recentResults.map((result, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-medium text-gray-900">{result.drill}</h4>
                      <p className="text-sm text-gray-500">{result.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-gray-900">{result.score}%</p>
                      <p className="text-sm text-green-600">{result.improvement}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}