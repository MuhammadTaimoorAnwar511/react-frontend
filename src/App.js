import React, { useState, useEffect } from "react";

const App = () => {
  const [quote, setQuote] = useState("Click the button to inspire yourself!");
  const [darkMode, setDarkMode] = useState(false);

  const quotes = [
    "Believe you can and you're halfway there.",
    "Every moment is a fresh beginning.",
    "Dream big and dare to fail.",
    "Stay hungry, stay foolish.",
    "Turn your wounds into wisdom.",
    "Taimoor and Nauman DevOps",
    "Love AWS",
  ];

  const getRandomQuote = () => {
    const random = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[random]);
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className={`min-h-screen transition-all duration-500 flex items-center justify-center bg-gradient-to-tr ${darkMode ? "from-gray-900 to-gray-800" : "from-blue-200 via-purple-200 to-pink-200"} p-6`}>
      <div className="backdrop-blur-lg bg-white/30 dark:bg-gray-800/40 shadow-2xl rounded-3xl p-10 max-w-md w-full text-center border border-white/20 dark:border-gray-700 transition-all duration-500">
        {/* Header & Toggle */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white tracking-tight">
            💡 Inspire App
          </h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-white/60 dark:bg-gray-700/50 text-gray-800 dark:text-gray-100 px-3 py-1 rounded-full shadow-sm hover:scale-105 transition"
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>

        {/* Quote */}
        <p className="text-lg text-gray-700 dark:text-gray-200 italic mb-6 min-h-[80px] transition-all duration-300">
          “{quote}”
        </p>

        {/* Button */}
        <button
          onClick={getRandomQuote}
          className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105"
        >
          Get Inspired ✨
        </button>
      </div>
    </div>
  );
};

export default App;
