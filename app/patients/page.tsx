"use client";

import { useEffect, useState } from "react";
import PatientCard from "@/components/patientCard";
import PatientHeader from "@/components/patientheader";
import axios from "axios";

function Patients() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    async function fetchPatients() {
      try {
        const response = await axios.get("http://localhost:8000/patients");
        setPatients(response.data);
      } catch (error) {
        console.error("Error fetching patients:", error);
        setPatients([]); // Ensure state is never undefined
      }
    }

    fetchPatients();
  }, []);

  return (
    <>
      <PatientHeader />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 px-4 py-6">
        {patients.length > 0
          ? patients.map((patient) => (
              <PatientCard
                key={patient.id}
                name={patient.name}
                id={patient.id}
                profilePicture={patient.profilePicture || "https://via.placeholder.com/150"}
              />
            ))
          : // Show 4 placeholder cards when no data is available
            Array.from({ length: 4 }).map((_, index) => (
              <PatientCard
                key={index}
                name="Unknown Patient"
                id={`00000${index + 1}`}
                profilePicture="https://via.placeholder.com/150"
              />
            ))}
      </div>
    </>
  );
}

export default Patients;
