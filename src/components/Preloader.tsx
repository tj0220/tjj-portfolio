import { useState, useEffect } from 'react';

const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          setIsComplete(true);
          clearInterval(timer);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  if (isComplete) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0f172a]">

      {/* Loader Circle */}
      <div className="relative mb-8 flex items-center justify-center">
        <div className="w-24 h-24 border-4 border-blue-600/30 rounded-full animate-spin"></div>
        <div className="absolute w-24 h-24 border-4 border-transparent border-t-blue-600 rounded-full animate-spin"></div>
      </div>

      {/* Loading Text + Progress Bar */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-white mb-3">Loading Portfolio</h2>

        <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden mx-auto">
          <div
            className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <p className="text-gray-400 mt-2 text-sm">{progress}%</p>
      </div>

      {/* Animated Dots */}
      <div className="flex space-x-2 mt-4">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-3 h-3 bg-blue-600 rounded-full animate-bounce"
            style={{ animationDelay: `${i * 0.2}s` }}
          ></div>
        ))}
      </div>

    </div>
  );
};

export default Preloader;
