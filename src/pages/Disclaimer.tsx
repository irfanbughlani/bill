import React from 'react';

const Disclaimer: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-3xl mx-4">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">Disclaimer</h1>
        <p className="text-gray-700 leading-relaxed text-lg mb-4">
          This platform provides access to bill information for various utilities as a convenience
          to users. We do not guarantee the accuracy or completeness of the data provided.
        </p>
        <p className="text-gray-700 leading-relaxed text-lg mb-4">
          All data displayed on this site is for informational purposes only. For official
          details and updates, please refer to the respective utility provider.
        </p>
        <p className="text-gray-700 leading-relaxed text-lg">
          By using this platform, you acknowledge and accept the terms of this disclaimer.
        </p>
      </div>
    </div>
  );
};

export default Disclaimer;
