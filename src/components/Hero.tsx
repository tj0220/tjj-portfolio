
import { useState, useEffect } from 'react';
import { ArrowDown, Github, Linkedin } from 'lucide-react';

interface HeroProps {
  isDark: boolean;
}

const Hero = ({ isDark }: HeroProps) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = [
    'Data Science Enthusiast',
    'Full-Stack Developer',
    'Machine Learning Explorer',
    'Problem Solver'
  ];

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const text = texts[currentIndex];

    const timer = setTimeout(() => {
      if (!isDeleting && currentText === text) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % texts.length);
      } else {
        setCurrentText(
          isDeleting
            ? text.substring(0, currentText.length - 1)
            : text.substring(0, currentText.length + 1)
        );
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [currentText, currentIndex, isDeleting, texts]);

  return (
    <div className={`min-h-screen flex items-center justify-center relative overflow-hidden ${
      isDark ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900' : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'
    }`}>
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 animate-pulse ${
          isDark ? 'bg-blue-500' : 'bg-blue-200'
        }`}></div>
        <div className={`absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-20 animate-pulse delay-1000 ${
          isDark ? 'bg-purple-500' : 'bg-purple-200'
        }`}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className={isDark ? 'text-white' : 'text-gray-900'}>Hi, I'm </span>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Your Name
            </span>
          </h1>
          
          <div className="text-2xl md:text-4xl mb-8 h-16 flex items-center justify-center">
            <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>
              {currentText}
              <span className="animate-pulse">|</span>
            </span>
          </div>

          <p className={`text-xl md:text-2xl mb-12 max-w-3xl mx-auto ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Passionate about transforming data into insights and building innovative solutions. 
            Currently leading creative initiatives and exploring the intersection of technology and problem-solving.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-lg">
              View My Work
            </button>
            <button className={`px-8 py-4 border-2 rounded-lg font-semibold hover:scale-105 transition-all duration-300 ${
              isDark 
                ? 'border-gray-300 text-gray-300 hover:bg-gray-300 hover:text-gray-900' 
                : 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white'
            }`}>
              Download Resume
            </button>
          </div>

          <div className="flex justify-center space-x-6 mb-12">
            <a href="#" className={`p-3 rounded-full transition-colors hover:scale-110 transform duration-300 ${
              isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
            }`}>
              <Github size={24} />
            </a>
            <a href="#" className={`p-3 rounded-full transition-colors hover:scale-110 transform duration-300 ${
              isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
            }`}>
              <Linkedin size={24} />
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown size={32} className={isDark ? 'text-gray-400' : 'text-gray-600'} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
