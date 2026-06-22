// components/Footer.jsx
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

export default function Footer() {
  const location = useLocation();
  const isHirePage = location.pathname === "/hire";

  return (
    <footer className="w-full border-t border-white/10 bg-[#05010d]">

      {/* CTA SECTION (hidden on /hire) */}
      {!isHirePage && (
        <div className="max-w-6xl mx-auto px-6 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl p-[1px] bg-gradient-to-r from-violet-500/30 via-fuchsia-500/20 to-cyan-400/20"
          >
            <div className="rounded-2xl bg-black/60 backdrop-blur-xl px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">

              <div className="text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-semibold text-white">
                  Let’s build
                </h2>
                <p className="mt-3 text-zinc-400 text-sm md:text-base max-w-xl">
                  AI systems, dashboards, and modern web platforms built for real-world impact.
                </p>
              </div>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:thushanyajeyathasan@gmail.com?subject=Project%20Inquiry&body=Hi%20Thushanya,%0A%0AI%20would%20like%20to%20discuss%20a%20project."
                className="px-7 py-3 rounded-full border border-white/10 text-white hover:bg-white/5 transition"
             >
                Get in Touch
              </motion.a>

            </div>
          </motion.div>
        </div>
      )}

      {/* MINIMAL BOTTOM BAR (always shown) */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-xs md:text-sm text-zinc-500 tracking-widest uppercase">
            © 2026 THUSHANYA JEYATHASAN
          </p>

          <div className="flex items-center gap-3">

            <a
              href="https://github.com/thushanya"
              target="_blank"
              className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-zinc-300 hover:text-white hover:bg-white/10 transition"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/thushanya-jeyathasan"
              target="_blank"
              className="px-5 py-2 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 text-sm text-white"
            >
              LinkedIn
            </a>

          </div>
        </div>
      </div>

    </footer>
  );
}