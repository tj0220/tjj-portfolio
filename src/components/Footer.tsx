
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

interface FooterProps {
  isDark: boolean;
}

const Footer = ({ isDark }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github size={28} />,
      href: 'https://github.com/tj0220',
      label: 'GitHub',
      color: 'hover:text-gray-700 dark:hover:text-white'
    },
    {
      icon: <Linkedin size={28} />,
      href: 'https://www.linkedin.com/in/tejaswini-baskar-650627287/',
      label:'LinkedIn',
      color: 'hover:text-blue-600'
    },
    {
      icon: <Mail size={28} />,
      href: 'mailto:tejaswinibaskarworkspace@gmail.com',
      label: 'Email',
      color: 'hover:text-red-600'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`relative py-12 ${isDark ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'} border-t`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Left Section */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              Tejaswini Baskar
            </h3>
            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Data Science Student & Aspiring Full-Stack Developer
            </p>
          </div>

          {/* Center Section - Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                aria-label={link.label}
                className={`p-3 rounded-lg transition-all duration-300 hover:scale-110 transform ${
                  isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
                } ${link.color} group`}
              >
                <div className="transition-transform duration-300 group-hover:rotate-12">
                  {link.icon}
                </div>
              </a>
            ))}
          </div>

          {/* Right Section */}
          <div className="text-center md:text-right">
            <button
              onClick={scrollToTop}
              className={`p-3 rounded-lg transition-all duration-300 hover:scale-110 transform mb-2 ${
                isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
              }`}
              aria-label="Back to top"
            >
              <ArrowUp size={20} />
            </button>
            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Back to top
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-700 dark:border-gray-600">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} flex items-center`}>
              © {currentYear} Made with <Heart size={16} className="text-red-500 mx-1" /> by Tejaswini Baskar
            </p>
            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Designed for excellence • Built with React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
