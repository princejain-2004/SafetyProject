import React from 'react';
import { BookOpen, Trophy, Zap, AlertTriangle, Target, TrendingUp } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { EarthquakeBadge } from '../badges/earth';
import { FireBadge } from '../badges/fire';   // ✅ Fire Badge import

export default function StudentDashboard() {
  const { user } = useAuth();

  const recentActivities = [
    { id: 1, type: 'module', title: 'Completed: Fire Safety Basics', points: 150, time: '2 hours ago' },
    { id: 2, type: 'drill', title: 'Earthquake Drill - Score: 85%', points: 200, time: '1 day ago' },
    { id: 3, type: 'badge', title: 'Earned: First Aid Hero Badge', points: 300, time: '2 days ago' },
  ];

  const upcomingDrills = [
    { id: 1, title: 'Monthly Fire Drill', type: 'Fire Emergency', date: 'Tomorrow at 10:00 AM' },
    { id: 2, title: 'Severe Weather Response', type: 'Weather Alert', date: 'Friday at 2:00 PM' },
  ];

  const progressData = [
    { category: 'Fire Safety', completed: 8, total: 10, percentage: 80 },
    { category: 'Earthquake Response', completed: 6, total: 8, percentage: 75 },
    { category: 'First Aid', completed: 5, total: 12, percentage: 42 },
    { category: 'Severe Weather', completed: 3, total: 6, percentage: 50 },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-xl p-6 text-white flex justify-between items-start">
        {/* Left side: text + stats */}
        <div>
          <h1 className="text-2xl font-bold mb-2">Welcome back, {user?.name}!</h1>
          <p className="text-blue-100 mb-4">Continue your emergency preparedness journey</p>
          <div className="flex items-center space-x-6">
            <div className="text-center">
              <div className="text-2xl font-bold">{user?.points}</div>
              <div className="text-sm text-blue-100">Total Points</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{user?.badges?.length}</div>
              <div className="text-sm text-blue-100">Badges Earned</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">7</div>
              <div className="text-sm text-blue-100">Drills Completed</div>
            </div>
          </div>
        </div>

        {/* Right side: Badges */}
        <div className="flex flex-col items-center space-y-3">
          <EarthquakeBadge size={56} className="drop-shadow-lg" />
          <FireBadge size={56} className="drop-shadow-lg" />
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-100 p-2 rounded-lg">
              <BookOpen className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="font-medium text-gray-900">Continue Learning</p>
              <p className="text-sm text-gray-500">3 modules available</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex items-center space-x-3">
            <div className="bg-green-100 p-2 rounded-lg">
              <Zap className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="font-medium text-gray-900">Practice Drills</p>
              <p className="text-sm text-gray-500">2 new scenarios</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex items-center space-x-3">
            <div className="bg-red-100 p-2 rounded-lg">
              <AlertTriangle className="w-5 h-5 text-red-600" />
            </div>
            <div>
              <p className="font-medium text-gray-900">Emergency Info</p>
              <p className="text-sm text-gray-500">Always accessible</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Learning Progress */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Learning Progress</h2>
              <Target className="w-5 h-5 text-gray-400" />
            </div>
            <div className="space-y-4">
              {progressData.map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">{item.category}</span>
                    <span className="text-sm text-gray-500">{item.completed}/{item.total}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Recent Activities</h2>
              <TrendingUp className="w-5 h-5 text-gray-400" />
            </div>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-start space-x-3">
                  <div className={`p-2 rounded-lg ${
                    activity.type === 'module' ? 'bg-blue-100' :
                    activity.type === 'drill' ? 'bg-green-100' : 'bg-yellow-100'
                  }`}>
                    {activity.type === 'module' ? <BookOpen className="w-4 h-4 text-blue-600" /> :
                     activity.type === 'drill' ? <Zap className="w-4 h-4 text-green-600" /> :
                     <Trophy className="w-4 h-4 text-yellow-600" />}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-xs text-green-600 font-medium">+{activity.points} points</span>
                      <span className="text-xs text-gray-500">{activity.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Drills */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Drills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {upcomingDrills.map((drill) => (
              <div key={drill.id} className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
                <h3 className="font-medium text-gray-900 mb-1">{drill.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{drill.type}</p>
                <p className="text-sm text-blue-600 font-medium">{drill.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
