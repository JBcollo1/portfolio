
import React, { useState, useEffect } from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Fade in animation on component mount
    setIsVisible(true);
  }, []);

  return (
    <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-800 relative transition-colors duration-300">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Get in Touch
        </h2>
        
        <div 
          className={`max-w-2xl mx-auto text-center space-y-8 transform transition-all duration-1000 ${
            isVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-center mb-3">
              <Mail className="text-indigo-600 dark:text-indigo-400 mr-2" size={24} />
              <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300">Email</h3>
            </div>
            <p className="text-indigo-600 dark:text-indigo-400">
              <a 
                href="mailto:jbcollins254@gmail.com" 
                className="hover:underline inline-block relative group"
              >
                jbcollins254@gmail.com
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 dark:bg-indigo-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-center mb-3">
              <Phone className="text-indigo-600 dark:text-indigo-400 mr-2" size={24} />
              <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300">Phone</h3>
            </div>
            <p className="text-indigo-600 dark:text-indigo-400">+254 725 748 187</p>
          </div>
          
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-center mb-3">
              <Linkedin className="text-indigo-600 dark:text-indigo-400 mr-2" size={24} />
              <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300">LinkedIn</h3>
            </div>
            <p className="text-indigo-600 dark:text-indigo-400">
              <a 
                href="https://www.linkedin.com/in/collins-undefined-4b65782ba/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:underline inline-block relative group"
              >
                Collins
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 dark:bg-indigo-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-center mb-3">
              <Github className="text-indigo-600 dark:text-indigo-400 mr-2" size={24} />
              <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300">GitHub</h3>
            </div>
            <p className="text-indigo-600 dark:text-indigo-400">
              <a 
                href="https://github.com/JBcollo1" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:underline inline-block relative group"
              >
                JBcollo1
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 dark:bg-indigo-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            </p>
          </div>
        </div>
      </div>
      
      {/* Animated wave divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg 
          className="relative block w-full h-12" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 100" 
          preserveAspectRatio="none"
        >
          <path 
            className="fill-gray-900 dark:fill-gray-900 transition-colors duration-300 animate-wave"
            d="M0,0 C280,100 1160,0 1440,100 L1440,100 L0,100 Z"
          ></path>
        </svg>
      </div>
      
      {/* Floating shapes animation */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="shape shape-1 bg-indigo-600/5 dark:bg-indigo-400/5"></div>
        <div className="shape shape-2 bg-indigo-600/5 dark:bg-indigo-400/5"></div>
        <div className="shape shape-3 bg-indigo-600/5 dark:bg-indigo-400/5"></div>
      </div>
    </section>
  );
};

// Don't forget to add these CSS animations to your global CSS file
// .shape {
//   position: absolute;
//   border-radius: 50%;
//   animation: float 12s infinite;
// }
// .shape-1 {
//   width: 100px;
//   height: 100px;
//   top: 15%;
//   left: 10%;
//   animation-delay: 0s;
// }
// .shape-2 {
//   width: 80px;
//   height: 80px;
//   bottom: 40%;
//   right: 10%;
//   animation-delay: 3s;
// }
// .shape-3 {
//   width: 60px;
//   height: 60px;
//   bottom: 30%;
//   left: 20%;
//   animation-delay: 6s;
// }
// @keyframes float {
//   0%, 100% { transform: translateY(0) rotate(0deg); }
//   50% { transform: translateY(-20px) rotate(10deg); }
// }
// .animate-wave {
//   animation: wave 12s ease-in-out infinite alternate;
// }
// @keyframes wave {
//   0% { d: path('M0,0 C280,100 1160,0 1440,100 L1440,100 L0,100 Z'); }
//   100% { d: path('M0,0 C180,50 1260,50 1440,100 L1440,100 L0,100 Z'); }
// }

export default Contact;