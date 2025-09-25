import React, { useState } from 'react';
import { Shield, Bell, User, Menu, X, LogOut } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

export default function Header({ onMenuToggle, isMobileMenuOpen }) {
  const { user, logout, switchRole } = useAuth();
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showRoleSwitch, setShowRoleSwitch] = useState(false);

  const alertCount = 2; // Mock alert count

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Title */}
          <div className="flex items-center space-x-4">
            <button
              onClick={onMenuToggle}
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-3">
                <img src="src\Assets\Logo.png" alt="SafetyFirst Logo" className="w-20 h-15" />
              </div>

              <div>
                <h1 className="text-xl font-bold text-gray-900">SafetyFirst</h1>
                <p className="text-xs text-gray-500 hidden sm:block">Emergency Preparedness Platform</p>
              </div>
            </div>
          </div>

          {/* Right side - Alerts and User Menu */}
          <div className="flex items-center space-x-4">
            {/* Alerts */}
            <div className="relative">
              <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors">
                <Bell size={20} />
                {alertCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {alertCount}
                  </span>
                )}
              </button>
            </div>

            {/* User Menu */}
            <div className="relative">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <User size={16} className="text-white" />
                </div>
                <div className="hidden sm:block text-left">
                  <p className="text-sm font-medium text-gray-900">{user?.name}</p>
                  <p className="text-xs text-gray-500 capitalize">{user?.role}</p>
                </div>
              </button>

              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
                  <div className="px-4 py-2 border-b border-gray-200">
                    <p className="text-sm font-medium text-gray-900">{user?.name}</p>
                    <p className="text-xs text-gray-500">{user?.email}</p>
                  </div>
                  
                  <button
                    onClick={() => {
                      setShowRoleSwitch(!showRoleSwitch);
                      setShowUserMenu(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Switch Role
                  </button>
                  
                  <button
                    onClick={logout}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2"
                  >
                    <LogOut size={14} />
                    <span>Sign Out</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Role Switch Modal */}
      {showRoleSwitch && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-80">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Switch Role</h3>
            <div className="space-y-2">
              {['student', 'teacher', 'admin'].map((role) => (
                <button
                  key={role}
                  onClick={() => {
                    switchRole(role);
                    setShowRoleSwitch(false);
                  }}
                  className={`w-full text-left px-4 py-2 rounded-md capitalize transition-colors ${
                    user?.role === role 
                      ? 'bg-blue-100 text-blue-900' 
                      : 'hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  {role}
                </button>
              ))}
            </div>
            <button
              onClick={() => setShowRoleSwitch(false)}
              className="mt-4 w-full px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </header>
  );
}