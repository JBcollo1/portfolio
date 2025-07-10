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
            Results-driven full-stack developer with 9+ months of professional experience delivering high-quality web applications and blockchain solutions. Successfully completed 10+ projects through internships and freelance engagements, impacting over 100 end users.
          </p>
          <p className="mb-6">
            Reduced application load times by 40–60% using performance optimization techniques, while enhancing system reliability and maintainability across multiple client projects. Skilled in designing secure, scalable, and efficient systems tailored to real-world demands.
          </p>
          <p>
            Proficient in modern technologies including React, Next.js, Flask, Express.js, Solidity, PostgreSQL, and Tailwind CSS. Adept at working both independently and collaboratively, delivering robust software across full development lifecycles.
          </p>
        </motion.div>


        <motion.div
          variants={itemVariants}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            { stat: "97%", label: "Uptime on deployed applications" },
            { stat: "15+", label: "Users served across platforms" },
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
