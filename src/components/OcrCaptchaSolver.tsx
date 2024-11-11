import React, { useState, useEffect } from 'react';
import Tesseract from 'tesseract.js';
import companies from './path/to/companies'; // Adjust the path based on where you store the config file

const OcrCaptchaSolver: React.FC = () => {
  const [consumerNumber, setConsumerNumber] = useState<string>('');
  const [captchaImage, setCaptchaImage] = useState<string | null>(null);
  const [captchaText, setCaptchaText] = useState<string>('');
  const [billData, setBillData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  // Choose the company dynamically (you could also pass it as a prop)
  const selectedCompany = companies.find(company => company.id === 'IESCO');
  const captchaUrl = 'https://www.sngpl.com.pk/captcha-image.jpg';

  // Step 1: Fetch CAPTCHA Image
  const fetchCaptchaImage = () => {
    setLoading(true);
    fetch(captchaUrl, { method: 'GET', cache: 'no-cache' })  // Prevent caching
      .then(response => response.blob())
      .then(blob => {
        setCaptchaImage(URL.createObjectURL(blob));
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching CAPTCHA image:', error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchCaptchaImage(); // Fetch a new CAPTCHA image on component mount
  }, []);

  // Step 2: Solve CAPTCHA using OCR
  const solveCaptcha = () => {
    if (!captchaImage) return;
    setLoading(true);

    Tesseract.recognize(captchaImage, 'eng')
      .then(({ data: { text } }) => {
        const cleanedText = text.trim();  // Clean OCR result if needed
        setCaptchaText(cleanedText);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error solving CAPTCHA:', error);
        setLoading(false);
      });
  };

  // Step 3: Fetch Bill Data using Solved CAPTCHA Text and Consumer Number
  const fetchBill = () => {
    if (!captchaText || !consumerNumber) {
      alert('Please enter a valid consumer number and solve the CAPTCHA');
      return;
    }

    // Construct the URL dynamically with the consumer number
    const billUrl = `${selectedCompany?.endpoint}${consumerNumber}`;

    fetch(billUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ captcha: captchaText }).toString(),
    })
      .then(response => response.json())  // Assuming JSON response
      .then(data => setBillData(data))
      .catch(error => console.error('Error fetching bill data:', error));
  };

  return (
    <div>
      <h2>OCR CAPTCHA Solver - {selectedCompany?.name}</h2>
      <p>{selectedCompany?.description}</p>

      {/* Consumer Number Input */}
      <div>
        <label>Enter Consumer Number:</label>
        <input
          type="text"
          value={consumerNumber}
          onChange={(e) => setConsumerNumber(e.target.value)}
          placeholder="Consumer Number"
          className="border rounded px-3 py-2"
        />
      </div>

      {/* CAPTCHA Image */}
      {captchaImage && (
        <div>
          <img src={captchaImage} alt="CAPTCHA" style={{ marginTop: '20px', maxWidth: '100%' }} />
          <button onClick={fetchCaptchaImage} disabled={loading} className={`${selectedCompany?.colorClass.button} ${selectedCompany?.colorClass.buttonHover} text-white rounded px-4 py-2 mt-2`}>
            {loading ? 'Refreshing...' : 'Refresh CAPTCHA'}
          </button>
        </div>
      )}

      {/* Solve CAPTCHA Button */}
      <button onClick={solveCaptcha} disabled={loading || !captchaImage} className={`${selectedCompany?.colorClass.button} ${selectedCompany?.colorClass.buttonHover} text-white rounded px-4 py-2 mt-2`}>
        {loading ? 'Processing...' : 'Solve CAPTCHA'}
      </button>

      {/* Display OCR Result */}
      {captchaText && (
        <div>
          <h3>CAPTCHA Text:</h3>
          <p>{captchaText}</p>
        </div>
      )}

      {/* Fetch Bill Button */}
      <button onClick={fetchBill} disabled={!captchaText || !consumerNumber || loading} className={`${selectedCompany?.colorClass.button} ${selectedCompany?.colorClass.buttonHover} text-white rounded px-4 py-2 mt-2`}>
        Fetch Bill
      </button>

      {/* Display Bill Data */}
      {billData && (
        <div>
          <h3>Bill Data:</h3>
          <pre>{JSON.stringify(billData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default OcrCaptchaSolver;
