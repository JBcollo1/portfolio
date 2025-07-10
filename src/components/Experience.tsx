import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    title: "Freelance Full-Stack & Mobile Developer",
    company: "Remote",
    period: "Aug 2024 – Present",
    description: [
      "Collaborated with cross-functional developers to manage 3–4 concurrent client projects with consistent delivery timelines.",
      "Built and deployed 2 production-ready business applications, including an e-commerce platform and a logistics dashboard.",
      "Implemented lazy loading, code splitting, and caching strategies to improve performance by 40–50%.",
      "Created responsive UIs following accessibility and modern UX best practices across mobile and web.",
      "Technologies: React.js, React Native, Next.js, Redux, Tailwind CSS, TypeScript, Vite"
    ]
  },
  {
    title: "Independent Contractor",
    company: "SaifyPOS",
    period: "May 2024 – Jun 2024",
    description: [
      "Worked alongside a small agile team to debug and refactor legacy CodeIgniter school management systems.",
      "Resolved 5+ critical production bugs and addressed legacy compatibility issues affecting user operations.",
      "Developed new dynamic modules such as fee processing and attendance management based on client needs.",
      "Enhanced performance and security through optimized database queries and code clean-up.",
      "Technologies: PHP, CodeIgniter, MySQL, JavaScript, HTML/CSS, Bootstrap"
    ]
  },
  {
    title: "Software Engineering Intern",
    company: "Koduor and Company Ltd",
    period: "Mar 2024 – May 2024",
    description: [
      "Contributed to development of an open-source freelance logistics platform used by 10+ service providers.",
      "Built React Native components for the consumer app and integrated real-time data updates using Flask APIs.",
      "Collaborated on backend ERP modules used to coordinate 3 internal departments (HR, Dispatch, Admin).",
      "Helped develop ticketing and notification systems with uptime exceeding 95%.",
      "Technologies: React Native, Flask, PostgreSQL, Git, REST"
    ]
  },
  {
    title: "2nd Place – Avalanche Blockchain Competition",
    company: "Avalanche Team1 Africa",
    period: "May 2025",
    description: [
      "Secured 2nd place among top teams in the inaugural Avalanche Blockchain Hackathon in Nairobi.",
      "Worked closely with team members to design a decentralized app (dApp) on Avalanche C-Chain handling tokenized event access.",
      "Integrated frontend (React) with smart contracts (Solidity) and Web3 wallet interactions under time constraints.",
      "Focused on contract logic, gas optimization, and modular architecture to ensure scalability and security.",
      "Selected to pitch final prototype to Avalanche panel and gained recognition for innovation and clarity of execution.",
      "Technologies: Solidity, Avalanche C‑Chain, JavaScript, HTML/CSS, Web3 wallets, Hardhat"
    ]
  },
  {
    title: "Software Engineering Intern",
    company: "CyberTap",
    period: "Nov 2024 – Jan 2025",
    description: [
      "Collaborated with backend developers to build a secure authentication flow using JWTs and password hashing.",
      "Developed and documented RESTful APIs handling 50+ daily requests with 99.9% uptime.",
      "Wrote integration and unit tests, improving test coverage from 60% to over 90% using Jest and PyTest.",
      "Participated in regular code reviews, sprints, and vulnerability assessments.",
      "Technologies: Python, Flask, PostgreSQL, Jest, PyTest"
    ]
  },
  {
    title: "Frontend Developer",
    company: "Eco Eats",
    period: "Apr 2024 – Oct 2024",
    description: [
      "Built and maintained modular React components for a food delivery platform used by multiple restaurants.",
      "Led frontend refactoring efforts that reduced code duplication and load times by 20%.",
      "Collaborated on designing and developing an analytics dashboard, streamlining key performance metric analysis.",
      "Contributed to building a reusable component library, reducing development cycles by 35%.",
      "Technologies: React.js, Tailwind CSS, Chart.js, REST APIs"
    ]
  }
];


const certifications = [
  { title: "Software Engineering", issuer: "Moringa School", date: "2024" },
  { title: "Harvard University – CS50x", issuer: "FreeCodeCamp", date: "2024" },
  { title: "PHP & cPanel Deployment", issuer: "Coursera", date: "2024" },
  { title: "Advanced React Patterns", issuer: "FreeCodeCamp", date: "2022" },
  { title: "AWS Cloud Practitioner", issuer: "Amazon Web Services", date: "2023" },
  { title: "Advanced python programming", issuer: "python institute", date: "2022" }];

const softSkills = [
  "Communication",
  "Teamwork",
  "Problem-solving",
  "Adaptability",
  "Critical thinking",
  "Time management",
  "Empathy",
  "Leadership",
  
  "Decision making"
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-burntorange uppercase tracking-wider text-sm font-medium">My History</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Professional Experience</h2>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            A timeline of my professional journey and acquired certifications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Work Experience Section */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-8 border-b border-slate pb-2">Work History</h3>
            <motion.div
              ref={ref}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={containerVariants}
              className="space-y-12"
            >
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, backgroundColor: "#1e1e1e" }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="group relative pl-8 border-l-2 border-slate hover:border-burntorange hover:shadow-lg hover:shadow-burntorange/20 transition-all duration-300 ease-in-out rounded-md p-4"
                >
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-burntorange animate-pulse"></div>
                  <div>
                    <h4 className="text-xl font-semibold">{exp.title}</h4>
                    <div className="flex flex-col sm:flex-row sm:items-center text-sm mb-2 mt-1">
                      <span className="text-burntorange">{exp.company}</span>
                      <span className="hidden sm:block mx-2">•</span>
                      <span className="text-gray-400">{exp.period}</span>
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-gray-300 transition-opacity duration-300 group-hover:opacity-100 opacity-80">
                      {exp.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-sm md:text-base">{item}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Certifications and Soft Skills */}
          <div className="space-y-12">
            {/* Certifications */}
            <div>
              <h3 className="text-xl font-bold tracking-wide uppercase text-slate-200 mb-4">
                Certifications
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.03, backgroundColor: "#1e1e1e" }}
                    transition={{ duration: 0.3 }}
                    className="p-4 rounded-lg border border-slate-600 shadow-md hover:shadow-burntorange/30 bg-slate/30 backdrop-blur-md transition-all cursor-pointer"
                  >
                    <p className="text-md text-burntorange font-semibold">{cert.title}</p>
                    <p className="text-sm text-slate-300 mt-1">{cert.issuer}</p>
                    <p className="text-xs text-slate-400 mt-2">{cert.date}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div>
              <h3 className="text-xl font-bold tracking-wide uppercase text-slate-200 mb-4">
                Soft Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.08, backgroundColor: "#ff914d", color: "#0f172a" }}
                    transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
                    className="px-4 py-2 bg-slate border border-burntorange text-burntorange rounded-full text-sm cursor-pointer shadow-sm hover:shadow-burntorange/30 transition-all"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
