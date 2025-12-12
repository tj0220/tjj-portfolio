import { ExternalLink, Github, Code } from 'lucide-react';

interface ProjectsProps {
  isDark: boolean;
}

const Projects = ({ isDark }: ProjectsProps) => {
  const projects = [
    {
      title: 'Employee Management System',
      description: 'A web-based employee management system built using Python and Django for streamlined workforce tracking and organization.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      technologies: ['Python', 'Django','MySQl'],
      github: 'https://github.com/tj0220/Employee-management-system.git',
      category: 'Full Stack'
    },
    {
      title: 'Weather Prediction App',
      description: 'A mobile weather prediction app developed in Android Studio using real-time data from a weather API.',
      image: "https://images.unsplash.com/photo-1584270354949-1ecc5034556b?auto=format&fit=crop&w=800&q=80",
      technologies: ['Android Studio', 'Java', 'OpenWeather API'],
      github: 'https://github.com/tj0220/Weather-App.git',
      category: 'Mobile Application'
    },

    {
      title: 'FarmBridge – Farmer to Consumer Marketplace',
      description: 'Developed a farmer-centric platform to eliminate middlemen and enable direct, transparent transactions between farmers and consumers.',
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
      technologies: [
        'Java',
        'Spring Boot',
        'Hibernate',
        'SQL',
        'AWS EC2',
        'Apache Kafka'
      ],
      github: 'https://github.com/tj0220',
      category: 'Full Stack'
    },

    {
      title: 'AGRO-AI – Meta-Learning Powered Agricultural Intelligence Platform',
      description: 'Offline-first agricultural AI system featuring MAML yield prediction, smart irrigation, and CNN/3D-CNN disease diagnosis, enhanced with TFLite field detection and a multilingual LLM + MLOps stack.',
      image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80',
      technologies: [
        'Python',
        'MAML',
        'CNN',
        'TFLite',
        'MLflow',
        'ISRIC SoilGrids',
        'AgriStack',
        'RainBird IQ4'
      ],
      github: 'https://github.com/tj0220',
      category: 'AI/ML + Agriculture'
    },
  ];

  return (
    <div className={`py-20 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
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

        {/* Project Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group ${
                isDark ? 'bg-gray-900' : 'bg-white'
              }`}
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500 bg-gray-200" 
                />

                {/* Category Badge */}
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

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>

                <p className={`text-sm mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {project.description}
                </p>

                {/* Tech Stack */}
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

                {/* Buttons */}
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
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Projects;
