import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const skillIcons = {
  // Frontend
  "JavaScript (ES6+)": "/javascript.png",
  "React": "/React.png",
  "HTML5": "/Html.png",
  "TypeScript": "/Typescript.png",
  "CSS3": "/Css.png",
  "Tailwind CSS": "/Css.png",
  "Vite": "/vite.png",

  // Backend
  "Node.js": "/Node.png",
  "Python": "/python.png",
  "PHP": "/php.png",
  "Flask": "/flask.png",

  // Database
  "MongoDB": "/mongodb.png",
  "PostgreSQL": "/postgresql.png",
  "MySQL": "/mysql.png",
  "Supabase": "/supabase.png",

  // Tools & Others
  "Git & GitHub": "/github.png",
  "Docker": "/docker.png",
  "Postman": "/postman.png",
  "RESTful APIs": "/restful-api.png",
  "Agile/Scrum": "/Agile.png",
};

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "JavaScript (ES6+)", icon: skillIcons["JavaScript (ES6+)"] },
      { name: "TypeScript", icon: skillIcons["TypeScript"] },
      { name: "React", icon: skillIcons["React"] },
      { name: "HTML5", icon: skillIcons["HTML5"] },
      { name: "CSS3", icon: skillIcons["CSS3"] },
      { name: "Tailwind CSS", icon: skillIcons["Tailwind CSS"] },
      { name: "Vite", icon: skillIcons["Vite"] },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: skillIcons["Node.js"] },
      { name: "Python", icon: skillIcons["Python"] },
      { name: "PHP", icon: skillIcons["PHP"] },
      { name: "Flask", icon: skillIcons["Flask"] },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "MongoDB", icon: skillIcons["MongoDB"] },
      { name: "PostgreSQL", icon: skillIcons["PostgreSQL"] },
      { name: "MySQL", icon: skillIcons["MySQL"] },
      { name: "Supabase", icon: skillIcons["Supabase"] },
    ],
  },
  {
    category: "Tools & Others",
    items: [
      { name: "Git & GitHub", icon: skillIcons["Git & GitHub"] },
      { name: "Docker", icon: skillIcons["Docker"] },
      { name: "RESTful APIs", icon: skillIcons["RESTful APIs"] },
      { name: "Agile/Scrum", icon: skillIcons["Agile/Scrum"] },
      { name: "Postman", icon: skillIcons["Postman"] },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [sortedAZ, setSortedAZ] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...skills.map((s) => s.category)];

  const sortedSkills = skills.map((group) => ({
    ...group,
    items: [...group.items].sort((a, b) =>
      sortedAZ ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    ),
  }));

  const filteredSkills = activeCategory === "All"
    ? sortedSkills
    : sortedSkills.filter((group) => group.category === activeCategory);

  return (
    <section id="skills" className="py-20 bg-deepgray text-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-burntorange uppercase tracking-wider text-sm font-semibold">
            Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Technical Skills</h2>
          <p className="mt-4 text-gray-300 max-w-xl mx-auto">
            A blend of creativity, logic, and tools that I use to build clean, scalable solutions.
          </p>
        </motion.div>

        <div className="flex justify-center mb-8">
          <button
            onClick={() => setSortedAZ((prev) => !prev)}
            className="bg-burntorange hover:bg-orange-600 text-white text-sm px-4 py-2 rounded-md"
          >
            Sort {sortedAZ ? "Z-A" : "A-Z"}
          </button>
        </div>

        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1 rounded-full text-sm ${
                activeCategory === cat
                  ? "bg-burntorange text-white"
                  : "bg-gray-600 text-gray-200"
              } hover:bg-orange-700 transition`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2"
        >
          {filteredSkills.map((group, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-slate border border-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold text-burntorange mb-4">
                {group.category}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {group.items.map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.1 }}
                    className="flex items-center space-x-2 bg-[#2e2e2e] hover:bg-[#3a3a3a] transition-colors px-3 py-2 rounded-xl"
                  >
                    {item.icon && (
                      <motion.img
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        src={item.icon}
                        alt={`${item.name} icon`}
                        className="w-6 h-6 object-contain"
                      />
                    )}
                    <span className="text-sm">{item.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
