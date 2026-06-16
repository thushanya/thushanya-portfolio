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

  const featured = projects.find(
    (p) => p.name === "Wildfire Analysis"
  );

  const filtered =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  const filteredWithoutFeatured = filtered.filter(
    (p) => p.name !== "Wildfire Analysis"
  );

  const gridItems = filteredWithoutFeatured.slice(0, 6);

  return (
    <div className="bg-[#07020f] text-white overflow-hidden">

      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[900px] w-[900px] bg-violet-500/10 blur-[220px]" />
        <div className="absolute bottom-0 right-0 h-[700px] w-[700px] bg-cyan-500/10 blur-[200px]" />
      </div>

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6 max-w-3xl"
        >
          <span className="text-xs tracking-[0.4em] uppercase text-violet-300/70">
            Portfolio Archive
          </span>

          <h1 className="text-5xl md:text-7xl font-semibold">
            Systems built for{" "}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-300 bg-clip-text text-transparent">
              scale & intelligence
            </span>
          </h1>

          <p className="text-violet-100/60">
            Machine learning, web systems, and data-driven applications.
          </p>
        </motion.div>
      </section>

      {/* FILTER */}
      <section className="flex justify-center pb-20 px-6">
        <div className="flex flex-wrap gap-2 p-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-5 py-2 text-sm rounded-full transition ${
                filter === category
                  ? "bg-violet-500/30 text-white"
                  : "text-violet-200/60 hover:text-white hover:bg-white/5"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* FEATURED */}
      {featured && (
        <section className="px-6 pb-20">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative group rounded-3xl p-[1px] bg-gradient-to-r from-violet-500/40 via-fuchsia-500/30 to-cyan-400/40"
            >
              <div className="relative rounded-3xl bg-white/5 backdrop-blur-2xl p-10 overflow-hidden shadow-2xl transition-all duration-500 group-hover:scale-[1.02]">

                <div className="absolute -top-20 -right-20 h-80 w-80 bg-violet-500/20 blur-3xl rounded-full" />
                <div className="absolute -bottom-20 -left-20 h-80 w-80 bg-cyan-500/10 blur-3xl rounded-full" />

                <p className="text-xs tracking-[0.3em] uppercase text-violet-300">
                  Featured System
                </p>

                <h2 className="mt-4 text-4xl font-semibold">
                  {featured.name}
                </h2>

                <p className="mt-4 text-violet-100/70 max-w-2xl">
                  {featured.description}
                </p>

                <p className="mt-6 text-sm text-violet-300">
                  {featured.tech}
                </p>

                <a
                  href={featured.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-8 text-white/80 hover:text-white transition"
                >
                  View Source →
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* ROAD / TIMELINE LAYOUT */}
      <section className="px-6 pb-32 relative">
        <div className="max-w-5xl mx-auto relative">

          {/* center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-white/10 transform -translate-x-1/2" />

          <div className="space-y-16">
            {gridItems.map((project, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={project.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className={`relative flex items-center ${
                    isLeft ? "justify-start" : "justify-end"
                  }`}
                >
                  {/* dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-violet-400 shadow-[0_0_20px_rgba(168,85,247,0.6)]" />

                  {/* card */}
                  <div className="w-full md:w-[45%] group relative p-[1px] rounded-3xl bg-gradient-to-r from-white/10 via-violet-500/10 to-white/5">

                    <div className="relative rounded-3xl bg-white/5 backdrop-blur-xl p-6 transition-all duration-300 hover:bg-white/10 hover:scale-[1.03]">

                      <p className="text-xs tracking-[0.3em] uppercase text-violet-300">
                        {project.category}
                      </p>

                      <h3 className="mt-3 text-xl font-semibold">
                        {project.name}
                      </h3>

                      <p className="mt-2 text-sm text-violet-100/60">
                        {project.description}
                      </p>

                      <p className="mt-3 text-xs text-violet-300">
                        {project.tech}
                      </p>

                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-block mt-4 text-sm text-white/70 hover:text-white transition"
                      >
                        View →
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
}