// components/FAQSection.tsx
import React, { useState } from 'react';

function FAQSection({ company }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'How do I check my electricity bill online?',
      answer: 'To check your electricity bill online, select your provider (such as LESCO, K-Electric, WAPDA, etc.), enter your reference or consumer ID, and click "Check online Bill." Your bill will appear on the screen for viewing and downloading.',
    },
    {
      question: 'Can I view my past electricity bills on bill.com.pk?',
      answer: 'Yes, you can view past bills on bill.com.pk for each provider. Simply enter your reference number to access your billing history, including previous months and payment records.',
    },
    {
      question: 'How do I download or print my bill?',
      answer: 'After accessing your bill, you will see options to download or print it. Just click the "Download" or "Print" button to save a copy or print your bill directly.',
    },
    {
      question: 'Is my information secure on bill.com.pk?',
      answer: 'Yes, bill.com.pk is committed to protecting your information. We use secure protocols to ensure that your data is safe and accessible only to you.',
    },
    {
      question: 'What providers are supported?',
      answer: 'We support major electricity providers across Pakistan, including online bill check, LESCO bill, FESCO bill, MEPCO bill, HESCO bill, PESCO bill, GEPCO bill, SEPCO bill, QESCO bill, IESCO bill, TESCO bill among others. Select your provider from the list to view your bill details.',
    },
  ];

  return (
    <section className="bg-white rounded-lg shadow-md p-6 my-6">
      {/* Apply provider color to heading or fallback to default */}
      <h2 className={`text-2xl font-semibold ${company?.colorClass?.icon || 'text-blue-600'} mb-4`}>
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 pb-4">
            <button
              // Apply provider color to question or fallback to blue
              className={`flex justify-between w-full text-left font-medium ${company?.colorClass?.icon || 'text-blue-600'} focus:outline-none`}
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className={activeIndex === index ? (company?.colorClass?.icon || 'text-blue-600') : ''}>
                {activeIndex === index ? '-' : '+'}
              </span>
            </button>
            {activeIndex === index && (
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQSection;
