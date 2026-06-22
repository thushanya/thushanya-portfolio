import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

export default function Footer() {
  const location = useLocation();
  const isHirePage = location.pathname === "/hire";

  return (
    <footer className="w-full border-t border-white/10 bg-[#05010d]">

      {/* CTA SECTION */}
      {!isHirePage && (
        <div className="w-full px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative w-full max-w-7xl mx-auto rounded-3xl p-[1px] bg-gradient-to-r from-violet-500/30 via-fuchsia-500/20 to-cyan-400/20"
          >
            <div className="w-full rounded-3xl bg-black/60 backdrop-blur-xl px-10 md:px-20 py-36 flex flex-col md:flex-row items-center justify-between gap-16">

              <div className="text-center md:text-left space-y-6">
                <h2 className="text-4xl md:text-6xl font-semibold text-white leading-tight">
                  Let’s build something impactful
                </h2>
                <p className="text-zinc-400 max-w-2xl text-base md:text-lg leading-relaxed">
                  AI systems, scalable web platforms, and data-driven products designed for real-world use.
                </p>
              </div>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                href="mailto:thushanyajeyathasan@gmail.com?subject=Project%20Inquiry"
                className="px-10 py-4 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-medium shadow-lg shadow-violet-500/20 whitespace-nowrap"
              >
                Get in Touch
              </motion.a>

            </div>
          </motion.div>
        </div>
      )}

      {/* BOTTOM BAR */}
<div className="border-t border-white/10 w-full">
  <div className="w-full px-6 py-6 flex items-center justify-between">

    {/* LEFT CORNER */}
    <p className="text-xs tracking-[0.3em] uppercase text-zinc-500">
      © 2026 Thushanya Jeyathasan
    </p>

    {/* RIGHT CORNER */}
    <div className="flex items-center gap-4">

      <a
        href="https://github.com/thushanya"
        target="_blank"
        className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition"
        aria-label="GitHub"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
          fill="currentColor" className="w-5 h-5 text-zinc-300 hover:text-white">
          <path d="M12 .5C5.7.5.9 5.4.9 11.8c0 5 3.2 9.2 7.7 10.7.6.1.8-.3.8-.6v-2.1c-3.1.7-3.7-1.3-3.7-1.3-.5-1.2-1.3-1.5-1.3-1.5-1.1-.8.1-.8.1-.8 1.2.1 1.9 1.3 1.9 1.3 1.1 1.9 2.9 1.4 3.6 1.1.1-.8.4-1.4.8-1.7-2.5-.3-5.2-1.3-5.2-5.7 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11 11 0 0 1 6 0C16.8 5.5 17.8 5.8 17.8 5.8c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.2 0 4.4-2.7 5.4-5.3 5.7.4.4.9 1.2.9 2.5v3.7c0 .3.2.7.8.6 4.5-1.5 7.7-5.7 7.7-10.7C23.1 5.4 18.3.5 12 .5z" />
        </svg>
      </a>

      <a
        href="https://www.linkedin.com/in/thushanya-jeyathasan"
        target="_blank"
        className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition"
        aria-label="LinkedIn"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
          fill="currentColor" className="w-5 h-5 text-zinc-300 hover:text-white">
          <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.95v5.66H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.62 0 4.29 2.38 4.29 5.48v6.26zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
        </svg>
      </a>

    </div>

  </div>
</div>

    </footer>
  );
}