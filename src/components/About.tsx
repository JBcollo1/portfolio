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
          <span className="text-burntorange uppercase tracking-widest text-sm font-semibold">
            Who I Am
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">About Me</h2>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="prose prose-invert prose-lg max-w-none text-gray-300"
        >
          <p className="mb-6">
            I’m a high-impact full-stack developer with a passion for transforming complex requirements into scalable, user-focused solutions. With deep expertise in modern JavaScript frameworks and backend technologies like React, Flask, Express.js, and blockchain platforms, I’ve delivered enterprise-grade applications that serve over 150+ users across multiple platforms.
          </p>
          <p className="mb-6">
            I’ve successfully implemented cutting-edge security protocols and optimized critical systems, achieving up to 60% reduction in latency and ensuring exceptional application performance and resilience. My development stack spans HTML, CSS, TypeScript, Python, PHP, and Web3 technologies—allowing me to build robust systems from the ground up.
          </p>
          <p>
            I thrive in both collaborative and autonomous roles, blending strong technical skills with leadership and a constant drive to innovate. Whether architecting backend systems, enhancing user interfaces, or scaling infrastructure, I build software that’s efficient, secure, and built to last.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            { stat: "99.7%", label: "Uptime on deployed applications" },
            { stat: "150+", label: "Users served across platforms" },
            { stat: "50%", label: "Reduction in system latency" },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-slate p-6 rounded-xl shadow-lg transition-all duration-300"
            >
              <h3 className="text-burntorange text-4xl font-extrabold mb-2">
                {item.stat}
              </h3>
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
