
import { Award, ExternalLink, Calendar } from 'lucide-react';

interface CertificationsProps {
  isDark: boolean;
}

const Certifications = ({ isDark }: CertificationsProps) => {
  const certifications = [
    {
      title: 'Machine Learning Specialization',
      provider: 'Coursera - Stanford University',
      date: '2024',
      description: 'Comprehensive course covering supervised and unsupervised learning, neural networks, and best practices.',
      logo: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=200&q=80',
      skills: ['Machine Learning', 'Python', 'Neural Networks', 'TensorFlow'],
      credentialUrl: '#'
    },
    {
      title: 'Deep Learning Specialization',
      provider: 'Coursera - deeplearning.ai',
      date: '2024',
      description: 'Advanced deep learning concepts including CNNs, RNNs, and transformer architectures.',
      logo: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=200&q=80',
      skills: ['Deep Learning', 'CNNs', 'RNNs', 'Computer Vision'],
      credentialUrl: '#'
    },
    {
      title: 'Data Science Professional Certificate',
      provider: 'IBM - Coursera',
      date: '2023',
      description: 'End-to-end data science workflow from data collection to model deployment.',
      logo: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=200&q=80',
      skills: ['Data Science', 'SQL', 'Data Visualization', 'Statistics'],
      credentialUrl: '#'
    },
    {
      title: 'Python for Data Science and AI',
      provider: 'IBM - Coursera',
      date: '2023',
      description: 'Python programming fundamentals for data science and artificial intelligence applications.',
      logo: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=200&q=80',
      skills: ['Python', 'Pandas', 'NumPy', 'Data Analysis'],
      credentialUrl: '#'
    },
    {
      title: 'Full Stack Web Development',
      provider: 'Udemy',
      date: '2023',
      description: 'Complete web development bootcamp covering frontend and backend technologies.',
      logo: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=200&q=80',
      skills: ['React', 'Django', 'JavaScript', 'HTML/CSS'],
      credentialUrl: '#'
    },
    {
      title: 'SQL for Data Science',
      provider: 'Coursera - University of California, Davis',
      date: '2023',
      description: 'Advanced SQL techniques for data manipulation, analysis, and database management.',
      logo: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=200&q=80',
      skills: ['SQL', 'Database Design', 'Data Modeling', 'PostgreSQL'],
      credentialUrl: '#'
    }
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
