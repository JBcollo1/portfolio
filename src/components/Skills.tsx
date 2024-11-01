import React from 'react';
import { Code, Database, Globe, Server } from 'lucide-react';

const Skills = () => {
  const skillsets = [
    { icon: <Globe size={24} />, title: 'Front-end', skills: ['React', 'React Native', 'HTML5', 'CSS3', 'JavaScript','Typescript','Next.js'] },
    { icon: <Server size={24} />, title: 'Back-end', skills: ['Node.js', 'Python','Flask'] },
    { icon: <Database size={24} />, title: 'Databases', skills: [ 'PostgreSQL', 'MySQL'] },
    { icon: <Code size={24} />, title: 'Other', skills: ['Git','GitHub', 'Docker', 'RESTful APIs'] },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-100 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsets.map((skillset, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                {skillset.icon}
                <h3 className="text-xl font-semibold ml-2">{skillset.title}</h3>
              </div>
              <ul className="list-disc list-inside">
                {skillset.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="text-gray-700">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg className="relative block w-full h-[50px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path fill="#ffffff" d="M0,0 C280,100 1160,0 1440,100 L1440,100 L0,100 Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Skills;