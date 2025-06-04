
import { Code, Database, Brain, BarChart3, Globe, Server } from 'lucide-react';

interface SkillsProps {
  isDark: boolean;
}

const Skills = ({ isDark }: SkillsProps) => {
  const skillCategories = [
    {
      icon: <Code className="text-blue-600" size={32} />,
      title: 'Programming',
      skills: ['Python', 'JavaScript', 'HTML/CSS', 'React', 'Django'],
      level: 85
    },
    {
      icon: <Brain className="text-purple-600" size={32} />,
      title: 'Machine Learning',
      skills: ['Scikit-learn', 'TensorFlow', 'Deep Learning', 'Neural Networks'],
      level: 78
    },
    {
      icon: <Database className="text-green-600" size={32} />,
      title: 'Data Management',
      skills: ['SQL', 'PostgreSQL', 'Data Cleaning', 'ETL Processes'],
      level: 82
    },
    {
      icon: <BarChart3 className="text-orange-600" size={32} />,
      title: 'Data Visualization',
      skills: ['Matplotlib', 'Seaborn', 'Plotly', 'Tableau', 'Power BI'],
      level: 88
    },
    {
      icon: <Server className="text-red-600" size={32} />,
      title: 'Backend Development',
      skills: ['Django', 'REST APIs', 'Database Design', 'Authentication'],
      level: 75
    },
    {
      icon: <Globe className="text-indigo-600" size={32} />,
      title: 'Frontend Development',
      skills: ['React', 'Tailwind CSS', 'Responsive Design', 'UI/UX'],
      level: 80
    }
  ];

  return (
    <div className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl ${
                isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-50 hover:bg-gray-100'
              } transition-all duration-300 hover:scale-105 hover:shadow-xl group cursor-pointer`}
            >
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 bg-opacity-10 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold ml-4">{category.title}</h3>
              </div>
              
              <div className="space-y-2 mb-4">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`inline-block px-3 py-1 text-sm rounded-full mr-2 mb-2 ${
                      isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    Proficiency
                  </span>
                  <span className="text-sm font-semibold">{category.level}%</span>
                </div>
                <div className={`w-full h-2 rounded-full ${isDark ? 'bg-gray-700' : 'bg-gray-300'}`}>
                  <div
                    className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${category.level}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
