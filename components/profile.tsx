"use client";

import React, { useState } from "react";
import BackButton from "@/components/backButton";

interface ProfilePageProps {
  name: string;
  age: string;
  phoneno: string;
  id: string;
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

  // Dummy data
  const medicalRecord = {
    allergies: ["Pollen", "Penicillin"],
    chronic_conditions: ["Hypertension", "Type 2 Diabetes"],
    current_medications: ["Metformin 500mg", "Lisinopril 10mg"],
    past_surgeries: ["Appendectomy (2015)", "Knee Arthroscopy (2020)"],
    family_medical_history: ["Father: Heart Disease", "Mother: Breast Cancer"],
    vaccination_history: ["COVID-19 Vaccine (2021)", "Flu Vaccine (2023)"],
    last_updated: "2024-03-15",
  };

  const clinicalRecord = {
    recent_visits: [
      {
        date: "2024-03-10",
        doctor: "Dr. Smith",
        reason: "Routine Checkup",
        diagnosis: "Stable Condition",
        prescription: "Continue current medications",
        notes: "Patient advised to maintain a healthy diet and exercise regularly.",
      },
      {
        date: "2024-02-20",
        doctor: "Dr. Johnson",
        reason: "High Blood Pressure",
        diagnosis: "Hypertension",
        prescription: "Increased Lisinopril dosage",
        notes: "Patient to monitor blood pressure daily.",
      },
    ],
    lab_results: [
      {
        test_name: "Complete Blood Count",
        date: "2024-03-05",
        result: "Normal",
        unit: "N/A",
        normal_range: "N/A",
      },
      {
        test_name: "HbA1c",
        date: "2024-03-05",
        result: "6.5%",
        unit: "%",
        normal_range: "4.0% - 5.6%",
      },
    ],
    imaging_reports: [
      {
        type: "Chest X-Ray",
        date: "2024-02-25",
        findings: "No abnormalities detected",
        radiologist_notes: "Normal chest X-ray.",
      },
    ],
    vital_signs: {
      blood_pressure: "120/80 mmHg",
      heart_rate: "72 bpm",
      respiratory_rate: "16 breaths/min",
      temperature: "98.6°F",
      oxygen_saturation: "98%",
    },
    current_treatment_plans: [
      "Manage diabetes with Metformin and lifestyle changes.",
      "Control hypertension with Lisinopril and regular monitoring.",
    ],
  };

  const affiliation = {
    insurance: {
      provider: "HealthCare Plus",
      policy_number: "HC123456789",
      coverage_details: "Full coverage for hospital stays and prescriptions.",
      expiration_date: "2025-12-31",
    },
    doctor_follow_ups: [
      {
        doctor_name: "Dr. Smith",
        specialty: "General Physician",
        next_appointment: "2024-04-15",
        location: "Main Hospital, Room 204",
        notes: "Routine follow-up for diabetes management.",
      },
      {
        doctor_name: "Dr. Johnson",
        specialty: "Cardiologist",
        next_appointment: "2024-05-01",
        location: "Cardiology Center, Room 101",
        notes: "Follow-up for hypertension control.",
      },
    ],
  };

