import React, { useState } from "react";

const App = () => {
  const [quote, setQuote] = useState("Click the button to inspire yourself!");

  const quotes = [
    "Believe you can and you're halfway there.",
    "Every moment is a fresh beginning.",
    "Dream big and dare to fail.",
    "Stay hungry, stay foolish.",
    "Turn your wounds into wisdom.",
    "Taimoor and Nauman Devops",
    "Love AWS"
  ];

  const getRandomQuote = () => {
    const random = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[random]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-100 to-purple-200 flex items-center justify-center p-6">
      <div className="bg-white shadow-2xl rounded-2xl p-10 max-w-md w-full text-center transition-transform hover:scale-105">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">💡 Inspire App</h1>
        <p className="text-gray-600 italic mb-6">{quote}</p>
        <button
          onClick={getRandomQuote}
          className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-full shadow-lg transition duration-300"
        >
          Get Inspired ✨
        </button>
      </div>
    </div>
  );
};

export default App;
