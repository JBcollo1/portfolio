
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import vibe from "./service/Vibestream.webp"

const projects = [
  { id: 1, title: 'Hostel Discoveries ',  githubLink: 'https://github.com/JBcollo1/front-end-hostels',description: 'A full-stack hostel discovery solution with React and Node.js', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdlYnNpdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60', longDescription: 'This hostel platform is built using React for the frontend and Node.js with Express for the backend. It features a responsive design, user authentication, room catalog, booking functionality, and secure payment integration.', technologies: ['React', 'flask', 'MySql', 'Python',],challenges: 'Ensuring smooth performance for high user traffic and secure user authentication.',solutions: 'Integrated JWT for secure logins and implemented lazy loading to reduce page load times by 50%.', },
  { id: 2, title: 'Library Management System', githubLink: 'https://github.com/JBcollo1/phase-3-project',description: 'A backend library management system for managing books, authors, and borrowers.', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60', longDescription: 'Developed in Python, this backend system streamlines library operations by efficiently managing books, authors, and borrowers. Ideal for smaller libraries needing a straightforward yet powerful management tool.', technologies: ['Python',],  challenges: 'Managing efficient CRUD operations while handling a large catalog of books and user data.',
    solutions: 'Built an optimized backend to support high-speed data retrieval and smooth database operations.',
  },
  { id: 3, title: 'Vibestream-social platform ',githubLink: 'https://github.com/JBcollo1/social', description: 'A React Native social media app with real-time data syncing and profile management.', image: vibe,  longDescription: 'This app supports user authentication, profile management, and real-time data updates, fostering social interaction in real-time. It’s optimized with lazy loading and caching to improve response times.', technologies: ['React', 'flask', 'MySql', 'Python',], challenges: 'Real-time communication and data synchronization while keeping the app responsive.',
    solutions: 'Implemented data caching and lazy loading to cut response times by 30%.', },
  { id: 4, title: 'Country Discoveries', githubLink: 'https://github.com/JBcollo1/phase-2--project', description: 'An interactive country search app with social features including posts, feeds, and comments.', image: 'https://images.unsplash.com/photo-1601134467661-3d775b999c8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2VhdGhlciUyMGFwcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60', longDescription: 'This app enables users to discover countries and share travel experiences with an interactive social feed. It’s optimized with MySQL and code-splitting to enhance performance and user engagement.', technologies: ['React', ], challenges: 'Maintaining fast search speeds and smooth loading for high-resolution images and comments.', },
]

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === Number(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <Link to="/" className="inline-flex items-center text-indigo-600 hover:text-indigo-800 mb-6">
          <ArrowLeft size={20} className="mr-2" /> Back to Projects
        </Link>
        <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
        <img src={project.image} alt={project.title} className="w-full h-64 object-cover rounded-lg mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
            <p className="text-gray-700 mb-6">{project.longDescription}</p>
            <h2 className="text-2xl font-semibold mb-4">Challenges and Solutions</h2>
            <p className="text-gray-700 mb-3"><strong>Challenges:</strong> {project.challenges}</p>
            <p className="text-gray-700 mb-6"><strong>Solutions:</strong> {project.solutions}</p>
            <div className="flex space-x-4 mb-8">
              
              <button 
                  onClick={() => window.open(project.githubLink, '_blank')} 
                  className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 flex items-center"
                >
                  <Github size={20} className="mr-1" /> Code
                </button>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
            <ul className="list-disc list-inside text-gray-700">
              {project.technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;