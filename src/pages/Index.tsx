
import { useState, useEffect } from 'react';
import { Moon, Sun, ChevronUp, Menu, X } from 'lucide-react';
import Preloader from '../components/Preloader';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Certifications from '../components/Certifications';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Apply dark theme on initial load
    document.documentElement.classList.add('dark');
    
    // Simulate loading time
    const loadTimer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'certifications', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(loadTimer);
    };
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' }
  ];

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <div className={`min-h-screen transition-all duration-500 ${isDark ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Enhanced Navigation with Glassmorphism */}
      <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        isDark ? 'bg-gray-900/80 border-gray-700/50' : 'bg-white/80 border-gray-200/50'
      } backdrop-blur-md border-b shadow-lg`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Portfolio
              </span>
              <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-1"></div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group ${
                    activeSection === item.id
                      ? 'text-blue-600 bg-blue-600/10'
                      : isDark ? 'text-gray-300 hover:text-blue-400 hover:bg-gray-800/50' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100/50'
                  }`}
                >
                  {item.label}
                  <div className={`absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full group-hover:left-0 ${
                    activeSection === item.id ? 'w-full left-0' : ''
                  }`}></div>
                </button>
              ))}
            </div>

            {/* Theme Toggle & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className={`p-2.5 rounded-xl transition-all duration-300 hover:scale-110 ${
                  isDark ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                } shadow-lg`}
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`md:hidden p-2.5 rounded-xl transition-all duration-300 hover:scale-110 ${
                  isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
                } shadow-lg`}
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isMenuOpen && (
          <div className={`md:hidden ${isDark ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-md border-t ${isDark ? 'border-gray-700/50' : 'border-gray-200/50'} shadow-xl`}>
            <div className="px-4 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-blue-600 bg-blue-600/10'
                      : isDark ? 'text-gray-300 hover:text-blue-400 hover:bg-gray-800/50' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100/50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="relative">
        <section id="home">
          <Hero isDark={isDark} />
        </section>
        
        <section id="about">
          <About isDark={isDark} />
        </section>
        
        <section id="skills">
          <Skills isDark={isDark} />
        </section>
        
        <section id="projects">
          <Projects isDark={isDark} />
        </section>
        
        <section id="certifications">
          <Certifications isDark={isDark} />
        </section>
        
        <section id="contact">
          <Contact isDark={isDark} />
        </section>
      </main>

      {/* Footer */}
      <Footer isDark={isDark} />

      {/* Enhanced Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110 transform hover:rotate-12 z-30 ${
            isDark ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700' : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
          } text-white group`}
        >
          <ChevronUp size={24} className="transition-transform duration-300 group-hover:-translate-y-1" />
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300 animate-pulse"></div>
        </button>
      )}

      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 z-50">
        <div 
          className="h-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 transition-all duration-300"
          style={{ 
            width: `${((window.scrollY) / (document.documentElement.scrollHeight - window.innerHeight)) * 100}%` 
          }}
        ></div>
      </div>
    </div>
  );
};

export default Index;
