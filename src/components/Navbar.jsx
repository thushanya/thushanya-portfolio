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
    { label: "Hire Me", path: "/hire" },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 py-4 backdrop-blur-xl border-b border-white/5 bg-gradient-to-b from-black/80 via-[#0a0216]/60 to-transparent"
    >
      <div className="flex justify-between items-center w-full px-4 md:px-0 relative z-50">

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
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden relative w-10 h-10 flex items-center justify-center"
        >
          <motion.div className="flex flex-col gap-[5px]">
            <motion.span
              className="w-6 h-[2px] bg-violet-400"
              animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
            />
            <motion.span
              className="w-6 h-[2px] bg-violet-400"
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="w-6 h-[2px] bg-violet-400"
              animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
            />
          </motion.div>
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Click outside overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="fixed inset-0 bg-black/40 backdrop-blur-xl z-40"
            />

            {/* Glass Menu */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className="fixed top-24 left-1/2 -translate-x-1/2 w-[85%] max-w-sm z-50 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-xl"
            >
              <div className="flex flex-col items-center justify-center py-10 gap-6">

                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={closeMenu}
                    className="w-full flex justify-center"
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className={`px-6 py-3 rounded-xl text-center w-[80%] transition ${
                        isActive(item.path)
                          ? "bg-violet-500/20 text-violet-300"
                          : "text-gray-200 hover:bg-white/5"
                      }`}
                    >
                      {item.label}
                    </motion.div>
                  </Link>
                ))}

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}