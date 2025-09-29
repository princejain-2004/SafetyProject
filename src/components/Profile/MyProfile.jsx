import React from 'react';
import { ArrowLeft } from 'lucide-react';

export default function MyProfile({ setActiveTab }) {
  const profileData = {
    "Full Name": "Mohit Vijay",
    "Roll No.": "23",
    "Class": "10th",
    "Section": "A",
    "Contact No.": "9876234930",
    "Guardian Phone No.": "9876543210",
    "Email": "mohit.vijay@example.com",
    "School Code": "SCH1234",
    "Pincode": "313001",
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-3xl w-full mx-auto p-6 bg-white shadow-md rounded-lg">
        {/* Back Button */}
        <button
          onClick={() => setActiveTab("dashboard")}
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
    </div>
  );
}
