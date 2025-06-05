
import { useState, useEffect } from 'react';
import { ArrowDown, Github, Linkedin, Download, Mail, Code, Database } from 'lucide-react';

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
    'Problem Solver',
    'Innovation Seeker'
  ];

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const text = texts[currentIndex];

    const timer = setTimeout(() => {
      if (!isDeleting && currentText === text) {
        setTimeout(() => setIsDeleting(true), 1500);
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

  const handleDownloadResume = () => {
    // Create a temporary link to download resume
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Add your resume file to public folder
    link.download = 'Your_Name_Resume.pdf';
    link.click();
  };

  return (
    <div className={`min-h-screen flex items-center justify-center relative overflow-hidden ${
      isDark ? 'bg-gradient-to-br from-gray-900 via-blue-900/50 to-purple-900/50' : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'
    }`}>
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        {/* Floating geometric shapes */}
        <div className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 animate-float ${
          isDark ? 'bg-blue-500' : 'bg-blue-300'
        }`} style={{ animationDelay: '0s' }}></div>
        <div className={`absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full opacity-10 animate-float ${
          isDark ? 'bg-purple-500' : 'bg-purple-300'
        }`} style={{ animationDelay: '2s' }}></div>
        <div className={`absolute top-1/2 right-1/3 w-64 h-64 rounded-full opacity-5 animate-float ${
          isDark ? 'bg-pink-500' : 'bg-pink-300'
        }`} style={{ animationDelay: '4s' }}></div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-blue-600/5"></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <Code className={`absolute top-20 left-20 w-8 h-8 ${isDark ? 'text-blue-400' : 'text-blue-600'} opacity-20 animate-float`} style={{ animationDelay: '1s' }} />
        <Database className={`absolute bottom-32 left-32 w-6 h-6 ${isDark ? 'text-purple-400' : 'text-purple-600'} opacity-20 animate-float`} style={{ animationDelay: '3s' }} />
        <Github className={`absolute top-32 right-20 w-7 h-7 ${isDark ? 'text-gray-400' : 'text-gray-600'} opacity-20 animate-float`} style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Profile Image */}
          <div className="mb-8 relative">
            <div className="w-32 h-32 mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full animate-spin-slow opacity-75"></div>
              <img 
                src='/pass photo.jpg'
                alt="Profile"
                className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-xl"
              />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className={isDark ? 'text-white' : 'text-gray-900'}>Hi, I'm </span>
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
              Tejaswini Baskar
            </span>
          </h1>
          
          <div className="text-2xl md:text-4xl mb-8 h-20 flex items-center justify-center">
            <span className={`${isDark ? 'text-gray-300' : 'text-gray-700'} font-medium`}>
              {currentText}
              <span className="animate-pulse text-blue-600">|</span>
            </span>
          </div>

          <p className={`text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Passionate about transforming data into actionable insights and building innovative solutions. 
            Currently leading creative initiatives while exploring the fascinating intersection of 
            <span className="text-blue-600 font-semibold"> machine learning</span> and 
            <span className="text-purple-600 font-semibold"> full-stack development</span>.
          </p>

          {/* Enhanced Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            
           <button
              onClick={() => {
                const element = document.getElementById("projects");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-lg hover:scale-105 transition-transform"
            >
              <span className="relative z-10 flex items-center">
                <Code size={20} className="mr-2" />
                View My Work
              </span>
            </button>

            
            
            <a
  href="/TEJASWINI BASKAR CV...pdf"
  download
  className={`group px-8 py-4 border-2 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg relative overflow-hidden ${
    isDark 
      ? 'border-gray-300 text-gray-300 hover:bg-gray-300 hover:text-gray-900' 
      : 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white'
  }`}
>
  <span className="relative z-10 flex items-center justify-center">
    <Download size={20} className="mr-2" />
    Download Resume
  </span>
</a>

          </div>

          {/* Enhanced Social Links */}
<div className="flex justify-center space-x-6 mb-12">
  {[
    {
      icon: <Github size={28} />,
      href: 'https://github.com/tj0220',
      color: 'hover:text-gray-700 dark:hover:text-white'
    },
    {
      icon: <Linkedin size={28} />,
      href: 'https://www.linkedin.com/in/tejaswini-baskar-650627287/',
      color: 'hover:text-blue-600'
    },
    {
      icon: <Mail size={28} />,
      href: 'mailto:tejaswinibaskarworkspace@gmail.com',
      color: 'hover:text-red-600'
    }
  ].map((social, index) => (
    <a
      key={index}
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group p-4 rounded-xl transition-all duration-300 hover:scale-110 transform shadow-lg ${
        isDark
          ? 'bg-gray-800/50 hover:bg-gray-700/70'
          : 'bg-white/50 hover:bg-white/80'
      } backdrop-blur-sm ${social.color}`}
    >
      <div className="transition-transform duration-300 group-hover:rotate-12">
        {social.icon}
      </div>
    </a>
  ))}
</div>


          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-3xl mx-auto">
            {[
              { label: 'Projects', value: '10+' },
              { label: 'Technologies', value: '20+' },
              { label: 'Certifications', value: '6+'},
              { label: 'Experience', value: '2+ Years' }
            ].map((stat, index) => (
              <div key={index} className={`p-4 rounded-xl backdrop-blur-sm ${
                isDark ? 'bg-gray-800/30' : 'bg-white/30'
              } hover:scale-105 transition-transform duration-300`}>
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;
