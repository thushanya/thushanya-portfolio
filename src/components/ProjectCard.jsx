import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  const content = (
    <div className="h-full p-6 rounded-3xl glass-effect-hover border border-white/10 overflow-hidden relative transition-all duration-300 group">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/0 via-fuchsia-500/0 to-cyan-300/0 group-hover:from-violet-500/10 group-hover:via-fuchsia-500/10 group-hover:to-cyan-300/10 transition-all duration-300"></div>

      <div className="relative z-10 flex h-full flex-col justify-between">
        <div>
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <h2 className="text-white font-semibold text-lg transition-colors group-hover:text-violet-200">
                {project.name}
              </h2>
              <p className="text-violet-300 text-sm mt-1">{project.category}</p>
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-violet-400/10 text-violet-200 transition-all group-hover:bg-violet-400/20">
              <span className="text-lg">↗</span>
            </div>
          </div>

          <p className="text-gray-400 text-sm leading-relaxed mb-6">{project.description}</p>
          <p className="text-sm text-violet-200">{project.tech}</p>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-2 pt-5 border-t border-white/10">
          <span className="badge text-xs">{project.category}</span>
          {project.repo && (
            <span className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-violet-200 border border-violet-400/20">
              GitHub ready
            </span>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <motion.div whileHover={{ scale: 1.03, y: -6 }} whileTap={{ scale: 0.98 }} className="group h-full">
      {project.repo ? (
        <a href={project.repo} target="_blank" rel="noreferrer">
          {content}
        </a>
      ) : (
        content
      )}
    </motion.div>
  );
}