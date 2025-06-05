import { User, Award, Users, ExternalLink } from 'lucide-react';

interface AboutProps {
  isDark: boolean;
}

const About = ({ isDark }: AboutProps) => {
  return (
    <div className={`py-20 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Passionate about data, technology, and making a difference
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-6">
            <div className={`p-6 rounded-xl ${isDark ? 'bg-gray-900' : 'bg-white'} shadow-lg hover:shadow-xl transition-shadow duration-300`}>
              <div className="flex items-center mb-4">
                <User className="text-blue-600 mr-3" size={24} />
                <h3 className="text-xl font-semibold">Background</h3>
              </div>
              <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                I'm a dedicated Data Science student with a passion for uncovering insights from complex datasets 
                and building innovative solutions. My journey combines analytical thinking with creative problem-solving, 
                always striving to bridge the gap between data and actionable business value.
              </p>
            </div>

            <div className={`p-6 rounded-xl ${isDark ? 'bg-gray-900' : 'bg-white'} shadow-lg hover:shadow-xl transition-shadow duration-300`}>
              <div className="flex items-center mb-4">
                <Award className="text-purple-600 mr-3" size={24} />
                <h3 className="text-xl font-semibold">Current Role</h3>
              </div>
              <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                <strong>Creatives Head</strong> at Data Science Club - Leading creative initiatives and organizing 
                workshops to make data science accessible and engaging for fellow students.
              </p>
            </div>

            <div className={`p-6 rounded-xl ${isDark ? 'bg-gray-900' : 'bg-white'} shadow-lg hover:shadow-xl transition-shadow duration-300`}>
              <div className="flex items-center mb-4">
                <Users className="text-green-600 mr-3" size={24} />
                <h3 className="text-xl font-semibold">Leadership</h3>
              </div>
              <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                <strong>College Coordinator</strong> at SRM Paarivendhar Student Association - Fostering community 
                engagement and organizing events that bring students together.
              </p>
            </div>

            {/* Button Group - moved outside the grid */}
            <div className="flex space-x-4 pt-2">
              <a 
                href="/TEJASWINI BASKAR CV...pdf"
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:scale-105 transition-transform duration-300"
              >
                <ExternalLink size={20} className="mr-2" />
                View Resume
              </a>

              <a 
                href="https://www.linkedin.com/in/tejaswini-baskar-650627287/"
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:scale-105 transition-transform duration-300"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className={`w-full h-96 rounded-xl overflow-hidden shadow-xl ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}>
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
                alt="Professional headshot"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-20 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
