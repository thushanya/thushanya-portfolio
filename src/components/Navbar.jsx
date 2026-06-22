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
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-white/5 bg-black/40"
    >
      {/* TOP BAR */}
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" onClick={closeMenu}>
          <h1 className="text-violet-400 font-bold text-xl md:text-2xl">
            Thushanya Jeyathasan
          </h1>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          {navItems.map((item) => (
            <Link key={item.path} to={item.path}>
              <div
                className={`transition px-3 py-2 rounded-lg ${
                  isActive(item.path)
                    ? "text-violet-300 bg-violet-500/10"
                    : "text-zinc-300 hover:text-violet-300"
                }`}
              >
                {item.label}
              </div>
            </Link>
          ))}
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden w-10 h-10 flex items-center justify-center"
        >
          <div className="space-y-1.5">
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block w-6 h-[2px] bg-violet-400"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-[2px] bg-violet-400"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block w-6 h-[2px] bg-violet-400"
            />
          </div>
        </button>
      </div>

      {/* MOBILE OVERLAY */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="fixed inset-0 bg-black/50 backdrop-blur-md z-40"
            />

            {/* MENU PANEL */}
            <motion.div
              initial={{ opacity: 0, y: -30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="fixed top-24 left-1/2 -translate-x-1/2 w-[90%] max-w-sm z-50"
            >
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl overflow-hidden">

                <div className="flex flex-col py-6">

                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={closeMenu}
                      className="w-full"
                    >
                      <div
                        className={`px-6 py-4 text-center transition ${
                          isActive(item.path)
                            ? "text-violet-300 bg-violet-500/10"
                            : "text-zinc-200 hover:bg-white/5"
                        }`}
                      >
                        {item.label}
                      </div>
                    </Link>
                  ))}

                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}