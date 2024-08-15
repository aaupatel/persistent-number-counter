import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function App() {
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem('count');
    return savedCount !== null ? JSON.parse(savedCount) : 0;
  });

  const [history, setHistory] = useState(() => {
    const savedHistory = localStorage.getItem('history');
    return savedHistory !== null ? JSON.parse(savedHistory) : [0];
  });

  const [currentIndex, setCurrentIndex] = useState(() => {
    const savedCurrentIndex = localStorage.getItem('currentIndex');
    return savedCurrentIndex !== null ? JSON.parse(savedCurrentIndex) : 0;
  });

  const [isIncreasing, setIsIncreasing] = useState(true);

  useEffect(() => {
    localStorage.setItem('count', JSON.stringify(count));
    localStorage.setItem('history', JSON.stringify(history));
    localStorage.setItem('currentIndex', JSON.stringify(currentIndex));
  }, [count, history, currentIndex]);

  const updateCount = (newCount) => {
    if (newCount >= 0 && newCount <= 150) {
      const updatedHistory = [...history.slice(0, currentIndex + 1), newCount];
      setHistory(updatedHistory);
      setCurrentIndex(updatedHistory.length - 1);
      setCount(newCount);
      setIsIncreasing(newCount > count);
    }
  };

  const handleAdd = () => {
    updateCount(count + 1);
  };

  const handleSubtract = () => {
    updateCount(count - 1);
  };

  const handleUndo = () => {
    if (currentIndex > 0) {
      const previousIndex = currentIndex - 1;
      setCount(history[previousIndex]);
      setCurrentIndex(previousIndex);
      setIsIncreasing(history[previousIndex] > count);
    }
  };

  const handleRedo = () => {
    if (currentIndex < history.length - 1) {
      const nextIndex = currentIndex + 1;
      setCount(history[nextIndex]);
      setCurrentIndex(nextIndex);
      setIsIncreasing(history[nextIndex] > count);
    }
  };

  const progress = (count / 150) * 100;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">Number Counter</h1>
      <p className="text-lg mb-4 text-gray-700">Current Number: {count}</p>
      <div className="relative w-full max-w-md bg-gray-300 rounded-full h-8 mb-6 shadow overflow-hidden">
        <motion.div
          className="h-8 bg-blue-500"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        ></motion.div>
      </div>
      <div className="flex space-x-4">
        <button
          onClick={handleSubtract}
          disabled={count <= 0}
          className="px-4 py-2 bg-red-500 text-white font-semibold rounded shadow hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Subtract 1
        </button>
        <button
          onClick={handleAdd}
          disabled={count >= 150}
          className="px-4 py-2 bg-green-500 text-white font-semibold rounded shadow hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Add 1
        </button>
      </div>
      <div className="flex space-x-4 mt-6">
        <button
          onClick={handleUndo}
          disabled={currentIndex === 0}
          className="px-4 py-2 bg-gray-500 text-white font-semibold rounded shadow hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Undo
        </button>
        <button
          onClick={handleRedo}
          disabled={currentIndex === history.length - 1}
          className="px-4 py-2 bg-gray-500 text-white font-semibold rounded shadow hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Redo
        </button>
      </div>
    </div>
  );
}

export default App;
