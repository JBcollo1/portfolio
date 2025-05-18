import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink, Calendar, User, CheckCircle, Award } from 'lucide-react';
import { useState, useEffect } from 'react';
import vibe from "./service/Vibestream.webp";

const projects = [
  { 
    id: 1, 
    title: 'Decentralized Lottery Platform', 
    role: 'Team Lead & Full-stack Developer',
    date: 'August 2024 - Present',
    githubLink: 'https://github.com/JBcollo1',
    liveLink: 'https://lottery-dao.vercel.app/',
    description: 'Led 6-developer team building blockchain lottery used by 15,000+ users with 99.9% uptime handling 10,000+ concurrent users', 
    image: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvY2tjaGFpbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    longDescription: 'As Team Lead for this innovative blockchain project, I coordinated a team of 6 developers to create a decentralized lottery platform that has gained significant user adoption. The platform features transparent random winner selection using verifiable random functions, secure wallet integration, and real-time transaction monitoring.',
    technologies: ['React', 'Solidity', 'Web3.js', 'Hardhat', 'Ethereum'],
    challenges: 'Ensuring system reliability while handling extreme traffic spikes of 10,000+ concurrent users and maintaining complete transparency in the winner selection process.',
    solutions: 'Implemented robust load balancing and built a custom verifiable random function (VRF) that provided cryptographic proof of fair winner selection, increasing user trust by 45%.',
    highlights: [
      'Achieved 99.9% uptime even during peak usage periods',
      'Implemented gas optimization reducing user transaction costs by 35%',
      'Designed responsive UI that worked seamlessly across all device types'
    ]
  },
  { 
    id: 2, 
    title: 'LumeLink Portfolio Platform', 
    role: 'Lead Developer',
    date: 'September 2024 - Present',
    githubLink: 'https://github.com/JBcollo1',
    liveLink: 'https://lumelink.netlify.app/',
    description: 'Architected responsive portfolio platform with interactive map, achieving 97/100 Google PageSpeed score', 
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdlYnNpdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    longDescription: 'The LumeLink Portfolio Platform is a cutting-edge solution for professionals to showcase their work with location-based context. As Lead Developer, I architected a responsive system featuring interactive map integration, optimized image loading, and seamless dark/light mode transitions for an exceptional user experience.',
    technologies: ['React.js', 'Next.js', 'Google Maps API', 'Tailwind CSS', 'Framer Motion'],
    challenges: 'Creating a highly performant application with complex map integrations while maintaining exceptional page load speeds across all devices.',
    solutions: 'Implemented dynamic code splitting, lazy loading of components, and optimized image processing that resulted in a remarkable 97/100 Google PageSpeed score.',
    highlights: [
      'Delivered 10 days ahead of schedule with zero critical bugs',
      'Created reusable component library reducing future development time by 40%',
      'Implemented advanced animations using Framer Motion for engaging user experience'
    ]
  },
  { 
    id: 3, 
    title: 'Food Delivery Management System', 
    role: 'Team Lead',
    date: 'October 2024 - Present',
    githubLink: 'https://github.com/JBcollo1',
    liveLink: 'https://castino.netlify.app/',
    description: 'Leading 4-developer team building comprehensive food ordering platform with real-time GPS tracking at 99.8% accuracy', 
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9iaWxlJTIwYXBwfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    longDescription: 'This comprehensive Food Delivery Management System handles everything from customer ordering to delivery tracking. As Team Lead, I designed a microservice architecture capable of processing 1,000+ concurrent orders while maintaining system performance and reliability.',
    technologies: ['React Native', 'TypeScript', 'Node.js', 'PostgreSQL', 'PHP', 'cPanel', 'WebSockets'],
    challenges: 'Coordinating multiple services including real-time GPS tracking, order management, payment processing, and vendor inventory systems while ensuring seamless user experience.',
    solutions: 'Designed a robust microservice architecture with efficient database optimization that enabled smooth handling of 1,000+ concurrent orders with minimal latency.',
    highlights: [
      'Implementing real-time GPS tracking with 99.8% accuracy',
      'Developing vendor portal and inventory management using PHP with cPanel deployment',
      'Creating secure payment processing supporting 5+ payment methods'
    ]
  },
  { 
    id: 4, 
    title: 'Enterprise Ticketing Application', 
    role: 'Technical Lead',
    date: 'November 2024 - Present',
    githubLink: 'https://github.com/JBcollo1',
    liveLink: 'https://fikaevents.netlify.app/',
    description: 'Built scalable system processing 800+ daily tickets with 99.99% uptime, reducing resolution time by 40%', 
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    longDescription: 'This Enterprise Ticketing Application revolutionizes how businesses handle internal support requests. As Technical Lead, I built a highly scalable system that processes over 800 tickets daily with exceptional reliability while providing powerful business intelligence through comprehensive reporting.',
    technologies: ['React.js', 'TypeScript', 'Express.js', 'MySQL', 'WebSockets', 'Redis'],
    challenges: 'Creating a system capable of handling high ticket volume with real-time updates while maintaining comprehensive historical data for business intelligence.',
    solutions: 'Engineered a custom dashboard with real-time WebSocket notifications and implemented efficient database indexing that reduced ticket resolution time by 40%.',
    highlights: [
      'Achieved 99.99% uptime even during peak usage periods',
      'Implemented real-time notifications via WebSockets',
      'Created comprehensive reporting for business intelligence'
    ]
  },
  { 
    id: 5, 
    title: 'Smart Contract Development', 
    role: 'Solo Developer',
    date: 'December 2024 - Present',
    githubLink: 'https://github.com/JBcollo1/SmartContract',
    liveLink: 'https://github.com/JBcollo1/SmartContract',
    description: 'Deployed production-ready smart contracts on Avalanche blockchain with 40% reduced transaction costs', 
    image: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvY2tjaGFpbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    longDescription: 'This project involved developing and deploying production-ready smart contracts on the Avalanche blockchain. As the sole developer, I focused on gas optimization and security, creating robust contracts that significantly reduced transaction costs for users while maintaining complete security integrity.',
    technologies: ['Solidity', 'Hardhat', 'Avalanche', 'Web3.js', 'TypeScript'],
    challenges: 'Optimizing contract execution to minimize gas costs while ensuring robust security against potential exploits and vulnerabilities.',
    solutions: 'Implemented advanced gas optimization techniques and conducted thorough security audits, resulting in a 40% reduction in transaction costs while maintaining zero security incidents.',
    highlights: [
      'Reduced transaction costs by 40% through efficient contract design',
      'Successfully passed multiple security audits with zero critical vulnerabilities',
      'Created comprehensive documentation and testing suite for contract reliability'
    ]
  },
  { 
    id: 6, 
    title: 'Hostel Discoveries', 
    role: 'Full-stack Developer',
    date: 'January 2025 - Present',
    githubLink: 'https://github.com/JBcollo1/front-end-hostels',
    liveLink: 'https://moringahostels.netlify.app/',
    description: 'A full-stack hostel discovery solution with React and Node.js', 
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdlYnNpdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    longDescription: 'Hostel Discoveries is a comprehensive platform connecting students with quality accommodation options. As Full-stack Developer, I built both frontend and backend components, implementing secure authentication, responsive design, and efficient search functionality that has attracted 3,000+ monthly active users.',
    technologies: ['React', 'Flask', 'MySQL', 'JWT', 'PHP', 'cPanel'],
    challenges: 'Creating a platform that could handle complex search queries and high-resolution images while maintaining fast performance and ensuring secure user authentication.',
    solutions: 'Implemented JWT for secure logins and lazy loading image techniques that reduced page load times by 50%, significantly improving user experience.',
    highlights: [
      'Built platform for student accommodation with 3,000+ monthly active users',
      'Implemented authentication with role-based access control',
      'Used PHP components deployed on cPanel for administrative functions'
    ]
  },
  { 
    id: 7, 
    title: 'Vibestream-social platform', 
    role: 'Mobile Developer',
    date: 'February 2025 - Present',
    githubLink: 'https://github.com/JBcollo1/social',
    liveLink: 'https://github.com/JBcollo1/social',
    description: 'A React Native social media app with real-time data syncing and profile management.',
    image: vibe,
    longDescription: 'Vibestream is a modern social platform focused on connecting users with similar interests. This app supports comprehensive user authentication, profile management, and real-time data updates through efficient WebSocket implementation, fostering dynamic social interaction with minimal latency.',
    technologies: ['React Native', 'Flask', 'MySQL', 'Python', 'WebSockets', 'Redis'],
    challenges: 'Ensuring real-time communication and data synchronization while maintaining responsive performance across various mobile devices with different capabilities.',
    solutions: 'Implemented advanced data caching strategies and lazy loading techniques that reduced response times by 30% while maintaining real-time data accuracy.',
    highlights: [
      'Achieved 99.5% crash-free sessions across both iOS and Android',
      'Implemented efficient media handling reducing bandwidth usage by 45%',
      'Created custom animations for engaging user experience'
    ]
  }
];

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === Number(id));
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Trigger animation after component mounts
    setIsVisible(true);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
          <Link to="/" className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300">
            <ArrowLeft size={20} className="mr-2" /> Return to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white py-12 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <Link to="/" className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 mb-6 transition-colors duration-300">
          <ArrowLeft size={20} className="mr-2" /> Back to Projects
        </Link>
        
        <div className={`transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
          
          <div className="flex flex-wrap items-center mb-6 text-gray-600 dark:text-gray-400">
            <div className="flex items-center mr-6 mb-2">
              <User size={18} className="mr-2" />
              <span>{project.role}</span>
            </div>
            <div className="flex items-center mb-2">
              <Calendar size={18} className="mr-2" />
              <span>{project.date}</span>
            </div>
          </div>
          
          <div className="relative overflow-hidden rounded-lg mb-8 group">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className={`transition-all duration-700 delay-200 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <h2 className="text-2xl font-semibold mb-4 flex items-center">
                  <span className="bg-indigo-600 dark:bg-indigo-700 w-10 h-1 rounded-full mr-3"></span>
                  Project Overview
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">{project.longDescription}</p>
                
                <h2 className="text-2xl font-semibold mb-4 flex items-center">
                  <span className="bg-indigo-600 dark:bg-indigo-700 w-10 h-1 rounded-full mr-3"></span>
                  Challenges and Solutions
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed"><strong>Challenges:</strong> {project.challenges}</p>
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed"><strong>Solutions:</strong> {project.solutions}</p>
                
                <h2 className="text-2xl font-semibold mb-4 flex items-center">
                  <span className="bg-indigo-600 dark:bg-indigo-700 w-10 h-1 rounded-full mr-3"></span>
                  Key Highlights
                </h2>
                <ul className="mb-8">
                  {project.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start mb-3">
                      <CheckCircle size={20} className="text-green-500 dark:text-green-400 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{highlight}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-4 mb-8">
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-indigo-600 dark:bg-indigo-700 text-white py-2 px-4 rounded-md hover:bg-indigo-700 dark:hover:bg-indigo-600 flex items-center transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <Github size={20} className="mr-2" /> View Code
                  </a>
                  
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gray-800 dark:bg-gray-700 text-white py-2 px-4 rounded-md hover:bg-gray-700 dark:hover:bg-gray-600 flex items-center transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <ExternalLink size={20} className="mr-2" /> Live Demo
                  </a>
                </div>
              </div>
            </div>
            
            <div className={`transition-all duration-700 delay-400 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 sticky top-6 transition-colors duration-300">
                <h2 className="text-2xl font-semibold mb-4 flex items-center">
                  <span className="bg-indigo-600 dark:bg-indigo-700 w-10 h-1 rounded-full mr-3"></span>
                  Technologies
                </h2>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 text-sm bg-indigo-100 dark:bg-indigo-900/40 text-indigo-800 dark:text-indigo-300 rounded-full transition-all duration-300 hover:scale-105"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <Award size={18} className="mr-2 text-yellow-500" />
                    Expertise
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Freelance Full-Stack & Mobile Developer with expertise in creating high-performance, scalable applications.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Maintaining 4.9/5 client satisfaction with 90% returning clients.
                  </p>
                </div>
                
                <Link 
                  to="/" 
                  className="block w-full text-center bg-indigo-600 dark:bg-indigo-700 text-white py-2 px-4 rounded-md hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-all duration-300 transform hover:-translate-y-1"
                >
                  Explore More Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;