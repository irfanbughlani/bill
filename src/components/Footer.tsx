import React from 'react';
import { Link } from 'react-router-dom';
import { Zap } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="flex justify-center space-x-6">
          <div className="flex items-center">
            <Zap className="h-6 w-6 text-blue-600 mr-2" />
            <span className="text-gray-500">Online Bill Check © {new Date().getFullYear()}</span>
          </div>
        </div>
        
        {/* Description Text */}
        <div className="mt-4 text-center text-gray-400 text-sm">
          Easily check Online Mepco bill, Lesco bill, Fesco bill, Iesco bill, Pesco bill, GEPCO bill, KE duplicate bill, Online bill check
        </div>
        
        {/* Footer Links with Button Shapes */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link to="/about" className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition">
            About Us
          </Link>
          <Link to="/contact" className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition">
            Contact Us
          </Link>
          <Link to="/privacy-policy" className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition">
            Privacy Policy
          </Link>
          <Link to="/disclaimer" className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition">
            Disclaimer
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
