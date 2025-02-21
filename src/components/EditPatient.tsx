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

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/4 bg-[#228C6A] text-white p-5 flex flex-col gap-4">
        {Object.keys(sections).map((key) => (
          <button
            key={key}
            className={`p-3 rounded-lg text-left ${selectedSection === key ? "bg-white text-[#228C6A]" : "hover:bg-white hover:text-[#228C6A]"}`}
            onClick={() => setSelectedSection(key)}
          >
            {sections[key].title}
          </button>
        ))}
      </div>

      {/* Form Section */}
      <div className="w-3/4 p-10">
        <h2 className="text-2xl font-semibold mb-5 text-[#228C6A]">{sections[selectedSection].title}</h2>
        <form className="space-y-4">
          {sections[selectedSection].fields.map((field, index) => (
            <div key={index}>
              <label className="block text-gray-700 mb-2">{field.label}</label>
              {field.type === "select" ? (
                <select className="w-full p-2 border border-gray-300 rounded-lg">
                  {field.options.map((option, i) => (
                    <option key={i} value={option}>{option}</option>
                  ))}
                </select>
              ) : (
                <input type={field.type} className="w-full p-2 border border-gray-300 rounded-lg" />
              )}
            </div>
          ))}
          <button className="mt-5 p-3 bg-[#228C6A] text-white rounded-lg hover:opacity-90">Save Changes</button>
        </form>
      </div>
    </div>
  );
};

export default EditPatient;
