import React from 'react';

interface ProviderContentProps {
  company: {
    name: string;
    colorClass: {
      icon: string;
    };
  };
}

const ProviderContent: React.FC<ProviderContentProps> = ({ company }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className={`text-3xl font-bold ${company.colorClass.icon} mb-4`}>
        {company.name} Online Bill: Quick and Easy Access
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        Welcome to your one-stop destination for checking your {company.name} bill online. Here at <a href="https://bill.com.pk" className="text-blue-600 underline">bill.com.pk</a>, we make it
        simple and convenient for you to access, view, and download your latest bill without any hassle.
      </p>
      
      {/* How to Check Bill Section */}
      <section className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <h2 className={`text-2xl font-semibold ${company.colorClass.icon} mb-4`}>How to Check {company.name} Bill Online</h2>
        <p className="text-gray-700 mb-4">
          Your {company.name} Bill Online Check is quick and easy. Simply enter your account details on our website, and you’ll have immediate
          access to your {company.name} latest bill. You can view and download your Duplicate bill online with just a few clicks, helping you keep track of payments and avoid late fees.
        </p>
        <p className="text-gray-700">
          With our user-friendly interface, finding your {company.name} bill has never been easy. Whether you're at home or on the go, you
          can access your bill online anytime, making it easy to manage your payments.
        </p>
      </section>
      
      {/* Why Choose Online Bill Checking */}
      <section className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <h2 className={`text-2xl font-semibold ${company.colorClass.icon} mb-4`}>Why Choose Online Bill Checking for {company.name}</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>24/7 access to your Online <a href="https://bill.com.pk" className="text-blue-600 underline">{company.name} bill</a> from anywhere.</li>
          <li>Convenient online bill download and print options for record-keeping.</li>
          <li>No need to visit physical offices or wait in long queues.</li>
          <li>Organize and keep track of your billing history electronically.</li>
          <li>Get updates and avoid missing due dates for payments.</li>
        </ul>
      </section>
      
      {/* Understanding Your Bill */}
      <section className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <h2 className={`text-2xl font-semibold ${company.colorClass.icon} mb-4`}>Understanding Your {company.name} Bill</h2>
        <p className="text-gray-700 mb-4">
          Your <a href="https://bill.com.pk" className="text-blue-600 underline">{company.name} duplicate bill</a> provides a breakdown of your electricity consumption, charges, and due date for payments. Here’s what each section means:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li><strong>Billing Period:</strong> The duration of time covered by this bill.</li>
          <li><strong>Total Units Consumed:</strong> The amount of electricity you used during the billing period, measured in kilowatt-hours (kWh).</li>
          <li><strong>Previous and Current Meter Reading:</strong> The readings from your electricity meter at the beginning and end of the billing period.</li>
          <li><strong>Per Unit Rate:</strong> The rate charged per kilowatt-hour, based on the usage slab you fall into.</li>
          <li><strong>Total Amount Due:</strong> The total amount payable, including any applicable taxes or fees.</li>
        </ul>
        <p className="text-gray-700 mt-4">
          Understanding these details can help you monitor your electricity usage and take steps to reduce consumption, potentially lowering future bills.
        </p>
      </section>
      
      {/* Payment Options */}
      <section className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <h2 className={`text-2xl font-semibold ${company.colorClass.icon} mb-4`}>Payment Options for {company.name}</h2>
        <p className="text-gray-700 mb-4">
          Paying your {company.name} bill is flexible and convenient, with multiple payment methods available:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li><strong>Online Banking:</strong> Use your bank’s online portal to pay directly from your account.</li>
          <li><strong>Mobile Wallets:</strong> Pay through mobile wallet services like EasyPaisa or JazzCash.</li>
          <li><strong>ATM Payment:</strong> Many ATMs across Pakistan support utility bill payments.</li>
          <li><strong>Customer Service Centers:</strong> Visit a {company.name} service center to pay in person.</li>
          <li><strong>Partner Banks:</strong> {company.name} partners with several banks, allowing payment directly through their branches.</li>
        </ul>
      </section>

      {/* Saving Tips */}
      <section className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <h2 className={`text-2xl font-semibold ${company.colorClass.icon} mb-4`}>Saving on Your {company.name} Bill</h2>
        <p className="text-gray-700 mb-4">
          Managing your energy usage can help you save on your <a href="https://bill.com.pk" className="text-blue-600 underline">{company.name} bill</a> each month. Here are some tips:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Switch off lights and appliances when not in use.</li>
          <li>Use energy-efficient LED bulbs instead of traditional lighting.</li>
          <li>Keep your AC temperature moderate and switch it off when you leave the room.</li>
          <li>Invest in energy-efficient appliances to reduce consumption.</li>
          <li>Regularly maintain appliances like refrigerators and air conditioners to improve efficiency.</li>
        </ul>
        <p className="text-gray-700 mt-4">
          By adopting these habits, you can lower your monthly electricity usage, which can lead to savings on your {company.name} bill.
        </p>
      </section>
    </div>
  );
};

export default ProviderContent;
