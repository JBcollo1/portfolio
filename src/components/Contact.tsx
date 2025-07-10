import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Instagram, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const handleEmailClick = () => {
    window.location.href = `mailto:jbcollins254@gmail.com?subject=Hello%20collins&body=Hi%20collins,%0D%0AI%20would%20like%20to%20connect%20with%20you.`;
  };

  return (
    <section id="contact" className="relative py-20 bg-gradient-to-br from-deepgray to-black overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-burntorange rounded-full blur-3xl opacity-20 z-0 animate-pulse"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-burntorange uppercase tracking-wider text-sm font-medium">Let's Connect</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Contact Me</h2>
          <p className="mt-4 text-gray-300 max-w-xl mx-auto">
            Reach out to me via WhatsApp, email, or any of the platforms below.
          </p>
        </motion.div>

        <div className="flex flex-col items-center space-y-6">
          {/* Contact Information */}
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold mb-2">Jorbat Collins Kimaiyo</h3>
            <p className="text-gray-300">Email: jbcollins254@gmail.com</p>
            <p className="text-gray-300">WhatsApp: +254102256122</p>
          </div>

          {/* WhatsApp Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/254746604602"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-green-500 hover:bg-green-600 text-white shadow-lg">
                WhatsApp Me
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.a>
          </motion.div>

          {/* Email Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Button
              onClick={handleEmailClick}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-xl"
            >
              Send Me an Email
              <Mail className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>

          {/* Social Links */}
          <div className="flex space-x-6 pt-4">
            <motion.a
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/JBcollo1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-all"
              title="GitHub"
            >
              <Github size={28} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.linkedin.com/in/collins-undefined-4b65782ba/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-all"
              title="LinkedIn"
            >
              <Linkedin size={28} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:jbcollins254@gmail.com"
              className="text-zinc-400 hover:text-white transition-all"
              title="Email"
            >
              <Mail size={28} />
            </motion.a>
            {/* <motion.a
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-all"
              title="Instagram"
            >
              <Instagram size={28} />
            </motion.a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
