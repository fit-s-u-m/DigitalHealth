"use client"
import React from 'react';
import PatientCard from '@/components/patientCard';

const App: React.FC = () => {
  const handleEdit = () => {
    alert('Edit button clicked!');
  };

  

  return (
    <div className="p-8">
      <PatientCard
        imageUrl="https://via.placeholder.com/150"
        name="John Doe"
        idNumber="123456"
        onEdit={handleEdit}
      />
    </div>
  );
};

export default App;