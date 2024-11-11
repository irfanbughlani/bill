import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-3xl mx-4">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">Contact Us</h1>
        <p className="text-gray-700 leading-relaxed text-lg mb-4">
          Have any questions or feedback? We’d love to hear from you!
        </p>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700">Name</label>
            <input type="text" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input type="email" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
          </div>
          <div>
            <label className="block text-gray-700">Message</label>
            <textarea className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
