"use client"

import { useState } from "react";

const EditPatient = () => {
  const [selectedSection, setSelectedSection] = useState("personal");

  const sections = {
    personal: {
      title: "Personal Information",
      fields: [
        { label: "Full Name", type: "text" },
        { label: "Date of Birth", type: "date" },
        { label: "Gender", type: "select", options: ["Male", "Female", "Other"] },
        { label: "Contact Number", type: "tel" }
      ]
    },
    medical: {
      title: "Medical Information",
      fields: [
        { label: "Blood Type", type: "text" },
        { label: "Allergies", type: "text" },
        { label: "Chronic Conditions", type: "text" }
      ]
    },
    clinical: {
      title: "Clinical Information",
      fields: [
        { label: "Recent Diagnosis", type: "text" },
        { label: "Current Medications", type: "text" },
        { label: "Last Doctor Visit", type: "date" }
      ]
    },
    affiliation: {
      title: "Affiliation",
      fields: [
        { label: "Insurance Provider", type: "text" },
        { label: "Policy Number", type: "text" },
        { label: "Next Follow-Up", type: "date" }
      ]
    }
  };

  // Function to handle date input change and trigger alert
  const handleDateChange = (e) => {
    alert('Date selected');
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-1/4 bg-[#228C6A] text-white p-6 flex flex-col gap-6">
        {Object.keys(sections).map((key) => (
          <button
            key={key}
            className={`p-4 rounded-lg text-left text-lg font-semibold transition duration-300 ease-in-out ${
              selectedSection === key
                ? "bg-white text-[#228C6A] shadow-lg"
                : "hover:bg-white hover:text-[#228C6A] hover:shadow-md"
            }`}
            onClick={() => setSelectedSection(key)}
          >
            {sections[key].title}
          </button>
        ))}
      </div>

      {/* Form Section */}
      <div className="w-3/4 p-12 bg-white shadow-lg rounded-lg m-6">
        <h2 className="text-3xl font-bold mb-8 text-[#228C6A]">{sections[selectedSection].title}</h2>
        <form className="space-y-6">
          {sections[selectedSection].fields.map((field, index) => (
            <div key={index}>
              <label className="block text-lg font-medium text-gray-800 mb-2">{field.label}</label>
              {field.type === "select" ? (
                <select className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#228C6A]">
                  {field.options.map((option, i) => (
                    <option key={i} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : field.type === "date" ? (
                <input
                  type={field.type}
                  className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#228C6A]"
                  onChange={handleDateChange}  // Call handleDateChange when a date is selected
                />
              ) : (
                <input
                  type={field.type}
                  className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#228C6A]"
                />
              )}
            </div>
          ))}
          <button className="mt-6 w-full py-3 bg-[#228C6A] text-white font-semibold rounded-lg hover:bg-[#1a6d4b] transition duration-300 ease-in-out">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditPatient;
