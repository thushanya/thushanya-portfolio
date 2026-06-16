import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 py-4 backdrop-blur-xl border-b border-white/5 bg-gradient-to-b from-black/80 via-[#0a0216]/60 to-transparent"
    >
      <div className="flex justify-between items-center w-full">
        <Link to="/">
          <motion.h1
            whileHover={{ scale: 1.05 }}
            className="text-violet-400 font-bold text-2xl"
          >
            Thushanya
          </motion.h1>
        </Link>

        <div className="flex items-center gap-1 md:gap-2 text-sm md:text-base">
          {[
            { label: 'Home', path: '/' },
            { label: 'Projects', path: '/projects' },
            { label: 'About', path: '/about' },
          ].map((item) => (
            <Link key={item.path} to={item.path}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  isActive(item.path)
                    ? 'text-violet-300 bg-violet-400/10'
                    : 'text-gray-300 hover:text-violet-300'
                }`}
              >
                {item.label}
              </motion.div>
            </Link>
          ))}

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/hire"
              className="ml-2 md:ml-4 px-4 md:px-6 py-2 rounded-full bg-gradient-to-r from-violet-400 to-violet-600 text-white font-semibold shadow-lg shadow-violet-500/40 hover:shadow-glow-purple transition-all"
            >
              Hire Me
            </Link>
          </motion.div>
        </div>
        {/* Floating section nav (anchors to home sections) */}
        <div className="hidden md:flex fixed right-6 top-1/2 transform -translate-y-1/2 z-40 flex-col gap-3">
          <a href="#hero" className="group">
            <motion.span
              whileHover={{ scale: 1.2 }}
              className="block w-3 h-3 rounded-full bg-violet-400/90 shadow-glow-purple"
            />
          </a>
          <a href="#work" className="group">
            <motion.span
              whileHover={{ scale: 1.2 }}
              className="block w-3 h-3 rounded-full bg-violet-300/80"
            />
          </a>
        </div>
      </div>
    </motion.nav>
  );
}