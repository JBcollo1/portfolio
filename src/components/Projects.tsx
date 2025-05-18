import { ExternalLink, Github, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    { 
      id: 1, 
      title: 'Decentralized Lottery Platform', 
      description: 'Led 6-developer team building blockchain lottery used by 15,000+ users with 99.9% uptime handling 10,000+ concurrent users', 
      image: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvY2tjaGFpbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      githubLink: 'https://github.com/JBcollo1',
      technologies: ['React', 'Solidity', 'Web3.js', 'Hardhat']
    },
    { 
      id: 2, 
      title: 'LumeLink Portfolio Platform', 
      description: 'Architected responsive portfolio platform with interactive map, achieving 97/100 Google PageSpeed score', 
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdlYnNpdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      githubLink: 'https://github.com/JBcollo1',
      technologies: ['React.js', 'Next.js', 'Google Maps API', 'Tailwind CSS']
    },
    { 
      id: 3, 
      title: 'Food Delivery Management System', 
      description: 'Leading 4-developer team building comprehensive food ordering platform with real-time GPS tracking at 99.8% accuracy', 
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9iaWxlJTIwYXBwfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      githubLink: 'https://github.com/JBcollo1',
      technologies: ['React Native', 'TypeScript', 'Node.js', 'PostgreSQL', 'PHP']
    },
    { 
      id: 4, 
      title: 'Enterprise Ticketing Application', 
      description: 'Built scalable system processing 800+ daily tickets with 99.99% uptime, reducing resolution time by 40%', 
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      githubLink: 'https://github.com/JBcollo1',
      technologies: ['React.js', 'TypeScript', 'Express.js', 'MySQL']
    },
    { 
      id: 5, 
      title: 'Smart Contract Development', 
      description: 'Deployed production-ready smart contracts on Avalanche blockchain with 40% reduced transaction costs', 
      image: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvY2tjaGFpbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      githubLink: 'https://github.com/JBcollo1',
      technologies: ['Solidity', 'Hardhat', 'Avalanche']
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 relative transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <Link to={`/project/${project.id}`} className="block">
                <div className="relative overflow-hidden group">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 text-sm bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
              <div className="px-6 pb-6 flex space-x-4">
                <button 
                  onClick={() => window.open(project.githubLink, '_blank')} 
                  className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 flex items-center transition-colors duration-300"
                >
                  <Github size={20} className="mr-1" /> Code
                </button>
                <button 
                  onClick={() => window.open(project.githubLink, '_blank')} 
                  className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 flex items-center transition-colors duration-300"
                >
                  <Globe size={20} className="mr-1" /> Live Demo
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg className="relative block w-full h-[50px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path fill="#f3f4f6" className="dark:fill-gray-900" d="M0,100 C280,0 1160,100 1440,0 L1440,100 L0,100 Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Projects;
