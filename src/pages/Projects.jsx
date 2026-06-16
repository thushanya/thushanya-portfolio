import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

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
    <div className="relative min-h-screen pt-24 pb-24 bg-[#07020f] text-white overflow-hidden">

      {/* ambient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[500px] bg-violet-500/15 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] bg-fuchsia-500/10 blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-xs tracking-[0.4em] uppercase text-violet-300">
            Portfolio Archive
          </span>

          <h1 className="mt-6 text-5xl md:text-6xl font-bold">
            Selected{" "}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-300 bg-clip-text text-transparent">
              work systems
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-violet-100/70">
            A curated collection of AI systems, web platforms, and data-driven applications built with production-grade architecture.
          </p>
        </motion.div>

        {/* FILTER — floating segmented bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-12 mb-16 flex flex-wrap gap-2 p-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl w-fit"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-5 py-2 text-sm rounded-full transition-all duration-300 ${
                filter === category
                  ? "bg-violet-500/30 text-white"
                  : "text-violet-200/70 hover:text-white hover:bg-white/5"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* PROJECT GRID — asymmetric gallery feel */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.map((project, index) => (
            <motion.div
              key={project.name}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06 }}
              className={`group ${
                index === 0 ? "md:col-span-2" : ""
              }`}
            >
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition">

                {/* hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-violet-500/10 to-cyan-500/10" />

                <div className="relative p-6">
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

                  <div className="mt-6">
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-white/70 hover:text-white transition"
                    >
                      View source →
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* EMPTY STATE */}
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