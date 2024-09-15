// src/components/Translator.js
import React, { useState } from 'react';
import '../styles/Translator.css'; // Import necessary styles

const languages = [
  { code: 'hi', name: 'Hindi' },
  { code: 'fr', name: 'French' },
  { code: 'es', name: 'Spanish' },
  { code: 'zh', name: 'Chinese' }
];

const Translator = () => {
  const [text, setText] = useState('');
  const [language, setLanguage] = useState('hi');
  const [translatedText, setTranslatedText] = useState('');

  const handleTranslate = () => {
    // Mock translation logic
    const mockTranslations = {
      hi: 'नमस्ते',
      fr: 'Bonjour',
      es: 'Hola',
      zh: '你好'
    };

    // Simulate translation
    setTranslatedText(mockTranslations[language] || 'Translation not available');
  };

  return (
    <div className="translator-container">
      <h2>Translator</h2>
      <textarea
        className="input-box"
        placeholder="Enter text to translate..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      
      <div className="options">
        <label>Select Language:</label>
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          {languages.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.name}
            </option>
          ))}
        </select>
      </div>

      <button className="translate-button" onClick={handleTranslate}>
        Translate
      </button>

      {translatedText && (
        <div className="result">
          <h3>Translated Text:</h3>
          <p>{translatedText}</p>
        </div>
      )}
    </div>
  );
};

export default Translator;
