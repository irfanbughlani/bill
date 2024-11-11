import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-3xl mx-4">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">Privacy Policy</h1>
        <p className="text-gray-700 leading-relaxed text-lg mb-4">
          We value your privacy. This Privacy Policy outlines how we collect, use, and protect
          your information on our platform.
        </p>
        <p className="text-gray-700 leading-relaxed text-lg mb-4">
          Information collected on this platform is handled with the utmost care and security.
          We are committed to protecting your data and ensuring transparency in our practices.
        </p>
        <p className="text-gray-700 leading-relaxed text-lg">
          By using our platform, you agree to the terms outlined in this Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
