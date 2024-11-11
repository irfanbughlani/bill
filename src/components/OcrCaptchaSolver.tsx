import React, { useState, useEffect } from 'react';
import Tesseract from 'tesseract.js';

const OcrCaptchaSolver: React.FC = () => {
  const [consumerNumber, setConsumerNumber] = useState<string>('');
  const [captchaImage, setCaptchaImage] = useState<string | null>(null);
  const [captchaText, setCaptchaText] = useState<string>('');
  const [billData, setBillData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const captchaUrl = 'https://www.sngpl.com.pk/captcha-image.jpg';
  const billEndpoint = 'https://www.sngpl.com.pk/viewbill?proc=viewbill&contype=NewCon&mdids=85&consumer=';

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

    const params = new URLSearchParams({
      proc: 'viewbill',
      contype: 'NewCon',
      mdids: '85',
      consumer: consumerNumber,
      captcha: captchaText,
    });

    fetch(`${billEndpoint}?${params.toString()}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    })
      .then(response => response.json())  // Assuming JSON response
      .then(data => setBillData(data))
      .catch(error => console.error('Error fetching bill data:', error));
  };

  return (
    <div>
      <h2>OCR CAPTCHA Solver</h2>

      {/* Consumer Number Input */}
      <div>
        <label>Enter Consumer Number:</label>
        <input
          type="text"
          value={consumerNumber}
          onChange={(e) => setConsumerNumber(e.target.value)}
          placeholder="Consumer Number"
        />
      </div>

      {/* CAPTCHA Image */}
      {captchaImage && (
        <div>
          <img src={captchaImage} alt="CAPTCHA" style={{ marginTop: '20px', maxWidth: '100%' }} />
          <button onClick={fetchCaptchaImage} disabled={loading}>
            {loading ? 'Refreshing...' : 'Refresh CAPTCHA'}
          </button>
        </div>
      )}

      {/* Solve CAPTCHA Button */}
      <button onClick={solveCaptcha} disabled={loading || !captchaImage}>
        {loading ? 'Processing...' : 'Solve CAPTCHA'
      </button>

      {/* Display OCR Result */}
      {captchaText && (
        <div>
          <h3>CAPTCHA Text:</h3>
          <p>{captchaText}</p>
        </div>
      )}

      {/* Fetch Bill Button */}
      <button onClick={fetchBill} disabled={!captchaText || !consumerNumber || loading}>
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
