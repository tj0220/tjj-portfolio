
import { ExternalLink, Github, Code } from 'lucide-react';

interface ProjectsProps {
  isDark: boolean;
}

const Projects = ({ isDark }: ProjectsProps) => {
  const projects = [
    {
      title: 'Aadhaar Verification System',
      description: 'A secure verification system using machine learning for document authentication and fraud detection.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
      technologies: ['Python', 'OpenCV', 'Machine Learning', 'Flask'],
      github: '#',
      demo: '#',
      category: 'Machine Learning'
    },
    {
      title: 'Expense Tracker Application',
      description: 'Full-stack web application for personal finance management with data visualization and budgeting features.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80',
      technologies: ['React', 'Django', 'PostgreSQL', 'Chart.js'],
      github: '#',
      demo: '#',
      category: 'Full Stack'
    },
    {
      title: 'Employee Management System',
      description: 'Comprehensive HR management platform with role-based access control and performance analytics.',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80',
      technologies: ['Django', 'React', 'MySQL', 'REST API'],
      github: '#',
      demo: '#',
      category: 'Full Stack'
    },
    {
      title: 'Cancer Therapy Stakeholder Analysis',
      description: 'Data analysis project examining treatment outcomes and stakeholder relationships in cancer therapy.',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80',
      technologies: ['Python', 'Pandas', 'Matplotlib', 'Statistical Analysis'],
      github: '#',
      demo: '#',
      category: 'Data Science'
    },
    {
      title: 'Portfolio Website',
      description: 'Modern, responsive portfolio website with dark/light theme and smooth animations.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      github: '#',
      demo: '#',
      category: 'Frontend'
    },
    {
      title: 'Data Visualization Dashboard',
      description: 'Interactive dashboard for exploring complex datasets with real-time analytics and insights.',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80',
      technologies: ['Python', 'Dash', 'Plotly', 'Pandas'],
      github: '#',
      demo: '#',
      category: 'Data Science'
    }
  ];

  return (
    <div className={`py-20 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            A showcase of my technical skills and problem-solving abilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group ${
                isDark ? 'bg-gray-900' : 'bg-white'
              }`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                    project.category === 'Machine Learning' ? 'bg-purple-600 text-white' :
                    project.category === 'Full Stack' ? 'bg-blue-600 text-white' :
                    project.category === 'Data Science' ? 'bg-green-600 text-white' :
                    'bg-orange-600 text-white'
                  }`}>
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className={`text-sm mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-2 py-1 text-xs rounded ${
                        isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                      isDark 
                        ? 'bg-gray-700 hover:bg-gray-600 text-gray-300' 
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                    }`}
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:scale-105 transition-transform"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:scale-105 transition-transform duration-300">
            View All Projects
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
