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
import VirtualFloodDrill from './components/Drills/VirtualFloodDrill.jsx';
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

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        Loading...
      </div>
    );

  if (showLanding)
    return <DisasterLandingPage onGetStartedClick={() => setShowLanding(false)} />;

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
            <h2 className="text-2xl font-bold mb-6">Choose a Drill</h2>
            <div className="flex gap-6 flex-wrap">
              {/* Earthquake Drill Card */}
              <div
                onClick={() => setActiveTab('earthquake-drill')}
                className="flex-1 min-w-[200px] bg-red-600 text-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-red-700 transition"
              >
                <span className="text-4xl mb-2">🌍</span>
                <span className="text-lg font-semibold">Earthquake Drill</span>
              </div>

              {/* Fire Drill Card */}
              <div
                onClick={() => setActiveTab('fire-drill')}
                className="flex-1 min-w-[200px] bg-orange-600 text-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-orange-700 transition"
              >
                <span className="text-4xl mb-2">🔥</span>
                <span className="text-lg font-semibold">Fire Drill</span>
              </div>

              {/* Flood Drill Card */}
              <div
                onClick={() => setActiveTab('flood-drill')}
                className="flex-1 min-w-[200px] bg-blue-600 text-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-blue-700 transition"
              >
                <span className="text-4xl mb-2">🌊</span>
                <span className="text-lg font-semibold">Virtual Flood Drill</span>
              </div>
            </div>
          </div>
        );
      case 'earthquake-drill':
        return <VirtualEarthquakeDrill />;
      case 'fire-drill':
        return <VirtualFireDrill />;
      case 'flood-drill':
        return <VirtualFloodDrill />;
      case 'contacts':
        return <EmergencyContacts />;
      case 'Quiz':
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
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <Sidebar
        activeTab={activeTab}
        onTabChange={setActiveTab}
        isOpen={isMobileMenuOpen}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header
          onMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          isMobileMenuOpen={isMobileMenuOpen}
          setActiveTab={setActiveTab}   // ✅ passed down
        />
        <main className="flex-1 relative overflow-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {renderContent()}
          </div>
        </main>
      </div>

      {/* ChatBot Widget */}
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
