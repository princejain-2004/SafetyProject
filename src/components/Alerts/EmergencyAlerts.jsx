import React, { useState } from 'react';
import { 
  AlertTriangle, 
  Shield, 
  Info, 
  Volume2, 
  MapPin,
  Clock,
  Bell,
  CheckCircle
} from 'lucide-react';

export default function EmergencyAlerts() {
  const [alerts, setAlerts] = useState([
    {
      id: '1',
      title: 'Severe Weather Warning',
      message: 'Tornado watch issued for Jefferson County. Seek immediate shelter if sirens sound.',
      type: 'warning',
      severity: 'high',
      region: 'Jefferson County',
      timestamp: '2 hours ago',
      active: true,
      acknowledged: false
    },
    {
      id: '2',
      title: 'Monthly Fire Drill Scheduled',
      message: 'Fire evacuation drill will be conducted tomorrow at 10:00 AM. Please follow standard procedures.',
      type: 'test',
      severity: 'low',
      region: 'School District',
      timestamp: '5 hours ago',
      active: true,
      acknowledged: true
    },
    {
      id: '3',
      title: 'Emergency Contact Update',
      message: 'New emergency contact information has been added to the directory. Please review.',
      type: 'info',
      severity: 'low',
      region: 'School District',
      timestamp: '1 day ago',
      active: true,
      acknowledged: false
    },
    {
      id: '4',
      title: 'RESOLVED: Power Outage',
      message: 'Electrical power has been restored to all buildings. Normal operations have resumed.',
      type: 'info',
      severity: 'medium',
      region: 'Main Campus',
      timestamp: '2 days ago',
      active: false,
      acknowledged: true
    }
  ]);

  const getAlertIcon = (type) => {
    switch (type) {
      case 'emergency': return AlertTriangle;
      case 'warning': return Shield;
      case 'test': return Bell;
      default: return Info;
    }
  };

  const getAlertColor = (type, severity) => {
    if (type === 'emergency' || severity === 'critical') {
      return 'border-red-500 bg-red-50';
    }
    if (type === 'warning' || severity === 'high') {
      return 'border-yellow-500 bg-yellow-50';
    }
    if (type === 'test') {
      return 'border-blue-500 bg-blue-50';
    }
    return 'border-gray-300 bg-gray-50';
  };

  const getIconColor = (type, severity) => {
    if (type === 'emergency' || severity === 'critical') {
      return 'text-red-600';
    }
    if (type === 'warning' || severity === 'high') {
      return 'text-yellow-600';
    }
    if (type === 'test') {
      return 'text-blue-600';
    }
    return 'text-gray-600';
  };

  const acknowledgeAlert = (alertId) => {
    setAlerts(alerts.map(alert => 
      alert.id === alertId ? { ...alert, acknowledged: true } : alert
    ));
  };

  const activeAlerts = alerts.filter(alert => alert.active);
  const acknowledgedAlerts = alerts.filter(alert => alert.acknowledged);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Emergency Alerts</h1>
          <p className="text-gray-600 mt-1">Real-time notifications and safety information</p>
        </div>
        <div className="flex items-center space-x-2">
          <Volume2 className="w-5 h-5 text-blue-500" />
          <span className="text-sm font-medium text-gray-700">Sound enabled</span>
        </div>
      </div>

      {/* Critical Alert Banner */}
      {activeAlerts.some(alert => alert.severity === 'critical' || alert.type === 'emergency') && (
        <div className="bg-red-600 text-white p-4 rounded-lg shadow-lg">
          <div className="flex items-center space-x-3">
            <AlertTriangle className="w-6 h-6 animate-pulse" />
            <div>
              <h3 className="font-bold">EMERGENCY ALERT</h3>
              <p className="text-red-100">Critical emergency information requires immediate attention</p>
            </div>
          </div>
        </div>
      )}

      {/* Active Alerts */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Active Alerts</h2>
        <div className="space-y-4">
          {activeAlerts.map((alert) => {
            const IconComponent = getAlertIcon(alert.type);
            return (
              <div
                key={alert.id}
                className={`border-l-4 p-4 rounded-r-lg shadow-sm ${getAlertColor(alert.type, alert.severity)}`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3">
                    <IconComponent className={`w-5 h-5 mt-1 ${getIconColor(alert.type, alert.severity)}`} />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="font-semibold text-gray-900">{alert.title}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium uppercase ${
                          alert.severity === 'critical' ? 'bg-red-200 text-red-800' :
                          alert.severity === 'high' ? 'bg-yellow-200 text-yellow-800' :
                          alert.severity === 'medium' ? 'bg-blue-200 text-blue-800' :
                          'bg-gray-200 text-gray-800'
                        }`}>
                          {alert.severity}
                        </span>
                      </div>
                      <p className="text-gray-700 mb-2">{alert.message}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span>{alert.region}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          <span>{alert.timestamp}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {!alert.acknowledged && (
                    <button
                      onClick={() => acknowledgeAlert(alert.id)}
                      className="ml-4 px-3 py-1 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors"
                    >
                      Acknowledge
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Alert History */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent History</h2>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="divide-y divide-gray-200">
            {alerts.slice(0, 5).map((alert) => {
              const IconComponent = getAlertIcon(alert.type);
              return (
                <div key={alert.id} className="p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start space-x-3">
                    <IconComponent className={`w-5 h-5 mt-1 ${getIconColor(alert.type, alert.severity)}`} />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium text-gray-900">{alert.title}</h4>
                        <div className="flex items-center space-x-2">
                          {alert.acknowledged && (
                            <CheckCircle className="w-4 h-4 text-green-500" />
                          )}
                          <span className="text-sm text-gray-500">{alert.timestamp}</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{alert.message}</p>
                      <div className="flex items-center space-x-2 mt-2">
                        <span className="text-xs text-gray-500">{alert.region}</span>
                        <span className="text-xs text-gray-400">•</span>
                        <span className={`text-xs capitalize ${
                          alert.active ? 'text-red-600' : 'text-gray-500'
                        }`}>
                          {alert.active ? 'Active' : 'Resolved'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Emergency Contacts Quick Access */}
      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
        <h3 className="font-semibold text-red-900 mb-2">Emergency Contacts</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="text-center">
            <p className="text-sm text-red-700">Emergency Services</p>
            <p className="font-bold text-red-900">911</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-red-700">School Safety</p>
            <p className="font-bold text-red-900">(555) 123-4567</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-red-700">District Office</p>
            <p className="font-bold text-red-900">(555) 987-6543</p>
          </div>
        </div>
      </div>
    </div>
  );
}