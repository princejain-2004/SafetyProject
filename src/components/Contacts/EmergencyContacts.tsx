import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  User, 
  Shield,
  Search,
  Filter
} from 'lucide-react';

interface Contact {
  id: string;
  name: string;
  role: string;
  department: string;
  phone: string;
  email: string;
  location?: string;
  available24_7: boolean;
  priority: number;
  extension?: string;
}

export default function EmergencyContacts() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const contacts: Contact[] = [
    {
      id: '1',
      name: 'Dr. Sarah Martinez',
      role: 'Emergency Coordinator',
      department: 'Administration',
      phone: '(555) 123-4567',
      email: 's.martinez@school.edu',
      location: 'Main Office, Room 101',
      available24_7: true,
      priority: 1,
      extension: '1001'
    },
    {
      id: '2',
      name: 'Officer Michael Chen',
      role: 'School Resource Officer',
      department: 'Security',
      phone: '(555) 234-5678',
      email: 'm.chen@security.school.edu',
      location: 'Security Office',
      available24_7: true,
      priority: 1
    },
    {
      id: '3',
      name: 'Nurse Jennifer Wilson',
      role: 'Head Nurse',
      department: 'Health Services',
      phone: '(555) 345-6789',
      email: 'j.wilson@school.edu',
      location: 'Health Office',
      available24_7: false,
      priority: 2,
      extension: '2001'
    },
    {
      id: '4',
      name: 'Tom Rodriguez',
      role: 'Facilities Manager',
      department: 'Maintenance',
      phone: '(555) 456-7890',
      email: 't.rodriguez@school.edu',
      location: 'Maintenance Building',
      available24_7: true,
      priority: 2
    },
    {
      id: '5',
      name: 'Dr. Emily Johnson',
      role: 'Principal',
      department: 'Administration',
      phone: '(555) 567-8901',
      email: 'e.johnson@school.edu',
      location: 'Principal Office, Room 105',
      available24_7: false,
      priority: 2,
      extension: '1005'
    },
    {
      id: '6',
      name: 'Mark Thompson',
      role: 'IT Director',
      department: 'Technology',
      phone: '(555) 678-9012',
      email: 'm.thompson@school.edu',
      location: 'IT Center',
      available24_7: false,
      priority: 3
    }
  ];

  const emergencyNumbers = [
    { service: 'Emergency Services', number: '911', description: 'Police, Fire, Medical' },
    { service: 'Poison Control', number: '1-800-222-1222', description: 'National poison emergency' },
    { service: 'Crisis Hotline', number: '988', description: '24/7 mental health crisis support' },
    { service: 'Non-Emergency Police', number: '(555) 311-0000', description: 'Local police non-emergency' }
  ];

  const departments = ['all', ...Array.from(new Set(contacts.map(c => c.department)))];

  const filteredContacts = contacts.filter(contact => {
    const matchesSearch = contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         contact.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         contact.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === 'all' || contact.department === selectedDepartment;
    return matchesSearch && matchesDepartment;
  }).sort((a, b) => a.priority - b.priority);

  const getPriorityColor = (priority: number) => {
    switch (priority) {
      case 1: return 'bg-red-100 text-red-700';
      case 2: return 'bg-yellow-100 text-yellow-700';
      case 3: return 'bg-green-100 text-green-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getPriorityLabel = (priority: number) => {
    switch (priority) {
      case 1: return 'Critical';
      case 2: return 'High';
      case 3: return 'Standard';
      default: return 'Low';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Emergency Contacts</h1>
          <p className="text-gray-600 mt-1">Quick access to essential emergency personnel</p>
        </div>
        <div className="flex items-center space-x-2">
          <Shield className="w-5 h-5 text-red-500" />
          <span className="text-sm font-medium text-gray-700">Always available</span>
        </div>
      </div>

      {/* Emergency Numbers */}
      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
        <h2 className="text-lg font-semibold text-red-900 mb-3">Critical Emergency Numbers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {emergencyNumbers.map((emergency, index) => (
            <div key={index} className="bg-white rounded-lg p-3 border border-red-200">
              <h3 className="font-medium text-red-900 text-sm mb-1">{emergency.service}</h3>
              <p className="text-lg font-bold text-red-700 mb-1">{emergency.number}</p>
              <p className="text-xs text-red-600">{emergency.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Search and Filter */}
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search contacts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5 text-gray-400" />
            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {departments.map(department => (
                <option key={department} value={department}>
                  {department === 'all' ? 'All Departments' : department}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Contacts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredContacts.map((contact) => (
          <div
            key={contact.id}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="bg-blue-100 p-2 rounded-lg">
                <User className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex items-center space-x-2">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(contact.priority)}`}>
                  {getPriorityLabel(contact.priority)}
                </span>
                {contact.available24_7 && (
                  <div className="flex items-center bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                    <Clock className="w-3 h-3 mr-1" />
                    <span>24/7</span>
                  </div>
                )}
              </div>
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mb-1">{contact.name}</h3>
            <p className="text-sm text-gray-600 mb-1">{contact.role}</p>
            <p className="text-sm text-blue-600 mb-4">{contact.department}</p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-gray-400" />
                <div>
                  <p className="font-medium text-gray-900">{contact.phone}</p>
                  {contact.extension && (
                    <p className="text-xs text-gray-500">Ext. {contact.extension}</p>
                  )}
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-gray-400" />
                <p className="text-sm text-gray-700">{contact.email}</p>
              </div>

              {contact.location && (
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <p className="text-sm text-gray-700">{contact.location}</p>
                </div>
              )}
            </div>

            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex space-x-2">
                <button className="flex-1 bg-blue-600 text-white py-2 px-3 rounded-md hover:bg-blue-700 transition-colors text-sm font-medium flex items-center justify-center space-x-1">
                  <Phone className="w-4 h-4" />
                  <span>Call</span>
                </button>
                <button className="flex-1 bg-gray-100 text-gray-700 py-2 px-3 rounded-md hover:bg-gray-200 transition-colors text-sm font-medium flex items-center justify-center space-x-1">
                  <Mail className="w-4 h-4" />
                  <span>Email</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredContacts.length === 0 && (
        <div className="text-center py-12">
          <User className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-500">No contacts found matching your search.</p>
        </div>
      )}
    </div>
  );
}