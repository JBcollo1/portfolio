import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    { 
      id: 1, 
      title: 'Hostel Discoveries', 
      description: 'A full-stack e-commerce solution with React and Node.js', 
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdlYnNpdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      githubLink: 'https://github.com/JBcollo1/front-end-hostels'
    },
    { 
      id: 2, 
      title: 'Library Management System', 
      description: 'A React-based task management application with drag-and-drop functionality', 
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      githubLink: 'https://github.com/JBcollo1/phase-3-project'
    },
    { 
      id: 3, 
      title: 'Social Media Dashboard', 
      description: 'A responsive dashboard for social media analytics using Vue.js', 
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9iaWxlJTIwYXBwfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      githubLink: 'https://github.com/JBcollo1/social'
    },
    { 
      id: 4, 
      title: 'Country Discoveries', 
      description: 'A mobile-first weather application using React Native', 
      image: 'https://images.unsplash.com/photo-1601134467661-3d775b999c8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2VhdGhlciUyMGFwcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      githubLink: 'https://github.com/JBcollo1/phase-2--project'
    },
    { 
      id: 5, 
      title: 'Blog CMS', 
      description: 'A content management system for blogs using Django and React', 
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      githubLink: 'https://github.com/JBcollo1/Eco-eats'
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-100 rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:scale-105">
              <Link to={`/project/${project.id}`} className="block">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                </div>
              </Link>
              <div className="px-6 pb-6 flex space-x-4">
                <button 
                  onClick={() => window.open(project.githubLink, '_blank')} 
                  className="text-indigo-600 hover:text-indigo-800 flex items-center"
                >
                  <Github size={20} className="mr-1" /> Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg className="relative block w-full h-[50px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path fill="#f3f4f6" d="M0,100 C280,0 1160,100 1440,0 L1440,100 L0,100 Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Projects;