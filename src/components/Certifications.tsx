
import { Award, ExternalLink, Calendar } from 'lucide-react';

interface CertificationsProps {
  isDark: boolean;
}

const Certifications = ({ isDark }: CertificationsProps) => {
  const certifications = [
    {
      title: 'Python for Data Science',
      provider: 'NPTEL',
      date: '2024',
      description: 'An NPTEL course covering fundamental Python programming concepts and their applications in data analysis, data visualization, and statistical modeling for data science.',
      logo: 'https://th.bing.com/th/id/R.9db67594bfa0cf76654d9ac490af9ab7?rik=MSyz3EPBSCSuYg&riu=http%3a%2f%2fvcwjes.edu.in%2fvcwlib%2fwp-content%2fuploads%2f2017%2f03%2fnptel_logo.png&ehk=K%2b8ikKowP8VTeEgts4O%2bWyckPJrL6rPa8KLZIq%2fzKJo%3d&risl=&pid=ImgRaw&r=0',
      skills: ['Data Analysis', 'Python', 'Neural network', 'TensorFlow'],
      credentialUrl: '/Python for Data Science.pdf'
    },
    {
      title: 'AWS CLOUD FOUNDATIONS BADGE',
      provider: 'AWS',
      date: '2024',
      description: 'An AWS course covering fundamental cloud concepts and their applications in data analysis, data visualization, and statistical modeling for data science.',
      logo:'https://th.bing.com/th/id/OIP.NyXAci3xUQt1zXNlJPb4FQHaEK?rs=1&pid=ImgDetMain',
      skills: ['AWS', 'Cloud Computing', 'Data Analysis', 'Data Visualization'],
      credentialUrl: 'https://www.credly.com/badges/56cd66df-ee8a-44a2-89dc-4bed9af7b1cd/linked_in?t=sfq9ji'
    },
      
    {
      title: 'AIML EduSkills Virtual Internship',
      provider: 'AICTE',
      date: '2024',
      description: 'Completed a virtual internship focused on practical AI and Machine Learning projects, enhancing skills in data analysis, model building, and algorithm implementation.',
      logo: 'https://assets.thehansindia.com/h-upload/2022/12/26/1327093-o.webp',
      skills: ['Artificial Intelligence', 'Machine Learning', 'Data Analysis', 'Model Building', 'Algorithm Implementation'],
      credentialUrl: '/aiml.jpg'
    },
    {
      title: 'C++ Programming',
      provider: 'Scaler Topics',
      date: '2024',
      description: 'Comprehensive course on C++ fundamentals, covering object-oriented programming, data structures, and efficient problem-solving techniques.',
      logo:'https://play-lh.googleusercontent.com/CUTEE0Q3qo4kiFK20N9_MmJdBtO-QZpuDhQEfMU1HneFSbmPLf7UiympkbFVITH1pZA',
      skills: [
    'C++ Programming',
    'Object-Oriented Programming (OOP)',
    'Data Structures',
    'Algorithms'],
      credentialUrl: '/c++.jpg'
    },
    
    {
      title: 'C Programming',
      provider: 'Udemy',
      date: '2023',
      description: 'In-depth C programming course covering basics to advanced topics including pointers, memory management, and problem-solving.',
      logo:'https://th.bing.com/th/id/OIP.tVHImC715kuoK3qLMsUOfAHaHa?rs=1&pid=ImgDetMain',
      skills: ['C Programming',
    'Pointers',
    'Memory Management',
    'Control Structures',
    'Data Types'],
      credentialUrl: 'c.jpg'
    },
    {
    title: 'Networking Basics',
    provider: 'Cisco Networking Academy',
    date: '2025',
    description: 'Foundational networking course covering IP addressing, routing, switching, network layers, protocols, and essential troubleshooting skills.',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg',
    skills: [
    'Networking Fundamentals',
    'IP Addressing & Subnetting',
    'Routing & Switching',
    'OSI & TCP/IP Models',
    'Network Troubleshooting'
  ],
  credentialUrl: 'cisco.jpg'
},

  ];

  return (
    <div className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Continuous learning and professional development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl ${
                isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-50 hover:bg-gray-100'
              } transition-all duration-300 hover:scale-105 hover:shadow-xl group`}
            >
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={cert.logo}
                    alt={cert.provider}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-1 group-hover:text-blue-600 transition-colors">
                    {cert.title}
                  </h3>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {cert.provider}
                  </p>
                  <div className="flex items-center mt-1">
                    <Calendar size={14} className={isDark ? 'text-gray-500' : 'text-gray-400'} />
                    <span className={`text-sm ml-1 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                      {cert.date}
                    </span>
                  </div>
                </div>
              </div>

              <p className={`text-sm mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                {cert.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {cert.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`px-2 py-1 text-xs rounded-full ${
                      isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <a
                href={cert.credentialUrl}
                className="flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:scale-105 transition-transform duration-300"
              >
                <Award size={16} className="mr-2" />
                View Credential
                <ExternalLink size={14} className="ml-2" />
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Always learning and growing. More certifications in progress!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
