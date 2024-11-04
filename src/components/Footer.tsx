

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} Jorbat Kamau. All rights reserved.</p>
        <p className="mt-2">Built with React and Tailwind CSS</p>
      </div>
    </footer>
  );
};

export default Footer;