  return (
    <div className="m-4 flex items-center justify-center bg-white mt-20">
      <div className="max-w w-full bg-[#2CAA83] shadow-xl rounded-xl overflow-hidden border border-gray-300">
        {/* Profile Header */}
        <div className="relative flex bg-[#228C6A] p-6 text-center text-white ">
          <img
            src={profilePicture}
            alt={`${name}'s profile`}
            className="w-24 h-24 rounded-full border-4 border-white mx-8 mt-6 p-8 shadow-lg "
          />
          <div className="textContainer">
            <h1 className="text-3xl font-semibold mb-0 mt-2">{name}</h1>
            <p className=" text-gray-300 text-sm mb-4">#00000000000{id}</p>
            <p className="text-lg">Age: {age}</p>
            <p className="text-lg">Phone no: {phoneno}</p>
            <p className="text-lg">Blood Type: {bloodtype}</p>
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
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">Allergies</h3>
                  <ul className="list-disc list-inside">
                    {medicalRecord.allergies.map((allergy, index) => (
                      <li key={index}>{allergy}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold">Chronic Conditions</h3>
                  <ul className="list-disc list-inside">
                    {medicalRecord.chronic_conditions.map((condition, index) => (
                      <li key={index}>{condition}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold">Current Medications</h3>
                  <ul className="list-disc list-inside">
                    {medicalRecord.current_medications.map((medication, index) => (
                      <li key={index}>{medication}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold">Past Surgeries</h3>
                  <ul className="list-disc list-inside">
                    {medicalRecord.past_surgeries.map((surgery, index) => (
                      <li key={index}>{surgery}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold">Family Medical History</h3>
                  <ul className="list-disc list-inside">
                    {medicalRecord.family_medical_history.map((history, index) => (
                      <li key={index}>{history}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold">Vaccination History</h3>
                  <ul className="list-disc list-inside">
                    {medicalRecord.vaccination_history.map((vaccine, index) => (
                      <li key={index}>{vaccine}</li>
                    ))}
                  </ul>
                </div>
                <p className="text-sm text-gray-500">Last Updated: {medicalRecord.last_updated}</p>
              </div>
            </div>
          )}

          {activeTab === "clinical" && (
            <div>
              <h2 className="text-xl font-semibold text-[#2CAA83] mb-4">📝 Clinical History</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">Recent Visits</h3>
                  {clinicalRecord.recent_visits.map((visit, index) => (
                    <div key={index} className="mb-4">
                      <p><strong>Date:</strong> {visit.date}</p>
                      <p><strong>Doctor:</strong> {visit.doctor}</p>
                      <p><strong>Reason:</strong> {visit.reason}</p>
                      <p><strong>Diagnosis:</strong> {visit.diagnosis}</p>
                      <p><strong>Prescription:</strong> {visit.prescription}</p>
                      <p><strong>Notes:</strong> {visit.notes}</p>
                    </div>
                  ))}
                </div>
                <div>
                  <h3 className="font-semibold">Lab Results</h3>
                  {clinicalRecord.lab_results.map((lab, index) => (
                    <div key={index} className="mb-4">
                      <p><strong>Test Name:</strong> {lab.test_name}</p>
                      <p><strong>Date:</strong> {lab.date}</p>
                      <p><strong>Result:</strong> {lab.result}</p>
                      <p><strong>Unit:</strong> {lab.unit}</p>
                      <p><strong>Normal Range:</strong> {lab.normal_range}</p>
                    </div>
                  ))}
                </div>
                <div>
                  <h3 className="font-semibold">Imaging Reports</h3>
                  {clinicalRecord.imaging_reports.map((report, index) => (
                    <div key={index} className="mb-4">
                      <p><strong>Type:</strong> {report.type}</p>
                      <p><strong>Date:</strong> {report.date}</p>
                      <p><strong>Findings:</strong> {report.findings}</p>
                      <p><strong>Radiologist Notes:</strong> {report.radiologist_notes}</p>
                    </div>
                  ))}
                </div>
                <div>
                  <h3 className="font-semibold">Vital Signs</h3>
                  <p><strong>Blood Pressure:</strong> {clinicalRecord.vital_signs.blood_pressure}</p>
                  <p><strong>Heart Rate:</strong> {clinicalRecord.vital_signs.heart_rate}</p>
                  <p><strong>Respiratory Rate:</strong> {clinicalRecord.vital_signs.respiratory_rate}</p>
                  <p><strong>Temperature:</strong> {clinicalRecord.vital_signs.temperature}</p>
                  <p><strong>Oxygen Saturation:</strong> {clinicalRecord.vital_signs.oxygen_saturation}</p>
                </div>
                <div>
                  <h3 className="font-semibold">Current Treatment Plans</h3>
                  <ul className="list-disc list-inside">
                    {clinicalRecord.current_treatment_plans.map((plan, index) => (
                      <li key={index}>{plan}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === "affiliations" && (
            <div>
              <h2 className="text-xl font-semibold text-[#2CAA83] mb-4">🏛️ Affiliations</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">Insurance</h3>
                  <p><strong>Provider:</strong> {affiliation.insurance.provider}</p>
                  <p><strong>Policy Number:</strong> {affiliation.insurance.policy_number}</p>
                  <p><strong>Coverage Details:</strong> {affiliation.insurance.coverage_details}</p>
                  <p><strong>Expiration Date:</strong> {affiliation.insurance.expiration_date}</p>
                </div>
                <div>
                  <h3 className="font-semibold">Doctor Follow-Ups</h3>
                  {affiliation.doctor_follow_ups.map((followUp, index) => (
                    <div key={index} className="mb-4">
                      <p><strong>Doctor Name:</strong> {followUp.doctor_name}</p>
                      <p><strong>Specialty:</strong> {followUp.specialty}</p>
                      <p><strong>Next Appointment:</strong> {followUp.next_appointment}</p>
                      <p><strong>Location:</strong> {followUp.location}</p>
                      <p><strong>Notes:</strong> {followUp.notes}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="absolute top-6 left-6">
        <BackButton destinationRoute="/patients" />
      </div>
    </div>
  );
};

export default ProfilePage;