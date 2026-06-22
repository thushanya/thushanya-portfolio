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

      {/* background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 right-1/3 h-[600px] w-[600px] bg-violet-600/10 blur-[160px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-fuchsia-600/10 blur-[160px]" />
      </div>

      <div className="relative z-10">

        {/* HERO */}
        <section className="min-h-screen flex items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl text-center space-y-6"
          >
            <p className="text-xs tracking-[0.4em] uppercase text-violet-300">
              About / Overview
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Building systems where{" "}
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-300 bg-clip-text text-transparent">
                intelligence meets interface
              </span>
            </h1>

            <p className="text-violet-100/70 text-lg max-w-3xl mx-auto">
              Production-grade AI systems, scalable backend architecture, and modern UI engineering.
            </p>
          </motion.div>
        </section>

        {/* SELF INTRO (UPDATED WITH CONTACT) */}
        <section className="px-6 py-28">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">

            {/* IMAGE */}
<motion.div
  initial={{ opacity: 0, x: -40 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  className="flex justify-center"
>
  <div className="relative text-center space-y-3">

    <div className="absolute inset-0 bg-violet-500/20 blur-3xl rounded-full scale-110" />

    <img
      src="https://github.com/thushanya.png"
      alt="profile"
      className="relative w-72 h-72 rounded-3xl object-cover border border-white/10 shadow-xl mx-auto"
    />

    {/* NAME UNDER IMAGE */}
    <p className="text-lg font-medium text-violet-200">
      Thushanya Jeyathasan
    </p>

  </div>
</motion.div>

            {/* TEXT */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-semibold">
                Who I am
              </h2>

              <p className="text-violet-100/70 text-lg leading-relaxed">
                I’m an IT undergraduate focused on building scalable digital systems that combine software engineering, AI, and modern UI design.
              </p>

              <p className="text-violet-100/60 leading-relaxed">
                I enjoy developing real-world applications involving full-stack systems, machine learning pipelines, and performance-driven interfaces.
              </p>

              <p className="text-violet-100/60 leading-relaxed">
                My interest also extends to system design, clean UI architecture, and exploring how AI can be integrated into practical products.
              </p>

              {/* CONTACT */}
              <div className="pt-4 space-y-2 text-sm text-violet-100/60">
                <p>
                  <span className="text-violet-300">Email:</span>{" "}
                  thushanyajeyathasan@gmail.com
                </p>
                <p>
                  <span className="text-violet-300">Phone:</span> +94 77 3254779
                </p>
              </div>
            </motion.div>

          </div>
        </section>

        {/* METRICS */}
        <section className="px-6 pb-24">
          <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-4">

            {metrics.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl text-center"
              >
                <p className="text-xs uppercase tracking-widest text-violet-400/70">
                  {m.label}
                </p>
                <p className="text-lg mt-2">{m.value}</p>
              </motion.div>
            ))}

          </div>
        </section>

        {/* PHILOSOPHY */}
        <section className="px-6 py-24">
          <div className="max-w-4xl mx-auto space-y-10">

            <h2 className="text-xs tracking-[0.4em] uppercase text-zinc-500">
              Philosophy
            </h2>

            <div className="space-y-6">
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
                  className="p-6 rounded-2xl border border-white/10 bg-white/5"
                >
                  <div className="flex gap-4">
                    <span className="text-violet-400">0{i + 1}</span>
                    <p className="text-zinc-300">{text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="px-6 py-24">
          <div className="max-w-4xl mx-auto space-y-10">

            <h2 className="text-xs tracking-[0.4em] uppercase text-zinc-500">
              Experience
            </h2>

            <div className="grid md:grid-cols-2 gap-6">

              <motion.div className="p-6 rounded-2xl border border-white/10 bg-white/5">
                <p className="text-violet-400 text-xs uppercase">Education</p>
                <h3 className="text-2xl mt-2">BSc IT — Data Science</h3>
                <p className="text-zinc-500 mt-1">SLIIT • 2023 — Present</p>
                <p className="text-zinc-400 mt-4">
                  ML systems, data modeling, and computational architectures.
                </p>
              </motion.div>

              <motion.div className="p-6 rounded-2xl border border-white/10 bg-white/5">
                <p className="text-violet-400 text-xs uppercase">Current</p>
                <h3 className="text-2xl mt-2">Freelance Developer</h3>
                <p className="text-zinc-400 mt-4">
                  Full-stack apps, ML tools, and scalable UI systems.
                </p>
              </motion.div>

            </div>

          </div>
        </section>

        {/* SKILLS */}
        <section className="px-6 py-24">
          <div className="max-w-6xl mx-auto">

            <h2 className="text-xs tracking-[0.4em] uppercase text-zinc-500 mb-10">
              Stack
            </h2>

            <div className="grid md:grid-cols-4 gap-6">
              {skillCategories.map((cat, i) => (
                <motion.div
                  key={i}
                  className="p-6 rounded-2xl border border-white/10 bg-white/5"
                >
                  <h3 className="text-sm uppercase tracking-widest text-violet-300 mb-4">
                    {cat.title}
                  </h3>

                  <div className="space-y-2">
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

      </div>
    </div>
  );
}