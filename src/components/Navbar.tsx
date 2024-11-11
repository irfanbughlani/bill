import React from 'react';
import { Link } from 'react-router-dom';
import { Zap } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="bg-blue-600 p-2 rounded-lg group-hover:bg-blue-700 transition-colors">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Bill Check Online</span>
            </Link>
          </div>
          <div className="hidden sm:flex sm:items-center sm:space-x-4">
            <Link
              to="/"
              className="px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors"
            >
              Home
            </Link>
            <a
              href="#companies"
              className="px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors"
            >
              Lesco bill
            </a>
            <a
              href="#companies"
              className="px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors"
            >
              Mepco Bill
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
