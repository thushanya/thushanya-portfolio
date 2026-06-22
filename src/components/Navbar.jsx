import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const navItems = [
    { label: "About", path: "/about" },
    { label: "Projects", path: "/projects" },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 py-4 backdrop-blur-xl border-b border-white/5 bg-gradient-to-b from-black/80 via-[#0a0216]/60 to-transparent"
    >
      <div className="flex justify-between items-center w-full px-4 md:px-0">
        
        {/* Logo */}
        <Link to="/" onClick={closeMenu}>
          <motion.h1
            whileHover={{ scale: 1.05 }}
            className="text-violet-400 font-bold text-2xl"
          >
            Thushanya Jeyathasan
          </motion.h1>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-2 text-sm md:text-base">
          {navItems.map((item) => (
            <Link key={item.path} to={item.path}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  isActive(item.path)
                    ? "text-violet-300 bg-violet-400/10"
                    : "text-gray-300 hover:text-violet-300"
                }`}
              >
                {item.label}
              </motion.div>
            </Link>
          ))}

          <Link to="/hire">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4 px-6 py-2 rounded-full bg-gradient-to-r from-violet-400 to-violet-600 text-white font-semibold shadow-lg shadow-violet-500/40"
            >
              Hire Me
            </motion.div>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
          >
            <div className="space-y-1.5">
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-t border-white/10"
          >
            <div className="flex flex-col p-4 gap-3">
              {navItems.map((item) => (
                <Link key={item.path} to={item.path} onClick={closeMenu}>
                  <div
                    className={`px-4 py-3 rounded-lg ${
                      isActive(item.path)
                        ? "text-violet-300 bg-violet-400/10"
                        : "text-gray-300"
                    }`}
                  >
                    {item.label}
                  </div>
                </Link>
              ))}

              <Link to="/hire" onClick={closeMenu}>
                <div className="mt-2 px-4 py-3 rounded-full text-center bg-gradient-to-r from-violet-400 to-violet-600 text-white font-semibold">
                  Hire Me
                </div>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}