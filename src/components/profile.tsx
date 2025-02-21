"use client"

import React, { useState } from 'react';

interface ProfilePageProps {
  name: string;
  age: string;
  bio: string;
  email: string;
  profilePicture: string;
  location: string;
  dateOfBirth: string;
  gender: string;
  website?: string;
}

const ProfilePage: React.FC<ProfilePageProps> = ({
  name,
  age,
  bio,
  email,
  profilePicture,
  location,
  dateOfBirth,
  gender,
  website,
}) => {
  const [activeTab, setActiveTab] = useState<'medical' | 'clinical' | 'affiliations'>('medical');

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg overflow-hidden rounded-lg">
        {/* Profile Header */}
        <div className="bg-gray-300 p-6">
          <div className="flex items-center space-x-6">
            <img
              src={profilePicture}
              alt={`${name}'s profile`}
              className="w-24 h-24 rounded-full border-4 border-white"
            />
            <div>
              <h1 className="text-3xl font-bold text-white">{name}</h1>
              <p className="text-gray-200">Age: {age}</p>
              <p className="text-gray-200">Date of Birth: {dateOfBirth}</p>
              <p className="text-gray-200">Gender: {gender}</p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => setActiveTab('medical')}
            className={`flex-1 py-3 text-center font-semibold ${
              activeTab === 'medical'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Medical Record
          </button>
          <button
            onClick={() => setActiveTab('clinical')}
            className={`flex-1 py-3 text-center font-semibold ${
              activeTab === 'clinical'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Clinical History
          </button>
          <button
            onClick={() => setActiveTab('affiliations')}
            className={`flex-1 py-3 text-center font-semibold ${
              activeTab === 'affiliations'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Affiliations
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6">
          {activeTab === 'medical' && (
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Medical Record</h2>
              <p className="text-gray-600">Placeholder for medical record content.</p>
            </div>
          )}

          {activeTab === 'clinical' && (
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Clinical History</h2>
              <p className="text-gray-600">Placeholder for clinical history content.</p>
            </div>
          )}

          {activeTab === 'affiliations' && (
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Affiliations</h2>
              <p className="text-gray-600">Placeholder for affiliations content.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;