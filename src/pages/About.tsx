import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-3xl mx-4">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">About Us</h1>
        <p className="text-gray-700 leading-relaxed text-lg mb-4">
          Welcome to our platform! We aim to provide seamless access to essential information
          regarding various utilities in Pakistan, enabling users to check and monitor their bills
          effortlessly. Our platform serves as a bridge between users and utility providers.
        </p>
        <p className="text-gray-700 leading-relaxed text-lg mb-4">
          Our mission is to empower users with easy-to-access resources and improve transparency
          for various services. We hope you find our platform helpful and easy to use.
        </p>
      </div>
    </div>
  );
};

export default About;
