import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Data Science", "Machine Learning", "Web Development", "Mobile"];

  const filtered = filter === "All" ? projects : projects.filter((project) => project.category === filter);

  return (
    <div className="min-h-screen pt-24 pb-24 bg-[#07020f] text-white">
      <div className="relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-violet-500/15 to-transparent blur-3xl" />
        <div className="relative z-10 w-full">
          <motion.div initial={{ opacity: 0, y: -24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mb-12">
            <span className="inline-flex rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-violet-200">
              Portfolio collection
            </span>
            <h1 className="section-title mt-6 mb-4">Projects with GitHub source and polished impact.</h1>
            <p className="text-gray-400 text-lg max-w-2xl">
              Browse my most recent machine learning, data science, and web development work. Each project links directly to the source code.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-3 mb-12"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setFilter(category)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
                  filter === category
                    ? "bg-violet-400 text-black shadow-lg shadow-violet-400/40"
                    : "border border-violet-400/30 text-violet-200 hover:bg-violet-400/10"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          <motion.div className="grid gap-6 lg:grid-cols-3" layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            {filtered.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>

          {filtered.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-16">
              <p className="text-gray-400 text-lg">No projects found in this category.</p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
