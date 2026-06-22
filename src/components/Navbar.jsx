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
        className="fixed inset-0 bg-black/60 backdrop-blur-md z-40"
      />

      {/* CENTERED GLASS MENU */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: -10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: -10 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="fixed inset-0 z-50 flex items-center justify-center px-6"
      >
        <div className="w-full max-w-xs rounded-3xl border border-white/10 bg-white/10 backdrop-blur-2xl shadow-2xl overflow-hidden">

          {/* TOP SPACING / HEADER */}
          <div className="pt-6 pb-2 text-center">
            <div className="w-10 h-1 bg-white/20 rounded-full mx-auto mb-4" />
            <p className="text-xs text-zinc-400">Navigation</p>
          </div>

          {/* LINKS */}
          <div className="flex flex-col py-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={closeMenu}
              >
                <div
                  className={`px-6 py-4 text-center transition-all duration-200 ${
                    isActive(item.path)
                      ? "text-violet-300 bg-violet-500/10"
                      : "text-zinc-200 hover:bg-white/10"
                  }`}
                >
                  {item.label}
                </div>
              </Link>
            ))}
          </div>

          {/* BOTTOM SPACING */}
          <div className="pb-5" />
        </div>
      </motion.div>
    </>
  )}
</AnimatePresence>