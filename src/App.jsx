import React, { useState, useEffect } from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import LoginForm from './components/Auth/LoginForm';
import Header from './components/Layout/Header';
import Sidebar from './components/Layout/Sidebar';
import StudentDashboard from './components/Dashboard/StudentDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import EducationModules from './components/Education/EducationModules';
import EmergencyAlerts from './components/Alerts/EmergencyAlerts';
import VirtualEarthquakeDrill from './components/Drills/VirtualDrills.jsx';
import VirtualFireDrill from './components/Drills/VirtualFireDrill.jsx';
import EmergencyContacts from './components/Contacts/EmergencyContacts';
import Quiz from './components/Quiz/Quiz';
import { DisasterLandingPage } from './components/LandingPage/LandingPage';
import FAQ from './components/FeedbackAndFaq/FAQ';
import Feedback from './components/FeedbackAndFaq/Feedback';
import TeacherGuide from './components/Guidelines/Guidelines.jsx';
import WorkshopPage from './components/Workshop/workshop.jsx';
import ChatBotWidget from './components/ChatBot/ChatbotWidget.jsx';
import MyProfile from './components/Profile/MyProfile.jsx';
import AdminProfile from './components/Profile/AdminProfile.jsx';

function AppContent() {
  const { user, loading } = useAuth();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showLanding, setShowLanding] = useState(true);

  useEffect(() => setIsMobileMenuOpen(false), [activeTab]);

  if (loading) return <div className="flex items-center justify-center h-screen bg-gray-100">Loading...</div>;
  if (showLanding) return <DisasterLandingPage onGetStartedClick={() => setShowLanding(false)} />;
  if (!user) return <LoginForm />;

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return user.role === 'admin' ? <AdminDashboard /> : <StudentDashboard />;
      case 'education':
        return <EducationModules />;
      case 'alerts':
        return <EmergencyAlerts />;
      case 'drills':
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Choose a Drill</h2>
            <div className="flex gap-6">
              <button onClick={() => setActiveTab('earthquake-drill')} className="px-6 py-3 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700">🌍 Earthquake Drill</button>
              <button onClick={() => setActiveTab('fire-drill')} className="px-6 py-3 bg-orange-600 text-white rounded-lg shadow-md hover:bg-orange-700">🔥 Fire Drill</button>
            </div>
          </div>
        );
      case 'earthquake-drill':
        return <VirtualEarthquakeDrill />;
      case 'fire-drill':
        return <VirtualFireDrill />;
      case 'contacts':
        return <EmergencyContacts />;
      case 'quiz':
        return <Quiz />;
      case 'faq':
        return <FAQ />;
      case 'feedback':
        return <Feedback />;
      case 'workshop':
        return <WorkshopPage />;
      case 'guidelines':
        return <TeacherGuide />;
      case 'profile':
        return <MyProfile />;
      case 'admin-profile':
        return <AdminProfile />;
      default:
        return <StudentDashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100 relative">
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
             onClick={() => setIsMobileMenuOpen(false)} />
      )}

      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} isOpen={isMobileMenuOpen} />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header onMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)} isMobileMenuOpen={isMobileMenuOpen} setActiveTab={setActiveTab} />
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {renderContent()}
          </div>
        </main>
      </div>

      <ChatBotWidget />
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}
