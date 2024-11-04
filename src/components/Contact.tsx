const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <div>
            <h3 className="text-lg font-medium text-gray-700">Email</h3>
            <p className="text-indigo-600">
              <a href="https://mail.google.com/mail/u/0/#inbox?compose=new" className="hover:underline">jbcollins254@gmail.com</a>
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-700">Phone</h3>
            <p className="text-indigo-600">+254 725 748 187</p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-700">LinkedIn</h3>
            <p className="text-indigo-600">
              <a href="https://www.linkedin.com/in/collins-undefined-4b65782ba/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                Collins/linked In
              </a>
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-700">GitHub</h3>
            <p className="text-indigo-600">
              <a href="https://github.com/JBcollo1" target="_blank" rel="noopener noreferrer" className="hover:underline">
                JBcollo1
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg className="relative block w-full h-[50px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path fill="#1f2937" d="M0,0 C280,100 1160,0 1440,100 L1440,100 L0,100 Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Contact;
