import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";
import { projects } from "../data/projects";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const wildfire = projects.find(
    (p) => p.name === "WildfireDB Analysis"
  );

  const others = projects.filter(
    (p) => p.name !== "WildfireDB Analysis"
  );

  const featured = [wildfire, ...others].filter(Boolean).slice(0, 3);

  const projectCount = projects.length;

  const badgeVariants = {
    float: {
      y: [0, -8, 0],
      transition: {
        duration: 2.8,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <PageWrapper>
      <div className="relative min-h-screen overflow-hidden pt-28 pb-32 bg-[#05010d] text-white">

        {/* PREMIUM BACKGROUND LAYERS */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(236,72,153,0.12),transparent_55%)]" />
          <div className="absolute inset-0 opacity-[0.06] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 space-y-36">

          {/* HERO */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="relative text-center space-y-8"
          >
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-72 bg-violet-500/30 blur-[120px] rounded-full" />

            <span className="text-xs tracking-[0.4em] uppercase text-violet-300/80">
              BSc IT • Data Science • SLIIT
            </span>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              I’m{" "}
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-300 bg-clip-text text-transparent">
                Thushanya Jeyathasan
              </span>
            </h1>

            <p className="max-w-2xl mx-auto text-lg text-violet-100/70 leading-relaxed">
              I build intelligent systems, scalable backend architectures, and modern UI experiences with a focus on production-ready engineering.
            </p>

            <div className="flex justify-center gap-4 pt-4">
              <button
                onClick={() => navigate("/projects")}
                className="px-6 py-3 rounded-full bg-violet-500/20 border border-white/10 hover:bg-violet-500/30 transition"
              >
                Explore Work →
              </button>

              <button
                onClick={() => navigate("/hire")}
                className="px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition"
              >
                Contact →
              </button>
            </div>
          </motion.section>

          {/* PROFILE CARD (DELAYED ENTRY) */}
          <motion.section
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="relative flex justify-center">

              {/* glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500/30 to-fuchsia-500/20 blur-3xl rounded-full scale-110" />

              {/* image */}
              <div className="relative">
                <img
                  src="https://github.com/thushanya.png"
                  className="h-60 w-60 md:h-72 md:w-72 rounded-3xl border border-white/10 shadow-2xl object-cover"
                />

                {/* BADGES */}
                <motion.div
                  variants={badgeVariants}
                  animate="float"
                  className="absolute -top-4 -left-6 px-3 py-1 text-xs rounded-full bg-violet-500/20 border border-violet-400/30 backdrop-blur-xl"
                >
                  Available to work
                </motion.div>

                <motion.div
                  variants={badgeVariants}
                  animate="float"
                  className="absolute top-10 -right-10 px-3 py-1 text-xs rounded-full bg-fuchsia-500/20 border border-fuchsia-400/30 backdrop-blur-xl"
                >
                  {projectCount}+ Projects
                </motion.div>

                <motion.div
                  variants={badgeVariants}
                  animate="float"
                  className="absolute bottom-6 -left-8 px-3 py-1 text-xs rounded-full bg-cyan-500/20 border border-cyan-400/30 backdrop-blur-xl"
                >
                  24h Response
                </motion.div>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-xs tracking-[0.4em] uppercase text-violet-300">
                Profile
              </p>

              <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
                AI + Software + UI Engineering Convergence
              </h2>

              <p className="text-violet-100/70 leading-relaxed">
                I specialize in full-stack systems, machine learning pipelines, and UI architecture designed for clarity, performance, and scale.
              </p>

              <div className="flex flex-wrap gap-3 text-sm text-violet-200/70">
                <span>⚡ Full Stack Dev</span>
                <span>🧠 ML Systems</span>
                <span>🎨 UI Engineering</span>
              </div>
            </div>
          </motion.section>

          {/* IDENTITY STRIP */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-4 text-center"
          >
            {[
              ["Role", "AI / Full Stack"],
              ["Focus", "Scalable Systems"],
              ["Status", "Available"],
              ["Response", "24h"]
            ].map(([k, v], i) => (
              <div
                key={i}
                className="p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl"
              >
                <p className="text-xs text-violet-300 uppercase tracking-widest">
                  {k}
                </p>
                <p className="mt-2 text-white/80">{v}</p>
              </div>
            ))}
          </motion.div>

          {/* OVERVIEW */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-transparent to-fuchsia-500/10 blur-3xl rounded-3xl" />

            <div className="relative p-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
              <h2 className="text-3xl font-semibold">
                Building intelligent systems for real-world scale
              </h2>

              <p className="mt-4 text-violet-100/70 leading-relaxed">
                From ML pipelines to backend architecture and UI systems — I focus on engineering solutions that are clean, maintainable, and production-ready.
              </p>
            </div>
          </motion.section>

          {/* PROJECTS */}
          <motion.section>
            <h2 className="text-xs tracking-[0.4em] uppercase text-violet-300 mb-10">
              Selected Work
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {featured.map((project, i) => (
                <motion.div
                  key={project.name}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="group relative p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden transition"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-violet-500/10 to-cyan-500/10" />

                  <div className="relative space-y-3">
                    <p className="text-xs tracking-[0.3em] uppercase text-violet-300">
                      {project.category}
                    </p>

                    <h3 className="text-2xl font-semibold">
                      {project.name}
                    </h3>

                    <p className="text-violet-100/70">
                      {project.description}
                    </p>

                    <p className="text-sm text-violet-300">
                      {project.tech}
                    </p>

                    <a
                      href={project.repo}
                      className="inline-block mt-4 text-sm text-white/80 hover:text-white transition"
                    >
                      View Project →
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