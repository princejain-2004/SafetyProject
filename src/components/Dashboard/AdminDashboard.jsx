import React from 'react';
import { 
  Users, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle, 
  BarChart3,
  Shield,
  Clock,
  Target
} from 'lucide-react';

export default function AdminDashboard() {
  const schoolStats = {
    totalStudents: 1240,
    totalTeachers: 45,
    activeAlerts: 2,
    completedDrills: 50,
    averageScore: 87.5,
    preparednessLevel: 'High'
  };

  const recentAlerts = [
    { id: 1, type: 'test', message: 'Monthly fire drill scheduled for Friday', time: '2 hours ago' },
    { id: 2, type: 'warning', message: 'Severe weather watch issued for region', time: '5 hours ago' },
    { id: 3, type: 'info', message: 'New safety guidelines updated', time: '1 day ago' },
  ];

  const drillParticipation = [
    { month: 'Jan', participation: 92 },
    { month: 'Feb', participation: 89 },
    { month: 'Mar', participation: 94 },
    { month: 'Apr', participation: 91 },
    { month: 'May', participation: 96 },
    { month: 'Jun', participation: 93 },
  ];

  const departmentScores = [
    { department: 'High School', score: 89, change: '+3%' },
    { department: 'Middle School', score: 85, change: '+1%' },
    { department: 'Elementary', score: 92, change: '+5%' },
    { department: 'Staff', score: 94, change: '+2%' },
  ];

  return (
    <div className="space-y-6">
      {/* Header Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="bg-blue-100 p-2 rounded-lg">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Students</p>
              <p className="text-2xl font-bold text-gray-900">{schoolStats.totalStudents + schoolStats.totalTeachers}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="bg-green-100 p-2 rounded-lg">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Drills Completed</p>
              <p className="text-2xl font-bold text-gray-900">{schoolStats.completedDrills}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="bg-yellow-100 p-2 rounded-lg">
              <TrendingUp className="w-6 h-6 text-yellow-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Average Score</p>
              <p className="text-2xl font-bold text-gray-900">{schoolStats.averageScore}%</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="bg-red-100 p-2 rounded-lg">
              <AlertTriangle className="w-6 h-6 text-red-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Active Alerts</p>
              <p className="text-2xl font-bold text-gray-900">{schoolStats.activeAlerts}</p>
            </div>
          </div>
        </div>
      </div>

      {/* School Preparedness Overview */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold mb-2">School Preparedness Level</h2>
            <p className="text-green-100 mb-4">Overall emergency readiness assessment</p>
          </div>
          <div className="text-center">
            <div className="bg-white bg-opacity-20 p-4 rounded-lg">
              <Shield className="w-8 h-8 mx-auto mb-2" />
              <div className="text-2xl font-bold">{schoolStats.preparednessLevel}</div>
              <div className="text-sm text-green-100">Preparedness</div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Drill Participation Trends */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Drill Participation Trends</h2>
              <BarChart3 className="w-5 h-5 text-gray-400" />
            </div>
            <div className="space-y-3">
              {drillParticipation.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-600">{item.month}</span>
                  <div className="flex items-center space-x-2 flex-1 mx-4">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${item.participation}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-900 font-medium">{item.participation}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Department Performance */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Department Performance</h2>
              <Target className="w-5 h-5 text-gray-400" />
            </div>
            <div className="space-y-4">
              {departmentScores.map((dept, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-900">{dept.department}</p>
                    <p className="text-xs text-gray-500">Average score</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-gray-900">{dept.score}%</p>
                    <p className="text-xs text-green-600">{dept.change}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Recent Alerts */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Recent System Activity</h2>
            <Clock className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            {recentAlerts.map((alert) => (
              <div key={alert.id} className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50">
                <div className={`p-1 rounded-full ${
                  alert.type === 'test' ? 'bg-blue-100' :
                  alert.type === 'warning' ? 'bg-yellow-100' : 'bg-green-100'
                }`}>
                  <AlertTriangle className={`w-4 h-4 ${
                    alert.type === 'test' ? 'text-blue-600' :
                    alert.type === 'warning' ? 'text-yellow-600' : 'text-green-600'
                  }`} />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{alert.message}</p>
                  <p className="text-xs text-gray-500 mt-1">{alert.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}