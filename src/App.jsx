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
import EmergencyContacts from './components/Contacts/EmergencyContacts';
import Quiz from './components/Quiz/Quiz';
import { DisasterLandingPage } from './components/LandingPage/LandingPage';
import FAQ from './components/FeedbackAndFaq/FAQ';
import Feedback from './components/FeedbackAndFaq/Feedback';

// ✅ Import chatbot widget
import ChatBotWidget from './components/ChatBot/ChatbotWidget.jsx';
import WorkshopPage from './components/Workshop/workshop.jsx';

function AppContent() {
  const { user, loading } = useAuth();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showLanding, setShowLanding] = useState(true);

  useEffect(() => {
    // Close mobile menu when tab changes
    setIsMobileMenuOpen(false);
  }, [activeTab]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="flex flex-col items-center">
          <div className="animate-spin h-12 w-12 border-4 border-blue-600 border-t-transparent rounded-full"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  // Step 1: Show landing page first
  if (showLanding) {
    return <DisasterLandingPage onGetStartedClick={() => setShowLanding(false)} />;
  }

  // Step 2: If no user logged in → show login/signup
  if (!user) {
    return <LoginForm />;
  }

  // Step 3: If logged in → show main app
  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return user.role === 'admin' ? <AdminDashboard /> : <StudentDashboard />;
      case 'education':
        return <EducationModules />;
      case 'alerts':
        return <EmergencyAlerts />;
      case 'drills':
        return <FloodQuiz />; 
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
      default:
        return <StudentDashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100 relative">
      {/* Mobile overlay */}
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
        />
        
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {renderContent()}
          </div>
        </main>
      </div>

      {/* ✅ ChatBot always available */}
      <ChatBotWidget />
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
