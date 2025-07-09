import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className="py-20 bg-deepgray text-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="mb-12 text-center">
            <span className="text-burntorange uppercase tracking-widest text-sm font-semibold">Who I Am</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3">About Me</h2>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="prose prose-invert prose-lg max-w-none text-gray-300"
          >
            <p className="mb-6">
              I’m a dedicated and results-oriented full-stack developer with a strong passion for building robust, user-centric digital solutions. With hands-on experience in Html, Css, JavaScript (ES6+), TypeScript, Python, PHP, and frameworks like React, Flask, and Express.js, I develop performant applications that seamlessly balance functionality and design.
            </p>
            <p className="mb-6">
              My work is driven by the desire to solve real-world problems through code—crafting experiences that are clean, efficient, and impactful. I translate complex challenges into elegant codebases that are scalable and maintainable.
            </p>
            <p>
              I thrive in both collaborative environments and independent roles, consistently learning and applying modern tools to improve performance, accessibility, and user satisfaction. I believe in building software that works hard—so people don’t have to.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              { stat: "99.7%", label: "Uptime on deployed applications" },
              { stat: "500+", label: "Weekly transactions processed" },
              { stat: "1,200+", label: "Active users on platforms" },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-slate p-6 rounded-xl shadow-lg transition-all duration-300"
              >
                <h3 className="text-burntorange text-4xl font-extrabold mb-2">{item.stat}</h3>
                <p className="text-gray-300">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
