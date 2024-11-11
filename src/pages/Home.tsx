import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, ArrowRight, Clock, Download, History, CreditCard } from 'lucide-react';
import { companies } from '../data/companies';

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-white rounded-3xl shadow-2xl mb-16 p-8 sm:p-12">
        <div className="relative z-10">
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Check Your Electricity Bill Online
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Quick and easy access to your electricity bill details from all major providers across Pakistan
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <a href="#companies" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-all duration-200">
              View All Providers
            </a>
            <a href="#features" className="inline-flex items-center px-6 py-3 border border-blue-600 text-base font-medium rounded-lg text-blue-600 hover:bg-blue-50 transition-all duration-200">
              Learn More
            </a>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-50"></div>
      </div>

      {/* Features Section */}
      <div id="features" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {[
          { icon: Clock, title: 'Real-Time Access', description: 'Check your bill status instantly, 24/7' },
          { icon: Download, title: 'Easy Downloads', description: 'Download and save your bills digitally' },
          { icon: History, title: 'Bill History', description: 'Access your complete billing history' },
          { icon: CreditCard, title: 'Secure Process', description: 'Safe and secure bill verification' }
        ].map((feature, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <feature.icon className="h-10 w-10 text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Companies Grid */}
      <h2 id="companies" className="text-3xl font-bold text-gray-900 mb-8 text-center">Select Your Electricity Provider</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {companies.map((company) => (
          <Link
            key={company.id}
            to={`/${company.id.toLowerCase()}`}
            className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <Zap className={`h-10 w-10 ${company.colorClass.icon}`} />
                <ArrowRight className="h-6 w-6 text-gray-400 group-hover:text-gray-600 transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{company.name} Bill</h3>
              <p className="text-sm text-gray-600 mb-3">{company.fullName}</p>
              <div className="mt-4 text-sm font-medium text-gray-500">{company.region}</div>
              <button className={`mt-4 w-full px-1 py-2 ${company.colorClass.button} text-white rounded-lg ${company.colorClass.buttonHover} transition-colors`}>
                Check Bill Now
              </button>
            </div>
            <div className={`h-1.5 ${company.colorClass.button}`}></div>
          </Link>
        ))}
      </div>

      {/* Info Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Why Check Your Bill Online?
          </h3>
          <ul className="space-y-4">
            {[
              'Instant access to your bill details',
              'No need to visit physical offices',
              'View current and previous billing history',
              'Download and print bills anytime',
              'Save time and effort',
              'Track your consumption patterns',
              'Get payment deadline reminders',
              'Access from any device'
            ].map((item, index) => (
              <li key={index} className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                <span className="text-gray-600">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Available Services
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: 'Bill Verification', desc: 'Verify your current bill amount' },
              { title: 'Due Date Tracking', desc: 'Never miss a payment deadline' },
              { title: 'Usage Analysis', desc: 'Monitor your power consumption' },
              { title: 'Payment History', desc: 'Access your payment records' },
              { title: 'Digital Downloads', desc: 'Save bills in digital format' },
              { title: 'Multi-device Access', desc: 'Check bills from any device' }
            ].map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-1">{service.title}</h4>
                <p className="text-sm text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
