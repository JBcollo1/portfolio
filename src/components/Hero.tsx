import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState('');
  const fullText = 'Turning ideas into reality through code';
  const [typingIndex, setTypingIndex] = useState(0);

  useEffect(() => {
    // Trigger animation on component mount
    setIsVisible(true);

    // Typing effect
    if (typingIndex < fullText.length) {
      const timer = setTimeout(() => {
        setTypedText(fullText.substring(0, typingIndex + 1));
        setTypingIndex(typingIndex + 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [typingIndex]);

  return (
    <section className="bg-gradient-to-b from-blue-600 to-indigo-700 dark:from-gray-800 dark:to-gray-900 text-white py-20 relative transition-colors duration-300">
      <div className="container mx-auto px-6 text-center">
        <div 
          className={`transform transition-all duration-1000 ${
            isVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-10 opacity-0'
          }`}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Full Stack Developer
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 h-8">
            {typedText}
            <span className="animate-blink">|</span>
          </p>
          
          <div className="flex justify-center space-x-6 mt-8">
            <a 
              href="https://github.com/JBcollo1" 
              className="text-white hover:text-blue-200 dark:hover:text-blue-400 transform hover:scale-110 transition-all duration-300"
              aria-label="GitHub Profile"
            >
              <Github size={28} />
            </a>
            <a 
              href="https://www.linkedin.com/in/collins-undefined-4b65782ba/" 
              className="text-white hover:text-blue-200 dark:hover:text-blue-400 transform hover:scale-110 transition-all duration-300"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={28} />
            </a>
            <a 
              href="mailto:contact@jorbatkamau.com" 
              className="text-white hover:text-blue-200 dark:hover:text-blue-400 transform hover:scale-110 transition-all duration-300"
              aria-label="Email Contact"
            >
              <Mail size={28} />
            </a>
          </div>
          
          <div className="mt-12">
            <a 
              href="#projects" 
              className="bg-white text-blue-700 dark:bg-gray-800 dark:text-blue-400 px-8 py-3 rounded-full font-medium hover:bg-blue-100 dark:hover:bg-gray-700 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>
      
      {/* Animated wave divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg 
          className="relative block w-full h-16" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 100" 
          preserveAspectRatio="none"
        >
          <path 
            className="fill-white dark:fill-gray-900 transition-colors duration-300 animate-wave"
            d="M0,32L60,42.7C120,53,240,75,360,69.3C480,64,600,32,720,21.3C840,11,960,21,1080,32C1200,43,1320,53,1380,58.7L1440,64L1440,100L1380,100C1320,100,1200,100,1080,100C960,100,840,100,720,100C600,100,480,100,360,100C240,100,120,100,60,100L0,100Z"
          ></path>
        </svg>
      </div>

      {/* Floating shapes animation */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="shape shape-1 bg-white/10 dark:bg-gray-700/20"></div>
        <div className="shape shape-2 bg-white/10 dark:bg-gray-700/20"></div>
        <div className="shape shape-3 bg-white/10 dark:bg-gray-700/20"></div>
        <div className="shape shape-4 bg-white/10 dark:bg-gray-700/20"></div>
      </div>
    </section>
  );
};


export default Hero;