import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-8 bg-gradient-to-t from-black via-charcoal to-deepgray"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Logo */}
          <motion.a
            href="#hero"
            whileHover={{ scale: 1.1 }}
            className="text-xl font-bold text-burntorange hover:text-white transition-colors"
          >
            DEV<span className="text-white">.FOLIO</span>
          </motion.a>

          {/* Copyright */}
          <div className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} | Designed & Built by Jorbat Collins
          </div>

          {/* Scroll to Top */}
          <motion.a
            href="#hero"
            whileHover={{ y: -3, rotate: -10 }}
            whileTap={{ scale: 0.9 }}
            className="inline-flex items-center justify-center w-10 h-10 bg-burntorange hover:bg-white text-white hover:text-burntorange rounded-full shadow-lg transition-all"
            title="Back to Top"
          >
            <ArrowUp size={20} />
          </motion.a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
