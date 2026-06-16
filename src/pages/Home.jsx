import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";
import { projects } from "../data/projects";

export default function Home() {
  const featured = projects.slice(0, 3);

  return (
    <PageWrapper>
      <div className="relative min-h-screen overflow-hidden pt-24 pb-28">

        {/* background blobs */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-500/20 blur-[120px]" />
          <div className="absolute top-40 left-10 h-[300px] w-[300px] rounded-full bg-fuchsia-500/10 blur-[100px]" />
          <div className="absolute bottom-0 right-10 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[120px]" />
        </div>

        {/* HERO */}
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <span className="inline-block text-xs tracking-[0.4em] uppercase text-violet-300">
              BSc (Hons) IT — Data Science @ SLIIT
            </span>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
              I’m{" "}
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-300 bg-clip-text text-transparent">
                Thushanya Jeyathasan
              </span>
            </h1>

            <p className="max-w-2xl text-lg text-violet-100/70 leading-relaxed">
              I build modern web experiences, data dashboards, and machine learning solutions with clean UI, scalable code, and production-ready delivery.
            </p>

            <div className="flex gap-4 flex-wrap">
              <a className="px-6 py-3 rounded-full bg-violet-500/20 text-violet-200 hover:bg-violet-500/30 transition">
                Browse projects
              </a>
              <a className="px-6 py-3 rounded-full border border-white/10 text-white hover:bg-white/5 transition">
                Hire me
              </a>
            </div>
          </motion.div>

          {/* floating info strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-12 flex flex-wrap gap-6 text-sm text-violet-200/70"
          >
            <span>⚡ GitHub available</span>
            <span>🧠 AI + Web focus</span>
            <span>⏱ 24h response</span>
            <span>🌍 Remote / Hybrid</span>
          </motion.div>

          {/* ABOUT FLOAT CARD (not boxed grid) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            className="mt-16 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-transparent blur-2xl rounded-3xl" />

            <div className="relative p-10 border border-white/10 rounded-3xl bg-white/5 backdrop-blur-xl">
              <div className="flex flex-col md:flex-row items-center gap-10">
                <img
                  src="https://github.com/thushanya.png"
                  className="h-40 w-40 rounded-full border border-violet-400/30"
                />

                <div>
                  <h2 className="text-2xl md:text-3xl font-semibold text-white">
                    Developer blending ML, data science & modern UI systems
                  </h2>
                  <p className="mt-4 text-violet-100/70">
                    Clean interfaces, scalable architecture, and performance-focused implementations across web and data systems.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* PROJECTS — STAGGERED / NON-UNIFORM */}
          <motion.section className="mt-24">
            <h2 className="text-xl uppercase tracking-[0.4em] text-violet-300 mb-10">
              Selected Work
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {featured.map((project, index) => (
                <motion.div
                  key={project.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 }}
                  className={`relative group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6
                    ${index === 0 ? "md:col-span-2" : ""}`}
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-violet-500/10 to-cyan-500/10" />

                  <div className="relative">
                    <p className="text-xs tracking-[0.3em] uppercase text-violet-300">
                      {project.category}
                    </p>

                    <h3 className="mt-4 text-2xl font-semibold text-white">
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
                      className="inline-block mt-6 text-sm text-white/80 hover:text-white"
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