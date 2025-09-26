import React from 'react';
import { IoMdNotifications } from "react-icons/io"
import { IoGameController } from "react-icons/io5";

import { 
  Home, 
  BookOpen, 
  AlertTriangle, 
  Zap, 
  Users, 
  MessageSquare, 
  BarChart3,
  Trophy,
  Phone
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

export default function Sidebar({ activeTab, onTabChange, isOpen }) {
  const { user } = useAuth();

  const navigationItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home, roles: ['student', 'admin'] },
    { id: 'education', label: 'Learn & Train', icon: BookOpen, roles: ['student', 'admin'] },
    { id: 'alerts', label: 'Notifications', icon: IoMdNotifications, roles: ['student', 'admin'] },
    { id: 'drills', label: 'Virtual Drills', icon: Zap, roles: ['student'] },
    { id: 'contacts', label: 'Emergency Contacts', icon: Phone, roles: ['student', 'admin'] },
    { id: 'Quiz', label: 'Gamification', icon: IoGameController, roles: ['student'] },
    {id: 'faq', label: 'FAQ', icon: MessageSquare, roles: ['student', 'admin']},
    {id: 'feedback', label: 'Feedback', icon: MessageSquare, roles: ['student', 'admin']},
  ];

  const visibleItems = navigationItems.filter(item => 
    item.roles.includes(user?.role || 'student')
  );

  return (
    <aside className={`
      fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-lg border-r border-gray-200 transform transition-transform duration-200 ease-in-out
      md:relative md:transform-none md:shadow-none
      ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
    `}>
      <div className="flex flex-col h-full">
        <div className="flex-1 py-6 overflow-y-auto">
          <nav className="px-3 space-y-1">
            {visibleItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => onTabChange(item.id)}
                  className={`
                    w-full flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors
                    ${activeTab === item.id
                      ? 'bg-red-50 text-red-700 border-r-2 border-red-600'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                    }
                  `}
                >
                  <Icon size={20} className="mr-3" />
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* User Stats */}
        <div className="p-4 border-t border-gray-200">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-3">
            <h4 className="text-sm font-medium text-gray-900 mb-2">Your Progress</h4>
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span className="text-gray-600">Points</span>
                <span className="font-medium text-blue-600">{user?.points || 0}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-600">Badges</span>
                <span className="font-medium text-green-600">{user?.badges?.length || 0}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}