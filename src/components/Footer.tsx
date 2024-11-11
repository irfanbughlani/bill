import React from 'react';
import { Zap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-6">
          <div className="flex items-center">
            <Zap className="h-6 w-6 text-blue-600 mr-2" />
            <span className="text-gray-500">Online Bill Check © {new Date().getFullYear()}</span>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400 text-sm">
          Easily check Online Mepco bill, Lesco bill, Fesco bill, Iesco bill, Pesco bill, gepco bill, KE duplicate bill, Online bill check
        </div>
      </div>
    </footer>
  );
};

export default Footer;
