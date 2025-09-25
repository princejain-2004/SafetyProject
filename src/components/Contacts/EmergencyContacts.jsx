import React from 'react';
import { 
  Phone, 
  Shield,
  Clock,
  Mail,
  Users,
  Ambulance,
  Car,
  Train,
  Baby,
  PersonStanding
} from 'lucide-react';

export default function EmergencyContacts() {

  // National emergency numbers for India with additional information
  const emergencyNumbers = [
    { 
      service: 'National Emergency', 
      number: '112', 
      description: 'Police, Fire, and Ambulance combined. Available 24/7.',
      icon: <Shield className="w-5 h-5 text-red-500" />
    },
    { 
      service: 'Police Helpline', 
      number: '100', 
      description: 'For all police-related emergencies and assistance.',
      icon: <Phone className="w-5 h-5 text-blue-500" />
    },
    { 
      service: 'Fire Services', 
      number: '101', 
      description: 'For fire incidents and rescue operations.',
      icon: <Clock className="w-5 h-5 text-yellow-500" />
    },
    { 
      service: 'Ambulance Services', 
      number: '108', 
      description: 'For medical emergencies. A free service.',
      icon: <Ambulance className="w-5 h-5 text-green-500" />
    },
    {
      service: 'Disaster Management (NDMA)',
      number: '1070',
      description: 'For flood, earthquake, or other natural disaster relief.',
      icon: <Mail className="w-5 h-5 text-purple-500" />
    },
    {
      service: 'Road Accident',
      number: '1033',
      description: 'Highway emergency services for road accidents.',
      icon: <Car className="w-5 h-5 text-indigo-500" />
    },
    {
      service: 'Railway Accident',
      number: '1072',
      description: 'For emergencies related to railway incidents.',
      icon: <Train className="w-5 h-5 text-gray-700" />
    },
    {
      service: 'Women Helpline',
      number: '1091',
      description: '24/7 helpline for women in distress.',
      icon: <PersonStanding className="w-5 h-5 text-pink-500" />
    },
    {
      service: 'Child Helpline',
      number: '1098',
      description: 'For children in need of care and protection.',
      icon: <Baby className="w-5 h-5 text-teal-500" />
    },
    {
      service: 'Cyber Crime',
      number: '155260',
      description: 'Report cyber-related frauds and crimes.',
      icon: <Users className="w-5 h-5 text-gray-500" />
    }
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Emergency Contacts</h1>
            <p className="text-gray-600 mt-1">Quick access to essential emergency numbers for any crisis.</p>
          </div>
          <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
            <Shield className="w-5 h-5 text-red-500" />
            <span className="text-sm font-medium text-gray-700">Always available</span>
          </div>
        </div>

        {/* Emergency Numbers */}
        <div className="mt-8 bg-red-50 border border-red-200 rounded-2xl p-6 shadow-lg">
          <h2 className="text-xl font-semibold text-red-900 mb-4">Critical Emergency Numbers (India)</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {emergencyNumbers.map((emergency, index) => (
              <a 
                href={`tel:${emergency.number}`}
                key={index} 
                className="bg-white rounded-xl p-6 border border-red-200 shadow-sm transition-transform hover:scale-105 flex items-start space-x-4 no-underline"
              >
                <div className="bg-red-100 p-3 rounded-lg flex-shrink-0">
                  {emergency.icon}
                </div>
                <div>
                  <h3 className="font-medium text-red-900 text-sm mb-1">{emergency.service}</h3>
                  <p className="text-2xl font-bold text-red-700 mb-1">{emergency.number}</p>
                  <p className="text-xs text-red-600">{emergency.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
