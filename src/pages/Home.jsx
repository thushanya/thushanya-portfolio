import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";
import { projects } from "../data/projects";

export default function Home() {
  const featured = projects.slice(0, 3);

  return (
    <PageWrapper>
      <div className="min-h-screen pt-24 pb-28 relative overflow-y-auto snap-y snap-mandatory h-screen">
        <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-violet-500/15 to-transparent blur-3xl" />
        <div className="absolute left-0 top-36 h-56 w-56 rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute right-0 top-48 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative z-10 grid gap-16 xl:grid-cols-[1.05fr_0.95fr] items-center">
          <section id="hero" className="space-y-8 snap-start">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-violet-200"
            >
              BSc (Hons) IT — Data Science @ SLIIT
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-6xl md:text-7xl font-bold tracking-tight text-white leading-tight"
            >
              Thushanya — Developer & Data Scientist
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="max-w-4xl text-xl text-violet-100/80 leading-relaxed"
            >
              I build modern web experiences, data dashboards, and machine learning solutions. Explore projects, source code, and interactive examples below.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <a href="/projects" className="btn-primary inline-flex items-center justify-center w-full sm:w-auto">
                Browse projects
              </a>
              <a href="/hire" className="btn-secondary inline-flex items-center justify-center w-full sm:w-auto">
                Hire me
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
            >
              {[
                { label: "Open-source code", value: "GitHub available" },
                { label: "Focus", value: "AI + Web" },
                { label: "Response time", value: "24h max" },
                { label: "Scope", value: "Portfolio & Projects" }
              ].map((item) => (
                <div key={item.label} className="rounded-3xl border border-white/10 bg-white/5 p-5 text-sm text-violet-100/80 shadow-glow-purple">
                  <p className="uppercase tracking-[0.25em] text-[0.65rem] text-violet-300">{item.label}</p>
                  <p className="mt-3 text-lg font-semibold text-white">{item.value}</p>
                </div>
              ))}
            </motion.div>
          </section>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="rounded-[2rem] border border-white/10 bg-[#080216]/90 p-8 shadow-glow-purple backdrop-blur-xl"
          >
            <div className="flex flex-col items-center gap-6 text-center">
              <img
                src="https://github.com/thushanya.png"
                alt="Thushanya profile"
                className="h-40 w-40 rounded-full border border-violet-400/40 object-cover shadow-xl"
              />
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-violet-300">Hi, I'm Thushanya</p>
                <h2 className="mt-4 text-3xl font-semibold text-white">A developer who blends data science, ML, and modern interfaces.</h2>
              </div>
            </div>

            <div className="mt-10 grid gap-4">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm text-violet-300">Featured expertise</p>
                <p className="mt-3 text-white">Responsive React sites, ML pipelines, dashboard analytics, and GitHub-backed delivery.</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm text-violet-300">What I deliver</p>
                <p className="mt-3 text-white">Clean UI, strong component polish, fast interactions, and production-style code references.</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          id="work"
          className="mt-20 snap-start"
        >
          <h2 className="section-title mb-8">Selected work</h2>
          <div className="grid gap-6 lg:grid-cols-3">
            {featured.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="rounded-[2rem] border border-white/10 bg-[#090216]/90 p-6 shadow-glow-purple backdrop-blur-xl"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-violet-300">{project.category}</p>
                <h3 className="mt-4 text-2xl font-semibold text-white">{project.name}</h3>
                <p className="mt-3 text-gray-300 leading-relaxed">{project.description}</p>
                <p className="mt-4 text-sm text-violet-200">{project.tech}</p>
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex rounded-full bg-violet-400/10 px-4 py-2 text-sm font-semibold text-violet-200 transition hover:bg-violet-400/20"
                >
                  View GitHub
                </a>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </PageWrapper>
  );
}
