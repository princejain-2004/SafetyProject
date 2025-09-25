import React from 'react';
import { AlertTriangle, Shield, Map, Users, Zap } from 'lucide-react';

export const DisasterLandingPage = ({ onGetStartedClick }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-green-600 text-white">
      {/* Header */}
      <header className="p-6 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img src="src\Assets\Logo.png" alt="SafetyFirst Logo" className="w-20 h-15" />
          <h1 className="text-2xl font-bold">SafetyFirst</h1>
        </div>
        {/* <button
          onClick={onGetStartedClick}
          className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all"
        >
          Get Started
        </button> */}
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Be Prepared, Stay{" "}
            <span
              className="text-yellow-400"
              style={{ textShadow: '0 0 15px rgba(250,204,21,0.8)' }}
            >
              Safe
            </span>
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Your one-stop platform for disaster preparedness. Learn safety
            protocols, take interactive quizzes, and stay connected with your
            community in times of need.
          </p>
          <button
            onClick={onGetStartedClick}
            className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-500/50 focus:outline-none"
          >
            Get Started
          </button>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <FeatureCard
            icon={<Shield className="w-8 h-8" />}
            title="Emergency Training"
            description="Access interactive modules and quizzes on earthquake, fire, and flood safety."
          />
          <FeatureCard
            icon={<Map className="w-8 h-8" />}
            title="Safe Navigation"
            description="Find safe routes, shelters, and emergency contacts tailored to your location."
          />
          <FeatureCard
            icon={<Users className="w-8 h-8" />}
            title="Community Support"
            description="Connect with volunteers and neighbors during emergencies for help and guidance."
          />
        </div>

        {/* Preparedness Preview */}
        <div className="text-center">
          <div className="bg-white bg-opacity-95 rounded-2xl p-8 max-w-2xl mx-auto shadow-xl border-2 border-yellow-400 hover:shadow-[0_0_25px_rgba(250,204,21,0.7)] transition-all">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full animate-pulse shadow-lg">
                <div className="w-full h-full flex items-center justify-center">
                  <Zap className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
            <h3
              className="text-2xl font-bold text-black mb-4"
              style={{ textShadow: '0 0 6px rgba(250,204,21,0.6)' }}
            >
              Learn. Prepare. Respond.
            </h3>
            <p className="text-gray-800 leading-relaxed">
              Stay ready for natural disasters with interactive lessons and
              real-time safety updates. DisasterReady empowers you with
              knowledge to act when it matters most.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white bg-opacity-90 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-yellow-400 hover:shadow-yellow-400/40">
      <div className="text-yellow-500 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-black mb-3">{title}</h3>
      <p className="text-gray-800 leading-relaxed">{description}</p>
    </div>
  );
};
