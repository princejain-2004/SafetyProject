import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

export default function AdminProfile({ setActiveTab }) {
  const { user } = useAuth();

  const profileData = {
    "Full Name": "Mukesh Kumar",
    "School Name": "ABC High School",
    "Contact No.": "9876234389",
    "Email": "mukesh.kumar@example.com",
    "School Code": "SCH1234",
    "Pincode": "313001",
    "Address": "123 Main St, City, State",
  };

  const handleBack = () => {
    setActiveTab("dashboard"); // ✅ returns to dashboard tab
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      {/* Back Button */}
      <button
        onClick={handleBack}
        className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 mb-6"
      >
        <ArrowLeft size={16} />
        <span>Back to Dashboard</span>
      </button>

      <h2 className="text-2xl font-bold mb-6 text-gray-900">My Profile</h2>
      <div className="space-y-4">
        {Object.entries(profileData).map(([label, value]) => (
          <div
            key={label}
            className="flex justify-between items-center p-2 border rounded-md"
          >
            <span className="text-gray-600 font-medium">{label}</span>
            <span className="text-gray-900">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
