import React, { useState } from 'react';
import { Zap, Search, AlertCircle, CheckCircle, HelpCircle } from 'lucide-react';
import type { Company } from '../data/companies';

interface CompanyPageProps {
  company: Company;
}

const CompanyPage: React.FC<CompanyPageProps> = ({ company }) => {
  const [referenceNumber, setReferenceNumber] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!referenceNumber.trim()) {
      setError('Please enter a reference number');
      return;
    }
    window.open(`${company.endpoint}${referenceNumber}`, '_blank');
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-12">
        <div className={`bg-gradient-to-r ${company.colorClass.from} ${company.colorClass.to} px-8 py-12 text-white`}>
          <div className="flex justify-center mb-6">
            <Zap className="h-16 w-16" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-center mb-4">
            {company.name} BILL Online Check
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto opacity-90">
            {company.description}
          </p>
        </div>

        {/* Bill Check Form */}
        <div className="p-8">
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
            <div className="bg-white rounded-xl border-2 border-gray-100 p-6">
              <label
                htmlFor="reference"
                className="block text-lg font-medium text-gray-700 mb-3"
              >
                Reference Number
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="reference"
                  value={referenceNumber}
                  onChange={(e) => {
                    setReferenceNumber(e.target.value);
                    setError('');
                  }}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-lg"
                  placeholder="Enter your reference number"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
              {error && (
                <div className="mt-2 flex items-center text-red-600">
                  <AlertCircle className="h-5 w-5 mr-2" />
                  <p className="text-sm">{error}</p>
                </div>
              )}
            </div>

            <button
              type="submit"
              className={`w-full py-4 px-6 ${company.colorClass.button} ${company.colorClass.buttonHover} text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 text-lg font-medium flex items-center justify-center space-x-2`}
            >
              <CheckCircle className="h-6 w-6" />
              <span>Check {company.name} Bill</span>
            </button>
          </form>
        </div>
      </div>

      {/* Information Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <HelpCircle className={`h-6 w-6 mr-2 ${company.colorClass.icon}`} />
            How to Find Your Reference Number
          </h3>
          <ul className="space-y-4">
            {[
              "Look at your previous electricity bill",
              "Find the reference number printed at the top",
              "It's a unique identifier for your connection",
              "Enter the number exactly as shown",
              "Double-check for accuracy",
              "Include all digits and special characters"
            ].map((item, index) => (
              <li key={index} className="flex items-start space-x-3">
                <div className={`flex-shrink-0 w-6 h-6 rounded-full bg-${company.colorClass.icon.split('-')[1]}-100 flex items-center justify-center mt-1`}>
                  <span className={company.colorClass.icon + " text-sm font-medium"}>{index + 1}</span>
                </div>
                <span className="text-gray-600">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            About {company.fullName}
          </h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            {company.fullName} ({company.name}) is the primary electricity provider for the {company.region}. 
            Our online bill checking service allows you to easily access your electricity bill details, 
            verify due dates, and check payment status from the comfort of your home.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {[
              "Bill Verification",
              "Payment Status",
              "Due Date Alerts",
              "Usage History",
              "Digital Records",
              "Customer Support"
            ].map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 text-center">
                <span className="text-sm font-medium text-gray-900">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">
          Frequently Asked Questions
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              q: "How often is my bill updated?",
              a: "Bills are typically updated monthly, reflecting your latest electricity consumption."
            },
            {
              q: "What if I lose my reference number?",
              a: "You can find your reference number on any previous bill or contact customer support."
            },
            {
              q: "Can I pay my bill online?",
              a: "Yes, after checking your bill, you can proceed to make an online payment."
            },
            {
              q: "Is my information secure?",
              a: "We use industry-standard security measures to protect your data."
            }
          ].map((faq, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-2">{faq.q}</h4>
              <p className="text-gray-600">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyPage;