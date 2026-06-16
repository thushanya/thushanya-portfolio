import { motion } from "framer-motion";

const skills = [
  "Python", "Java", "C++", "React",
  "Node.js", "MongoDB", "SQL",
  "Power BI", "Machine Learning", "Git"
];

const skillCategories = [
  {
    title: "Languages",
    items: ["Python", "Java", "C++", "JavaScript"]
  },
  {
    title: "Frontend",
    items: ["React", "Tailwind CSS", "Framer Motion"]
  },
  {
    title: "Backend",
    items: ["Node.js", "MongoDB", "SQL", "Express"]
  },
  {
    title: "AI/ML",
    items: ["Machine Learning", "TensorFlow", "Data Analysis"]
  }
];

const metrics = [
  { label: "GitHub repos", value: "6+ projects" },
  { label: "Current status", value: "Freelance only" },
  { label: "Focus area", value: "AI + Web" },
  { label: "Response time", value: "24h max" }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.25
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55 }
  }
};

export default function About() {
  return (
    <div className="min-h-screen pt-24 pb-24 px-6 md:px-12 bg-[#08020f] text-white overflow-hidden">
      <div className="absolute inset-x-0 top-20 h-72 bg-gradient-to-b from-violet-500/10 to-transparent blur-3xl" />
      <div className="absolute left-0 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-fuchsia-500/10 blur-3xl" />
      <div className="absolute right-0 bottom-24 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="relative w-full">
        <motion.div initial={{ opacity: 0, y: -28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="grid gap-8 xl:grid-cols-[1.05fr_0.95fr] items-center mb-16">
          <div className="rounded-[2rem] border border-white/10 bg-[#090216]/80 p-10 shadow-glow-purple backdrop-blur-xl">
            <span className="inline-flex rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-violet-200">About</span>
            <h1 className="mt-6 text-5xl md:text-6xl font-bold text-white">Strong engineering mindset with a polished data and web portfolio.</h1>
            <p className="mt-4 max-w-3xl text-lg text-violet-100/80 leading-relaxed">
              I’m an IT undergraduate at SLIIT, building elegant software and AI systems. I combine machine learning, analytics, and modern frontend development to deliver projects that feel premium, responsive, and production-ready.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {metrics.map((metric) => (
                <div key={metric.label} className="rounded-3xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:border-violet-400/40 hover:bg-violet-500/10">
                  <p className="text-xs uppercase tracking-[0.3em] text-violet-300">{metric.label}</p>
                  <p className="mt-3 text-xl font-semibold text-white">{metric.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-[#0b0419]/90 p-10 shadow-glow-purple backdrop-blur-xl">
            <h2 className="text-3xl font-semibold text-white mb-6">Why work with me?</h2>
            <div className="space-y-4">
              {[
                "Focused on business-ready AI and fast user experiences.",
                "Prefer GitHub-backed source code and clear technical delivery.",
                "Deliver clean, responsive interfaces with modern design.",
                "Collaborative input and fast freelance availability."
              ].map((line) => (
                <div key={line} className="rounded-3xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:border-violet-400/40 hover:bg-violet-500/10">
                  <p className="text-violet-100/80">{line}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={containerVariants} className="grid gap-10 xl:grid-cols-[1.15fr_0.85fr] mb-16">
          <motion.div variants={itemVariants} className="rounded-[2rem] border border-white/10 bg-[#090216]/80 p-10 shadow-glow-purple backdrop-blur-xl">
            <h2 className="text-3xl font-semibold text-white mb-6">Education & Experience</h2>
            <div className="space-y-8">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-violet-300">Education</p>
                <h3 className="mt-4 text-2xl font-semibold text-white">BSc (Hons) IT — Data Science</h3>
                <p className="mt-3 text-violet-100/80">Sri Lanka Institute of Information Technology (SLIIT) — currently studying applied AI, analytics, and software engineering.</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-violet-300">Experience</p>
                <h3 className="mt-4 text-2xl font-semibold text-white">Freelance Developer</h3>
                <p className="mt-3 text-violet-100/80">Building web apps, ML solutions, and dashboards for clients looking for polished delivery and strong code quality.</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="rounded-[2rem] border border-white/10 bg-[#0b0419]/80 p-10 shadow-glow-purple backdrop-blur-xl">
            <h2 className="text-3xl font-semibold text-white mb-6">Core strengths</h2>
            <div className="grid gap-4">
              {[
                { title: "Data science", desc: "Cleaning data, modeling, and delivering insights with visuals." },
                { title: "Machine learning", desc: "Prediction systems, NLP, and model evaluation for real use cases." },
                { title: "Full stack", desc: "React frontends, Node backends, and GitHub-based delivery." }
              ].map((item) => (
                <div key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:border-violet-400/40 hover:bg-violet-500/10">
                  <p className="text-xs uppercase tracking-[0.3em] text-violet-300">{item.title}</p>
                  <p className="mt-3 text-violet-100/80">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={containerVariants} className="mb-16">
          <h2 className="text-3xl font-semibold text-white mb-10">Skills & tools</h2>
          <motion.div variants={containerVariants} className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {skillCategories.map((category, idx) => (
              <motion.div key={idx} variants={itemVariants} className="rounded-[2rem] border border-white/10 bg-[#090216]/80 p-8 shadow-glow-purple backdrop-blur-xl">
                <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-3">
                  {category.items.map((skill) => (
                    <span key={skill} className="badge">{skill}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="rounded-[2rem] border border-white/10 bg-[#090216]/80 p-10 shadow-glow-purple backdrop-blur-xl text-center">
          <p className="text-violet-300 uppercase tracking-[0.35em] text-sm">Work with me</p>
          <h2 className="mt-4 text-3xl font-semibold text-white">I’m ready to turn your next idea into a polished product.</h2>
          <p className="mt-4 text-violet-100/80 max-w-2xl">If you want a modern web experience backed by AI and strong GitHub source code, let’s connect on the Hire page.</p>
          <a href="/hire" className="btn-primary mt-8 inline-flex">Get in touch</a>
        </motion.div>
      </div>
    </div>
  );
}
