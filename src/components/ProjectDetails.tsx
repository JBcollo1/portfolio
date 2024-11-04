
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';

const projects = [
  { id: 1, title: 'Hostel Discoveries ', description: 'A full-stack hostel discovery solution with React and Node.js', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdlYnNpdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60', longDescription: 'This hostel platform is built using React for the frontend and Node.js with Express for the backend. It features a responsive design, user authentication, room catalog, booking functionality, and secure payment integration.', technologies: ['React', 'flask', 'MySql', 'Python',],challenges: 'Ensuring smooth performance for high user traffic and secure user authentication.',solutions: 'Integrated JWT for secure logins and implemented lazy loading to reduce page load times by 50%.', },
  { id: 2, title: 'Task Management App', description: 'A React-based task management application with drag-and-drop functionality', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60', longDescription: 'This task management application is built with React and features a drag-and-drop interface for easy task organization. It includes user authentication, task creation, editing, and deletion, as well as project and team management capabilities.', technologies: ['React', 'Redux', 'react-beautiful-dnd', 'Firebase'], challenges: 'Implementing a smooth drag-and-drop experience across different devices and screen sizes was a significant challenge.', solutions: 'We utilized the react-beautiful-dnd library and implemented custom touch event handlers to ensure a consistent experience across desktop and mobile devices.' },
  { id: 3, title: 'Social Media Dashboard', description: 'A responsive dashboard for social media analytics using Vue.js', image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9iaWxlJTIwYXBwfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60', longDescription: 'This social media dashboard provides a comprehensive overview of various social media metrics across multiple platforms. Built with Vue.js, it offers real-time data updates, customizable widgets, and exportable reports.', technologies: ['Vue.js', 'Vuex', 'Chart.js', 'Node.js', 'Express', 'MongoDB'], challenges: 'Integrating multiple social media APIs and handling large volumes of real-time data were the primary challenges.', solutions: 'We implemented a microservices architecture for API integrations and used server-side caching to optimize data retrieval and processing.' },
  { id: 4, title: 'Country Discoveries', description: 'An interactive country search app with social features including posts, feeds, and comments.', image: 'https://images.unsplash.com/photo-1601134467661-3d775b999c8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2VhdGhlciUyMGFwcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60', longDescription: 'This app enables users to discover countries and share travel experiences with an interactive social feed. It’s optimized with MySQL and code-splitting to enhance performance and user engagement.', technologies: ['React', ], challenges: 'Maintaining fast search speeds and smooth loading for high-resolution images and comments.', },
  { id: 5, title: 'Blog CMS', description: 'A content management system for blogs using Django and React', image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60', longDescription: 'This blog content management system combines a Django backend with a React frontend to provide a powerful and flexible platform for content creators. It includes features such as rich text editing, image uploads, tagging, and SEO optimization.', technologies: ['Django', 'Django REST Framework', 'React', 'Redux', 'PostgreSQL'], challenges: 'Creating a seamless integration between the Django backend and React frontend, while maintaining high performance, was the main challenge.', solutions: 'We implemented a robust API using Django REST Framework and utilized server-side rendering with Next.js to improve performance and SEO.' },
];

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
              <a href="#" className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 flex items-center">
                <Github size={20} className="mr-2" /> View Code
              </a>
              <a href="#" className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 flex items-center">
                <ExternalLink size={20} className="mr-2" /> Live Demo
              </a>
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