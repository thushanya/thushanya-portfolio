import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";
import { projects } from "../data/projects";

export default function Home() {
  const featured = projects.slice(0, 3);

  return (
    <PageWrapper>
      <div className="relative min-h-screen overflow-hidden pt-24 pb-28 bg-[#05010d] text-white">

        {/* ================= BACKGROUND ================= */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[700px] w-[700px] bg-violet-600/15 blur-[160px]" />
          <div className="absolute top-40 left-10 h-[400px] w-[400px] bg-fuchsia-500/10 blur-[140px]" />
          <div className="absolute bottom-0 right-10 h-[500px] w-[500px] bg-cyan-500/10 blur-[160px]" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 space-y-32">

          {/* ================= HERO ================= */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <span className="inline-block text-xs tracking-[0.4em] uppercase text-violet-300">
              BSc (Hons) IT — Data Science @ SLIIT
            </span>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              I’m{" "}
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-300 bg-clip-text text-transparent">
                Thushanya Jeyathasan
              </span>
            </h1>

            <p className="max-w-2xl text-lg text-violet-100/70 leading-relaxed">
              I design modern web systems, data-driven dashboards, and machine learning solutions with production-grade architecture and refined UI systems.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a className="px-6 py-3 rounded-full bg-violet-500/20 hover:bg-violet-500/30 transition">
                Browse projects
              </a>
              <a className="px-6 py-3 rounded-full border border-white/10 hover:bg-white/5 transition">
                Hire me
              </a>
            </div>
          </motion.section>

          {/* ================= IDENTITY STRIP ================= */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12"
          >

            <div className="space-y-4 font-mono text-sm text-zinc-300">
              <p className="text-violet-400">SYSTEM_ACTIVE</p>
              <p>AI + SOFTWARE ENGINEER</p>
              <p>FULL STACK / DATA / ML</p>
              <p className="text-green-400">OPEN TO WORK</p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-semibold leading-snug">
                Hybrid engineer building scalable, intelligent systems.
              </h2>

              <p className="mt-6 text-zinc-400 leading-relaxed">
                I merge machine learning, backend engineering, and frontend design into unified production systems focused on clarity and performance.
              </p>
            </div>

          </motion.section>

          {/* ================= FLOATING INFO STRIP ================= */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-6 text-sm text-violet-200/70"
          >
            <span>⚡ GitHub available</span>
            <span>🧠 AI + Web focus</span>
            <span>⏱ 24h response</span>
            <span>🌍 Remote / Hybrid</span>
          </motion.div>

          {/* ================= ABOUT CARD ================= */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-transparent blur-3xl rounded-3xl" />

            <div className="relative p-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
              <div className="flex flex-col md:flex-row items-center gap-10">

                <img
                  src="https://github.com/thushanya.png"
                  className="h-40 w-40 rounded-full border border-violet-400/30"
                />

                <div>
                  <h2 className="text-2xl md:text-3xl font-semibold">
                    Data science + ML + UI engineering convergence
                  </h2>

                  <p className="mt-4 text-violet-100/70 leading-relaxed">
                    Clean interfaces, scalable architectures, and performance-driven implementations across modern software systems.
                  </p>
                </div>

              </div>
            </div>
          </motion.section>

          {/* ================= PROJECTS ================= */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xs tracking-[0.4em] uppercase text-violet-300 mb-10">
              Selected Work
            </h2>

            <div className="grid md:grid-cols-3 gap-6">

              {featured.map((project, index) => (
                <motion.div
                  key={project.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12 }}
                  className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:bg-white/10 transition
                    ${index === 0 ? "md:col-span-2" : ""}`}
                >

                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-violet-500/10 to-cyan-500/10" />

                  <div className="relative">
                    <p className="text-xs tracking-[0.3em] uppercase text-violet-300">
                      {project.category}
                    </p>

                    <h3 className="mt-4 text-2xl font-semibold">
                      {project.name}
                    </h3>

                    <p className="mt-3 text-violet-100/70">
                      {project.description}
                    </p>

                    <p className="mt-4 text-sm text-violet-300">
                      {project.tech}
                    </p>

                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block mt-6 text-sm text-white/80 hover:text-white transition"
                    >
                      View GitHub →
                    </a>
                  </div>

                </motion.div>
              ))}

            </div>
          </motion.section>

        </div>
      </div>
    </PageWrapper>
  );
}