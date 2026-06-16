import { motion } from "framer-motion";

const skillCategories = [
  { title: "Languages", items: ["Python", "Java", "C++", "JavaScript"] },
  { title: "Frontend", items: ["React", "Tailwind CSS", "Framer Motion"] },
  { title: "Backend", items: ["Node.js", "MongoDB", "SQL", "Express"] },
  { title: "AI/ML", items: ["Machine Learning", "TensorFlow", "Data Analysis"] }
];

const metrics = [
  { label: "GitHub", value: "6+ projects" },
  { label: "Status", value: "Freelance" },
  { label: "Focus", value: "AI + Web" },
  { label: "Response", value: "24h max" }
];

export default function About() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#05010d] text-white pt-32 pb-24">

      {/* ambient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-1/3 h-[600px] w-[600px] bg-violet-600/10 blur-[160px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-fuchsia-600/10 blur-[160px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 space-y-32">

        {/* HERO */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-xs tracking-[0.4em] uppercase text-violet-300">
              About / Overview
            </span>

            <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-tight">
              Building systems where{" "}
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-300 bg-clip-text text-transparent">
                intelligence meets interface
              </span>
            </h1>

            <p className="mt-8 max-w-3xl text-violet-100/70 text-lg leading-relaxed">
              I design and build production-grade digital systems combining machine learning, data pipelines, and modern frontend engineering.
            </p>
          </motion.div>

          {/* METRICS (floating line style, not cards) */}
          <div className="mt-14 flex flex-wrap gap-x-10 gap-y-6">
            {metrics.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-violet-400/60">
                  {m.label}
                </p>
                <p className="text-lg text-white mt-2">{m.value}</p>
                <div className="absolute -bottom-2 left-0 w-0 h-[1px] bg-violet-400/40 group-hover:w-full transition-all" />
              </motion.div>
            ))}
          </div>
        </section>

        {/* WHY ME — editorial blocks */}
        <section className="space-y-16">
          <h2 className="text-xs tracking-[0.4em] uppercase text-zinc-500">
            Philosophy
          </h2>

          <div className="space-y-12">
            {[
              "AI systems designed with real-world deployment constraints, not just prototypes.",
              "Frontend architectures optimized for clarity, scalability, and motion fluidity.",
              "Clean engineering practices with Git-based reproducibility.",
              "Direct execution mindset: design → build → deploy without friction."
            ].map((text, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex gap-6"
              >
                <span className="text-violet-400 text-sm">0{i + 1}</span>
                <p className="text-xl md:text-2xl text-zinc-300 leading-relaxed">
                  {text}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE — no timeline box, just flow */}
        <section className="space-y-12">
          <h2 className="text-xs tracking-[0.4em] uppercase text-zinc-500">
            Experience
          </h2>

          <div className="space-y-14">
            <div>
              <p className="text-xs text-violet-400 uppercase tracking-widest">
                Education
              </p>
              <h3 className="mt-2 text-3xl font-semibold">
                BSc (Hons) IT — Data Science
              </h3>
              <p className="mt-2 text-zinc-500">
                SLIIT
              </p>
              <p className="mt-4 text-zinc-400 leading-relaxed">
                Focused on computational systems, analytics modeling, and applied machine learning pipelines.
              </p>
            </div>

            <div>
              <p className="text-xs text-violet-400 uppercase tracking-widest">
                Current
              </p>
              <h3 className="mt-2 text-3xl font-semibold">
                Freelance Developer
              </h3>
              <p className="mt-4 text-zinc-400 leading-relaxed">
                Building full-stack systems, ML-driven tools, and interactive web applications with production-grade structure.
              </p>
            </div>
          </div>
        </section>

        {/* CORE SKILLS — floating columns (not grid cards) */}
        <section className="space-y-14">
          <h2 className="text-xs tracking-[0.4em] uppercase text-zinc-500">
            Stack
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {skillCategories.map((cat, i) => (
              <div key={i} className="space-y-4">
                <h3 className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                  {cat.title}
                </h3>

                <div className="space-y-3">
                  {cat.items.map((s) => (
                    <p
                      key={s}
                      className="text-zinc-300 hover:text-white transition"
                    >
                      • {s}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA — cinematic single block */}
        <section className="relative">
          <div className="absolute inset-0 bg-violet-500/10 blur-3xl rounded-3xl" />

          <div className="relative p-12 border border-white/10 rounded-3xl bg-white/5 backdrop-blur-xl">
            <h2 className="text-4xl font-bold">
              Let’s build something meaningful
            </h2>

            <p className="mt-4 text-zinc-400 max-w-2xl">
              If you need AI systems, dashboards, or modern web platforms, we can turn ideas into production-ready systems.
            </p>

            <a
              href="/hire"
              className="inline-flex mt-8 px-8 py-4 rounded-full bg-violet-500/20 hover:bg-violet-500/30 transition"
            >
              Start a project →
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}