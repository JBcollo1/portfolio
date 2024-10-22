import React from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-indigo-600">YourName</a>
        <nav className="hidden md:flex space-x-6">
          <a href="#about" className="text-gray-600 hover:text-indigo-600">About</a>
          <a href="#skills" className="text-gray-600 hover:text-indigo-600">Skills</a>
          <a href="#projects" className="text-gray-600 hover:text-indigo-600">Projects</a>
          <a href="#contact" className="text-gray-600 hover:text-indigo-600">Contact</a>
        </nav>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col items-center py-4 space-y-4">
            <a href="#about" className="text-gray-600 hover:text-indigo-600">About</a>
            <a href="#skills" className="text-gray-600 hover:text-indigo-600">Skills</a>
            <a href="#projects" className="text-gray-600 hover:text-indigo-600">Projects</a>
            <a href="#contact" className="text-gray-600 hover:text-indigo-600">Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
