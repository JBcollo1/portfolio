
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-indigo-700 text-white py-20 relative">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Full Stack Developer</h1>
        <p className="text-xl md:text-2xl mb-8">Turning ideas into reality through code</p>
        <div className="flex justify-center space-x-4">
          <a href="https://github.com/JBcollo1" className="text-white hover:text-indigo-200"><Github size={24} /></a>
          <a href="#" className="text-white hover:text-indigo-200"><Linkedin size={24} /></a>
          <a href="#" className="text-white hover:text-indigo-200"><Mail size={24} /></a>
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

export default Hero;