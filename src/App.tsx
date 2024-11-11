import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CompanyPage from './pages/CompanyPage';
import { companies } from './data/companies';
import OcrCaptchaSolver from './components/OcrCaptchaSolver';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>CAPTCHA Solver Demo</h1>
      <OcrCaptchaSolver />
    </div>
  );
}

export default App;

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-indigo-50">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            {companies.map((company) => (
              <Route
                key={company.id}
                path={`/${company.id.toLowerCase()}`}
                element={<CompanyPage company={company} />}
              />
            ))}
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
