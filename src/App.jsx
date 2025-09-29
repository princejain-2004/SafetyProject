import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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
import AdminProfile from './components/Profile/AdminProfile.jsx'; // ✅ AdminProfile

function AppContent() {
  const { user, loading } = useAuth();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showLanding, setShowLanding] = useState(true);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [activeTab]);

  if (loading) return <div className="flex items-center justify-center h-screen bg-gray-100">Loading...</div>;
  if (showLanding) return <DisasterLandingPage onGetStartedClick={() => setShowLanding(false)} />;
  if (!user) return <LoginForm />;

  return (
    <Router>
      <div className="flex h-screen bg-gray-100 relative">
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
               onClick={() => setIsMobileMenuOpen(false)} />
        )}
        <Sidebar activeTab={activeTab} onTabChange={setActiveTab} isOpen={isMobileMenuOpen} />

        <div className="flex-1 flex flex-col overflow-hidden">
          <Header onMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)} isMobileMenuOpen={isMobileMenuOpen} />

          <main className="flex-1 overflow-y-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <Routes>
                <Route path="/" element={user.role === 'admin' ? <AdminDashboard /> : <StudentDashboard />} />
                <Route path="/education" element={<EducationModules />} />
                <Route path="/alerts" element={<EmergencyAlerts />} />
                <Route path="/drills" element={<div>Select a drill</div>} />
                <Route path="/earthquake-drill" element={<VirtualEarthquakeDrill />} />
                <Route path="/fire-drill" element={<VirtualFireDrill />} />
                <Route path="/contacts" element={<EmergencyContacts />} />
                <Route path="/quiz" element={<Quiz />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/feedback" element={<Feedback />} />
                <Route path="/workshop" element={<WorkshopPage />} />
                <Route path="/guidelines" element={<TeacherGuide />} />

                {/* Conditional profile route */}
                <Route
                  path="/profile"
                  element={user.role === 'admin' ? <AdminProfile /> : <MyProfile />}
                />

                {/* Redirect unknown routes to dashboard */}
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </div>
          </main>
        </div>

        <ChatBotWidget />
      </div>
    </Router>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}
