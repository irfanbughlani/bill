import React from "react";
import { Link } from "react-router-dom";
import { companies as companiesFromGlobal } from "../data/companies"; // Import companies from companies.ts

// Helper function to group companies into chunks
const chunkArray = (array, size) => {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

const CompanyLinks = () => {
  // Group companies into chunks of 5
  const companyRows = chunkArray(companiesFromGlobal, 5);

  return (
    <div className="mt-8 p-6 bg-gray-50 rounded-lg shadow-md flex flex-col items-center">
      <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
        Electricity Bill Online Check
      </h2>
      <p className="text-gray-600 text-center mb-6">
        Easily check your electricity bills online for various companies across the country. 
        Choose your electricity bill provider from the options below to access the online duplicate bill. 
        With just a few clicks, manage and check your electricity bills securely and efficiently.
      </p>
      <div className="space-y-4 w-full">
        {companyRows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="flex flex-wrap gap-4 justify-center items-center"
          >
            {row.map((company) => (
              <Link
                key={company.id}
                to={`/${company.id.toLowerCase()}`} // Link dynamically to the company page
                className={`px-4 py-2 rounded-md shadow-sm text-white font-medium hover:opacity-90 transition duration-200 bg-gradient-to-r ${company.colorClass.from} ${company.colorClass.to}`}
              >
                {company.name}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyLinks;
