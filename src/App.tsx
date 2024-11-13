import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CompanyPage from './pages/CompanyPage';
import About from './pages/About';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Disclaimer from './pages/Disclaimer';
import robots.txt from './pages/robots.txt';
import { companies } from './data/companies';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-indigo-50">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              {/* Home Page */}
              <Route path="/" element={<Home />} />

              {/* Dynamic Company Pages */}
              {companies.map((company) => (
                <Route
                  key={company.id}
                  path={`/${company.id.toLowerCase()}`}
                  element={<CompanyPage company={company} />}
                />
              ))}

              {/* Static Pages */}
               <Route path="/robots.txt" element={<robots.txt />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/disclaimer" element={<Disclaimer />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

// Ensure there is only one default export
export default App;
