"use client";

import React from "react";
import { Pencil } from "lucide-react"; // Importing Lucide Icon

interface PatientCardProps {
  name: string;
  id: string;
  profilePicture: string;
}

const PatientCard: React.FC<PatientCardProps> = ({ name, id, profilePicture }) => {
  function handleEditPatient() {
    alert("Edit clicked");
  }

  return (
    <div className="relative bg-white shadow-lg rounded-xl p-6 max-w-s my-3 border-gray-200 transition-all duration-300 hover:shadow-xl flex flex-col items-center">
      {/* Edit Button */}
      <button
        className="absolute top-3 right-3 text-green-500 hover:text-green-600 transition-all duration-200"
        onClick={handleEditPatient}
      >
        <Pencil className="w-5 h-5" />
      </button>

      {/* Profile Section */}
      <img
        src={profilePicture}
        alt={`${name}'s profile`}
        className="w-24 h-24 rounded-full border-4 border-gray-300 shadow-md"
      />

      <div className="mt-4 text-center">
        <h2 className="text-lg font-semibold text-gray-900">{name}</h2>
        <p className="text-gray-600 text-sm">{`ID: ${id}`}</p>
      </div>
    </div>
  );
};

export default PatientCard;
