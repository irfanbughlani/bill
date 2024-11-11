import React, { useState, useEffect } from 'react';
import Tesseract from 'tesseract.js';

const OcrCaptchaSolver: React.FC = () => {
  const [captchaImage, setCaptchaImage] = useState<string | null>(null);
  const [captchaText, setCaptchaText] = useState<string>('');
  const [billData, setBillData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const captchaUrl = 'https://www.sngpl.com.pk/captcha-image.jpg';
  const billEndpoint = 'https://www.sngpl.com.pk/viewbill?proc=viewbill&contype=NewCon&mdids=85&consumer=';

  // Step 1: Fetch CAPTCHA Image on Component Load
  const fetchCaptchaImage = () => {
    setLoading(true);
    fetch(captchaUrl, { method: 'GET', cache: 'no-cache' })  // Ensure it doesn't cache the image
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
    fetchCaptchaImage(); // Load a new CAPTCHA on component mount
  }, []);

  // Step 2: Solve CAPTCHA Image with OCR
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

  // Step 3: Fetch Bill Data using Solved CAPTCHA Text
  const fetchBill = () => {
    if (!captchaText) return;

    const consumerId = '14914400008';  // Example consumer ID
    const params = new URLSearchParams({
      consumer: consumerId,
      captcha: captchaText,
    });

    fetch(`${billEndpoint}${consumerId}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString(),
    })
      .then(response => response.json())  // Assuming JSON response
      .then(data => setBillData(data))
      .catch(error => console.error('Error fetching bill data:', error));
  };

  return (
    <div>
      <h2>OCR CAPTCHA Solver</h2>

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
      <button onClick={fetchBill} disabled={!captchaText || loading}>
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
