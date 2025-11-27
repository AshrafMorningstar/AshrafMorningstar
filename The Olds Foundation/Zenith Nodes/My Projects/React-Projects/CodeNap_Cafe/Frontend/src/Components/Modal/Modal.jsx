import React from 'react';

const Modal = ({ isOpen, onClose, title = "Success!", message = "Your action was successful.", icon }) => {
  if (!isOpen) return null;

  return (
    <div
      className="inset-0 z-50 flex items-center justify-center fixed bg-transparent bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md p-6 bg-white rounded-lg shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-gray-500"
          onClick={onClose}
          aria-label="Close modal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Modal Content */}
        <div className="text-center">
          {icon && (
            <img
              src={icon}
              alt="Popup Icon"
              className="mx-auto mb-4 w-16 h-16"
            />
          )}

          <h1 className="text-2xl font-bold text-green-600">{title}</h1>
          <p className="text-gray-700 font-semibold mt-2">{message}</p>
          <button
            className="mt-4 px-6 py-2 bg-green-600 hover:bg-green-700 transition text-white rounded-lg"
            onClick={onClose}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar