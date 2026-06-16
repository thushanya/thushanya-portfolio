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
    <div className="relative min-h-screen overflow-hidden bg-[#05010d] text-white">

      {/* ambient background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 right-1/3 h-[600px] w-[600px] bg-violet-600/10 blur-[160px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-fuchsia-600/10 blur-[160px]" />
      </div>

      <div className="relative z-10">

        {/* ================= HERO (PINNED APPLE STYLE) ================= */}
        <section className="min-h-screen flex items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl text-center"
          >
            <p className="text-xs tracking-[0.4em] uppercase text-violet-300">
              About / Overview
            </p>

            <h1 className="mt-8 text-5xl md:text-7xl font-bold leading-tight">
              Building systems where{" "}
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-300 bg-clip-text text-transparent">
                intelligence meets interface
              </span>
            </h1>

            <p className="mt-8 text-violet-100/70 text-lg max-w-3xl mx-auto">
              Production-grade AI systems, scalable backend architecture, and modern UI engineering blended into a single workflow.
            </p>
          </motion.div>
        </section>

        {/* ================= METRICS STRIP (FLOATING APPLE STYLE) ================= */}
        <section className="px-6 pb-32">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-x-12 gap-y-6 text-center"
          >
            {metrics.map((m, i) => (
              <div key={i} className="relative">
                <p className="text-xs uppercase tracking-[0.3em] text-violet-400/60">
                  {m.label}
                </p>
                <p className="text-lg mt-2 text-white">{m.value}</p>
              </div>
            ))}
          </motion.div>
        </section>

        {/* ================= PHILOSOPHY (SCROLL STORY) ================= */}
        <section className="min-h-screen flex items-center px-6">
          <div className="max-w-5xl mx-auto space-y-16">

            <h2 className="text-xs tracking-[0.4em] uppercase text-zinc-500">
              Philosophy
            </h2>

            {[
              "AI systems designed for real production environments, not just prototypes.",
              "Frontend systems optimized for clarity, motion, and scalability.",
              "Engineering discipline built on reproducible Git workflows.",
              "Execution-first mindset: design → build → deploy."
            ].map((text, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex gap-6"
              >
                <span className="text-violet-400 text-sm">0{i + 1}</span>
                <p className="text-2xl text-zinc-300 leading-relaxed">
                  {text}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================= EXPERIENCE (APPLE CLEAN FLOW) ================= */}
        <section className="min-h-screen flex items-center px-6">
          <div className="max-w-4xl mx-auto space-y-16">

            <h2 className="text-xs tracking-[0.4em] uppercase text-zinc-500">
              Experience
            </h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-violet-400 text-xs uppercase tracking-widest">
                Education
              </p>
              <h3 className="text-3xl mt-3 font-semibold">
                BSc (Hons) IT — Data Science
              </h3>
              <p className="text-zinc-500 mt-2">SLIIT • 2023 — Present</p>
              <p className="text-zinc-400 mt-4">
                Computational systems, data modeling, and machine learning pipelines.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-violet-400 text-xs uppercase tracking-widest">
                Current
              </p>
              <h3 className="text-3xl mt-3 font-semibold">
                Freelance Developer
              </h3>
              <p className="text-zinc-400 mt-4">
                Full-stack systems, ML tools, and scalable UI architectures delivered for real-world use.
              </p>
            </motion.div>

          </div>
        </section>

        {/* ================= SKILLS (FLOATING MATRIX) ================= */}
        <section className="min-h-screen flex items-center px-6">
          <div className="max-w-6xl mx-auto w-full">

            <h2 className="text-xs tracking-[0.4em] uppercase text-zinc-500 mb-16">
              Stack
            </h2>

            <div className="grid md:grid-cols-4 gap-12">
              {skillCategories.map((cat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-4">
                    {cat.title}
                  </h3>

                  <div className="space-y-3">
                    {cat.items.map((s) => (
                      <p key={s} className="text-zinc-300 hover:text-white transition">
                        {s}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </section>

        {/* ================= FINAL CTA (APPLE STYLE HERO END) ================= */}
        <section className="min-h-screen flex items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl"
          >
            <h2 className="text-4xl md:text-5xl font-bold">
              Let’s build something meaningful
            </h2>

            <p className="mt-6 text-zinc-400">
              AI systems, dashboards, and modern web platforms built for real-world impact.
            </p>

            <button
                onClick={() => navigate("/hire")}
                className="px-6 py-3 rounded-full border border-white/10 hover:bg-white/5 transition"
              >
                Start a project →
              </button>
          </motion.div>
        </section>

      </div>
    </div>
  );
}