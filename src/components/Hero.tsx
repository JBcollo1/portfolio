import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { FaReact, FaPython, FaPhp } from "react-icons/fa";
import { SiTypescript, SiFlask, SiExpress } from "react-icons/si";

const Hero = () => {
  const techStack = [
    { name: "React", icon: FaReact, category: "Frontend" },
    { name: "TypeScript", icon: SiTypescript, category: "Frontend" },
    { name: "Python", icon: FaPython, category: "Backend" },
    { name: "PHP", icon: FaPhp, category: "Backend" },
    { name: "Flask", icon: SiFlask, category: "Backend" },
    { name: "Express.js", icon: SiExpress, category: "Backend" },
  ];

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Animation variants for enhanced animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const techStackVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "backOut"
      }
    }
  };

  const floatingAnimation = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center pt-20 pb-10 relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, #101E2A 0%, #1C2B38 50%, #2C3E50 100%)`
      }}
    >
      {/* Enhanced Background decoration with floating particles */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute inset-0 bg-gradient-radial from-teal-500/10 via-transparent to-transparent"
          style={{
            background: `radial-gradient(ellipse at top right, rgba(20, 184, 166, 0.1) 0%, transparent 70%)`
          }}
        ></div>
        
        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              backgroundColor: '#14B8A6',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Content Section */}
          <motion.div
            className="lg:col-span-7 space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <motion.p 
                className="mb-3 text-lg font-medium tracking-wide"
                style={{ color: '#14B8A6' }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Hello, I'm
              </motion.p>
              
              <h1 className="mb-6">
                <motion.span 
                  className="block text-5xl md:text-7xl lg:text-8xl font-black text-white mb-2 leading-tight"
                  initial={{ opacity: 0, x: -50, rotateX: 90 }}
                  animate={{ opacity: 1, x: 0, rotateX: 0 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: "backOut" }}
                >
                  Jorbat Collins
                </motion.span>
                
                <motion.span 
                  className="block text-3xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent leading-tight"
                  style={{
                    background: `linear-gradient(45deg, #14B8A6 0%, #0D9488 50%, #0F766E 100%)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                  initial={{ opacity: 0, x: -50, scale: 0.8 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.5, ease: "backOut" }}
                >
                  Software & Blockchain Developer
                </motion.span>
              </h1>
              
              <motion.p 
                className="text-gray-300 text-xl md:text-2xl font-light leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                Turning ideas into scalable digital solutions.
              </motion.p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="space-y-6"
            >
              <motion.p 
                className="text-gray-400 text-lg leading-relaxed max-w-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                I am a results-driven freelancer with expertise in modern web technologies, 
                creating robust applications that deliver exceptional user experiences.
              </motion.p>

              {/* Enhanced Tech Stack with staggered animations */}
              <div className="space-y-4">
                <motion.h3 
                  className="text-gray-300 font-semibold text-sm uppercase tracking-wider"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                >
                  Technologies I Work With
                </motion.h3>
                <motion.div 
                  className="flex flex-wrap gap-3"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.1,
                        delayChildren: 1
                      }
                    }
                  }}
                >
                  {techStack.map((tech, index) => {
                    const IconComponent = tech.icon;
                    return (
                      <motion.span
                        key={tech.name}
                        variants={techStackVariants}
                        whileHover={{ 
                          scale: 1.1, 
                          rotate: [0, -2, 2, 0],
                          transition: { duration: 0.3 }
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="group border text-sm font-medium flex items-center transition-all duration-300 hover:shadow-lg cursor-pointer px-4 py-2 rounded-full"
                        style={{
                          backgroundColor: 'rgba(20, 184, 166, 0.1)',
                          borderColor: 'rgba(20, 184, 166, 0.3)',
                          color: '#14B8A6'
                        }}
                        onMouseEnter={(e) => {
                          const target = e.target as HTMLElement;
                          target.style.backgroundColor = 'rgba(20, 184, 166, 0.2)';
                          target.style.borderColor = 'rgba(20, 184, 166, 0.5)';
                        }}
                        onMouseLeave={(e) => {
                          const target = e.target as HTMLElement;
                          target.style.backgroundColor = 'rgba(20, 184, 166, 0.1)';
                          target.style.borderColor = 'rgba(20, 184, 166, 0.3)';
                        }}
                      >
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        >
                          <IconComponent className="mr-2 h-4 w-4 transition-colors" />
                        </motion.div>
                        {tech.name}
                      </motion.span>
                    );
                  })}
                </motion.div>
              </div>
            </motion.div>

            {/* Enhanced Buttons with improved animations */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-4"
            >
              <motion.button
                onClick={scrollToProjects}
                className="group text-white font-semibold px-8 py-4 rounded-full shadow-xl transition-all duration-300 transform cursor-pointer"
                style={{
                  background: `linear-gradient(45deg, #14B8A6 0%, #0D9488 100%)`,
                  boxShadow: '0 10px 30px rgba(20, 184, 166, 0.3)'
                }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 15px 40px rgba(20, 184, 166, 0.4)'
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
              >
                <motion.div className="flex items-center">
                  View My Work
                  <motion.div
                    className="ml-2"
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="h-5 w-5" />
                  </motion.div>
                </motion.div>
              </motion.button>
              
              <motion.a
                href="/JORBAT_COLLINS.docx"
                download="JORBAT_COLLINS.docx"
                className="group inline-flex items-center px-8 py-4 border-2 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-lg"
                style={{
                  borderColor: '#14B8A6',
                  color: '#14B8A6'
                }}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: '#14B8A6',
                  color: '#ffffff'
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3, duration: 0.6 }}
              >
                Download CV
                <motion.div
                  animate={{ y: [0, 2, 0] }}
                  transition={{ duration: 1.2, repeat: Infinity }}
                >
                  <Download className="ml-2 h-5 w-5" />
                </motion.div>
              </motion.a>
            </motion.div>

            {/* Enhanced Social Links with improved animations */}
            <motion.div
              variants={itemVariants}
              className="flex items-center space-x-6 pt-6"
            >
              <span className="text-gray-400 text-sm font-medium">Connect with me:</span>
              
              <motion.div 
                className="flex space-x-4"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 1.4
                    }
                  }
                }}
              >
                {[
                  { href: "https://github.com/JBcollo1", icon: Github, label: "GitHub" },
                  { href: "https://www.linkedin.com/in/collins-undefined-4b65782ba/", icon: Linkedin, label: "LinkedIn" },
                  { href: "mailto:jbcollins254@gmail.com?subject=Project%20Inquiry&body=Hi%20Collins,%0D%0AI%20came%20across%20your%20portfolio%20and%20would%20love%20to%20discuss%20a%20project%20with%20you.", icon: Mail, label: "Email" }
                ].map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.label !== "Email" ? "_blank" : undefined}
                    rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
                    className="text-gray-400 transition-all duration-300 p-2 rounded-full"
                    style={{
                      background: 'rgba(20, 184, 166, 0.1)'
                    }}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 }
                    }}
                    whileHover={{ 
                      scale: 1.2, 
                      y: -2,
                      color: '#14B8A6',
                      backgroundColor: 'rgba(20, 184, 166, 0.2)',
                      boxShadow: '0 5px 15px rgba(20, 184, 166, 0.3)'
                    }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.label}
                    title={social.label}
                  >
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                    >
                      <social.icon size={24} />
                    </motion.div>
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Enhanced Profile Image with more animations */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 100 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative group"
              {...floatingAnimation}
            >
              {/* Animated background rings with new colors */}
              <motion.div 
                className="absolute -inset-4 rounded-full blur-2xl opacity-40 animate-pulse group-hover:opacity-60 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(45deg, rgba(20, 184, 166, 0.2) 0%, rgba(44, 62, 80, 0.1) 50%, rgba(28, 43, 56, 0.15) 100%)`
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              
              <motion.div 
                className="absolute -inset-2 rounded-full blur-xl opacity-30"
                style={{
                  background: `linear-gradient(45deg, rgba(20, 184, 166, 0.3) 0%, rgba(44, 62, 80, 0.2) 100%)`
                }}
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Main image container with new colors */}
              <motion.div 
                className="relative rounded-full h-72 w-72 md:h-96 md:w-96 overflow-hidden border-4 shadow-2xl group-hover:shadow-2xl transition-all duration-500"
                style={{
                  background: `linear-gradient(135deg, #1C2B38 0%, #2C3E50 100%)`,
                  borderColor: '#2C3E50',
                  boxShadow: '0 25px 50px rgba(16, 30, 42, 0.5)'
                }}
                whileHover={{
                  borderColor: '#14B8A6',
                  boxShadow: '0 30px 60px rgba(20, 184, 166, 0.2)'
                }}
                animate={{
                  boxShadow: [
                    '0 25px 50px rgba(16, 30, 42, 0.5)',
                    '0 30px 60px rgba(20, 184, 166, 0.1)',
                    '0 25px 50px rgba(16, 30, 42, 0.5)'
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div 
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(135deg, rgba(20, 184, 166, 0.05) 0%, rgba(44, 62, 80, 0.05) 100%)`
                  }}
                />
                
                <motion.div 
                  className="h-full w-full flex items-center justify-center relative z-10"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.7 }}
                >
                  <img
                    src="/profile-picture.jpg"
                    alt="Jorbat Collins - Full Stack Developer"
                    className="object-cover h-full w-full rounded-full"
                  />
                </motion.div>
                
                {/* Enhanced overlay gradient */}
                <div 
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: `linear-gradient(to top, rgba(16, 30, 42, 0.2) 0%, transparent 50%, rgba(20, 184, 166, 0.08) 100%)`
                  }}
                />
              </motion.div>
              
              {/* Enhanced floating elements with new colors */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 rounded-full blur-sm opacity-60"
                style={{ backgroundColor: '#14B8A6' }}
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.2, 1],
                  opacity: [0.6, 0.8, 0.6]
                }}
                transition={{ 
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 3, repeat: Infinity },
                  opacity: { duration: 2, repeat: Infinity }
                }}
              />
              
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 rounded-full blur-sm opacity-40"
                style={{ backgroundColor: '#2C3E50' }}
                animate={{ 
                  rotate: -360,
                  scale: [1, 0.8, 1],
                  opacity: [0.4, 0.6, 0.4]
                }}
                transition={{ 
                  rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2.5, repeat: Infinity },
                  opacity: { duration: 1.8, repeat: Infinity }
                }}
              />
              
              <motion.div
                className="absolute top-1/2 -right-8 w-4 h-4 rounded-full blur-sm opacity-30"
                style={{ backgroundColor: '#14B8A6' }}
                animate={{ 
                  x: [0, 10, 0],
                  y: [0, -5, 0],
                  opacity: [0.3, 0.7, 0.3]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  delay: 1
                }}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced scroll indicator with improved animations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="flex justify-center mt-16"
        >
          <motion.div
            className="flex flex-col items-center space-y-2 cursor-pointer group"
            onClick={scrollToProjects}
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            whileHover={{ scale: 1.1 }}
          >
            <motion.span 
              className="text-gray-400 text-sm font-medium group-hover:transition-colors"
              style={{ color: '#14B8A6' }}
              whileHover={{ color: '#0D9488' }}
            >
              Scroll to explore
            </motion.span>
            <motion.div
              animate={{ 
                y: [0, 8, 0],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <ChevronDown 
                className="text-gray-400 group-hover:transition-colors" 
                style={{ color: '#14B8A6' }}
                size={28} 
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;