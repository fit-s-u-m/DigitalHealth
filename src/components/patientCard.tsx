import React from 'react';

// Define the props interface for type safety
interface CardProps {
  imageUrl: string;
  name: string;
  idNumber: string;
  onEdit: () => void; // Callback for the edit button
}

const PatientCard: React.FC<CardProps> = ({ imageUrl, name, idNumber, onEdit }) => {
  return (
    <div className="relative bg-white rounded-lg shadow-md overflow-hidden w-64">
      {/* Edit Button */}
      <button
        onClick={onEdit}
        className="absolute top-2 right-2 p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-700"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
        </svg>
      </button>

      {/* Central Picture */}
      <div className="flex justify-center mt-8">
        <img
          src={imageUrl}
          alt={name}
          className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
        />
      </div>

      {/* Name */}
      <div className="text-center mt-4">
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
      </div>

      {/* ID Number */}
      <div className="text-center mt-2 mb-6">
        <p className="text-sm text-gray-600">ID: {idNumber}</p>
      </div>
    </div>
  );
};

export default PatientCard;