"use client";

import { Search, UserPlus } from "lucide-react"; // Importing Lucide Icons

function PatientHeader() {
  function handleAddPatient() {
    alert("Add Patient Clicked");
  }

  return (
    <div className="bg-white shadow-lg rounded-xl p-5 mx-4 my-3">
      <div className="flex justify-between items-center">
        {/* Title */}
        <h1 className="text-2xl font-semibold text-gray-800 tracking-wide">Patients</h1>

        {/* Search Bar */}
        <div className="relative w-72">
          <input
            type="text"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full bg-gray-100 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Search patients..."
          />
          <div className="absolute inset-y-0 left-3 flex items-center">
            <Search className="w-5 h-5 text-gray-500" />
          </div>
        </div>

        {/* Add Patient Button */}
        <button
          className="flex items-center gap-2 px-5 py-2 text-white bg-gradient-to-r from-green-500 to-green-700 rounded-full text-sm font-medium shadow-md transition-all duration-300 hover:shadow-lg hover:from-green-600 hover:to-green-800 focus:outline-none"
          onClick={handleAddPatient}
        >
          <UserPlus className="w-5 h-5" /> Add Patient
        </button>
      </div>

      {/* Patient Count Card */}
      <div className="mt-5 p-4 bg-gray-100 rounded-lg shadow-sm max-w-xs">
        <h2 className="text-gray-600 text-sm">Total Patients</h2>
        <p className="text-3xl font-bold text-gray-900">1,234</p>
      </div>
    </div>
  );
}

export default PatientHeader;
