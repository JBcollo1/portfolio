import portfolio from "./service/profile.jpeg"

const About = () => {
  return (
    <section id="about" className="py-20 bg-white relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img src={portfolio	} alt="Jorbat Kamau" className="rounded-full w-48 h-49 object-cover mx-auto" />
          </div>
          <div className="md:w-1/2">
            <p className="text-lg text-gray-700 leading-relaxed">
              Hello! I'm a passionate full stack developer with a keen eye for creating elegant solutions to complex problems. With expertise in both front-end and back-end technologies, I bring ideas to life through clean, efficient, and scalable code. My goal is to build applications that not only meet technical requirements but also provide an exceptional user experience.
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg className="relative block w-full h-[50px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path fill="#f3f4f6" d="M0,100 C280,0 1160,100 1440,0 L1440,100 L0,100 Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default About;