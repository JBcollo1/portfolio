import { motion } from "framer-motion";
import portfolio from "./service/profile.jpeg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 relative">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative mx-auto w-64 h-64 overflow-hidden rounded-full border-4 border-indigo-600 dark:border-indigo-400 shadow-xl">
              <img 
                src={portfolio} 
                alt="Jorbat Kamau" 
                className="w-full h-full object-cover transition-transform hover:scale-110 duration-500" 
              />
            </div>
          </motion.div>
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="space-y-4 text-gray-800 dark:text-gray-200">
              <p className="text-lg leading-relaxed">
                Hello! I'm a high-impact full-stack developer with specialized expertise in blockchain technologies and modern JavaScript frameworks. With a passion for clean code and innovative solutions, I transform complex requirements into scalable, user-friendly applications.
              </p>
              <p className="text-lg leading-relaxed">
                My experience includes delivering enterprise-grade applications that serve 15,000+ users across multiple platforms. I've successfully reduced system latency by 60% and implemented cutting-edge security protocols that protect sensitive user data.
              </p>
              <p className="text-lg leading-relaxed">
                I thrive in collaborative environments where I can lead teams to success while continuously learning and adapting to new technologies and challenges.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg className="relative block w-full h-[50px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path fill="#f3f4f6" className="dark:fill-gray-800" d="M0,100 C280,0 1160,100 1440,0 L1440,100 L0,100 Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default About;