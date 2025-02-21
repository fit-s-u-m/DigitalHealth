"use client";

import React, { useState } from "react";

interface ProfilePageProps {
  name: string;
  age: string;
  phoneno: string;
  id:string;
  bloodtype: string;
  profilePicture: string;
  location: string;
  dateOfBirth: string;
  gender: string;
  website?: string;
}

const ProfilePage: React.FC<ProfilePageProps> = ({
  name,
  age,
  phoneno,
  bloodtype,
  id,
  profilePicture,
  location,
  dateOfBirth,
  gender,
  website,
}) => {
  const [activeTab, setActiveTab] = useState<"medical" | "clinical" | "affiliations">("medical");

  return (
    <div className="m-4 flex items-center justify-center bg-white">
      <div className="max-w w-full bg-[#2CAA83] shadow-xl rounded-xl overflow-hidden border border-gray-300">
        {/* Profile Header */}
        <div className="relative flex bg-[#228C6A] p-6 text-center text-white">
          <img
            src={profilePicture}
            alt={`${name}'s profile`}
            className="w-24 h-24 rounded-full border-4 border-white mx-8 mt-6 p-8 shadow-lg "
          />
          <div className="textContainer">
          <h1 className="text-3xl font-semibold mb-0 mt-2">{name}</h1>
          <p className=" text-gray-300 text-sm mb-4">#00000000000{id}</p>
          <p className="text-lg">Age:{age}</p>
          <p className="text-lg">Phone no: {phoneno}</p>
          <p className="text-lg">Blood Type: {dateOfBirth}</p>
          
          </div>
        </div>

        {/* Tabs */}
        <div className="flex bg-white border-b border-gray-300">
          {["medical", "clinical", "affiliations"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`flex-1 py-3 text-center text-lg font-medium transition-all duration-300 
                ${activeTab === tab ? "text-[#2CAA83] border-b-2 border-[#2CAA83]" : "text-gray-600 hover:text-gray-800"}`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="p-6 bg-white text-black">
          {activeTab === "medical" && (
            <div>
              <h2 className="text-xl font-semibold text-[#2CAA83] mb-4">🩺 Medical Record</h2>
              <p className="text-gray-700">Detailed medical record information will appear here.</p>
            </div>
          )}

          {activeTab === "clinical" && (
            <div>
              <h2 className="text-xl font-semibold text-[#2CAA83] mb-4">📝 Clinical History</h2>
              <p className="text-gray-700">Clinical history details and past records.</p>
            </div>
          )}

          {activeTab === "affiliations" && (
            <div>
              <h2 className="text-xl font-semibold text-[#2CAA83] mb-4">🏛️ Affiliations</h2>
              <p className="text-gray-700">Professional affiliations and memberships.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
