import React from 'react';
import { Code, Database, Globe, Server, Cpu, Shield, TestTube } from 'lucide-react';

const Skills = () => {
  const skillsets = [
    { 
      icon: <Globe size={24} />, 
      title: 'Frontend', 
      skills: ['React.js', 'React Native', 'Next.js', 'Redux', 'Material UI', 'Tailwind CSS', 'HTML5', 'CSS3', 'JavaScript', 'TypeScript'] 
    },
    { 
      icon: <Server size={24} />, 
      title: 'Backend', 
      skills: ['Node.js', 'Express.js', 'Flask', 'Firebase', 'AWS Lambda', 'PHP'] 
    },
    { 
      icon: <Database size={24} />, 
      title: 'Databases', 
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Firebase Realtime Database'] 
    },
    { 
      icon: <Cpu size={24} />, 
      title: 'Blockchain', 
      skills: ['Solidity', 'Web3.js', 'Ethers.js', 'Hardhat', 'Truffle', 'The Graph', 'Avalanche'] 
    },
    { 
      icon: <Shield size={24} />, 
      title: 'DevOps', 
      skills: ['Git', 'GitHub', 'CI/CD', 'Docker', 'Netlify', 'Vercel', 'cPanel'] 
    },
    { 
      icon: <TestTube size={24} />, 
      title: 'Testing', 
      skills: ['Jest', 'React Testing Library', 'Cypress', 'Mocha', 'Chai'] 
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-900 relative transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsets.map((skillset, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="flex items-center mb-4">
                <div className="text-indigo-600 dark:text-indigo-400">
                  {skillset.icon}
                </div>
                <h3 className="text-xl font-semibold ml-2 text-gray-800 dark:text-white">{skillset.title}</h3>
              </div>
              <ul className="list-disc list-inside">
                {skillset.skills.map((skill, skillIndex) => (
                  <li 
                    key={skillIndex} 
                    className="text-gray-700 dark:text-gray-300 transition-colors duration-300"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg className="relative block w-full h-[50px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path fill="#ffffff" className="dark:fill-gray-900" d="M0,0 C280,100 1160,0 1440,100 L1440,100 L0,100 Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Skills;
