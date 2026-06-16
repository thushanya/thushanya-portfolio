import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../data/projects";

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const categories = [
    "All",
    "Data Science",
    "Machine Learning",
    "Web Development",
    "Mobile"
  ];

  const filtered =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <div className="relative min-h-screen pt-24 pb-28 bg-[#07020f] text-white overflow-hidden">

      {/* ================= BACKGROUND ================= */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[650px] w-[650px] bg-violet-500/15 blur-[160px]" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] bg-fuchsia-500/10 blur-[160px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 space-y-20">

        {/* ================= HERO ================= */}
        <motion.section
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-xs tracking-[0.4em] uppercase text-violet-300">
            Portfolio Archive
          </span>

          <h1 className="mt-6 text-5xl md:text-6xl font-bold leading-tight">
            Selected{" "}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-300 bg-clip-text text-transparent">
              systems & work
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-violet-100/70 leading-relaxed">
            A curated collection of machine learning systems, scalable web platforms, and data-driven applications built with production architecture.
          </p>
        </motion.section>

        {/* ================= FILTER (floating glass bar) ================= */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="sticky top-24 z-20 flex flex-wrap gap-2 p-2 w-fit rounded-full bg-white/5 border border-white/10 backdrop-blur-xl"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-5 py-2 text-sm rounded-full transition-all duration-300 relative ${
                filter === category
                  ? "bg-violet-500/30 text-white"
                  : "text-violet-200/70 hover:text-white hover:bg-white/5"
              }`}
            >
              {filter === category && (
                <span className="absolute inset-0 rounded-full bg-violet-500/10 blur-md" />
              )}
              <span className="relative">{category}</span>
            </button>
          ))}
        </motion.div>

        {/* ================= PROJECT GALLERY ================= */}
        <motion.section layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {filtered.map((project, index) => (
            <motion.div
              key={project.name}
              layout
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06 }}
              className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition
                ${index === 0 ? "md:col-span-2" : ""}`}
            >

              {/* hover glow layer */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-violet-500/10 to-cyan-500/10" />

              {/* content */}
              <div className="relative p-6 space-y-4">

                <p className="text-xs tracking-[0.3em] uppercase text-violet-300">
                  {project.category}
                </p>

                <h3 className="text-2xl font-semibold leading-snug">
                  {project.name}
                </h3>

                <p className="text-violet-100/70 leading-relaxed">
                  {project.description}
                </p>

                <p className="text-sm text-violet-300">
                  {project.tech}
                </p>

                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition"
                >
                  View source
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </a>

              </div>
            </motion.div>
          ))}

        </motion.section>

        {/* ================= EMPTY STATE ================= */}
        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 text-violet-100/50"
          >
            No projects in this category
          </motion.div>
        )}

      </div>
    </div>
  );
}