import { motion } from "framer-motion";

export default function Hire() {
  const services = [
    { icon: "🚀", title: "Web Development", desc: "Modern React systems with scalable UI architecture." },
    { icon: "🤖", title: "Machine Learning", desc: "Prediction models, NLP systems, and AI integrations." },
    { icon: "📊", title: "Data Science", desc: "Dashboards, analytics, and decision intelligence." },
    { icon: "💼", title: "Consulting", desc: "System design, architecture, and optimization." },
    { icon: "🎨", title: "UI/UX", desc: "Clean, minimal, high-conversion interfaces." },
    { icon: "🔧", title: "Full Stack", desc: "End-to-end production-grade applications." }
  ];

  return (
    <div className="bg-[#05010d] text-white overflow-hidden">

      {/* background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[900px] w-[900px] bg-violet-500/10 blur-[220px]" />
        <div className="absolute bottom-0 right-0 h-[700px] w-[700px] bg-cyan-500/10 blur-[200px]" />
      </div>

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs tracking-[0.4em] uppercase text-violet-300/70"
        >
          Let’s collaborate
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 text-5xl md:text-7xl font-semibold leading-tight"
        >
          Build something{" "}
          <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-300 bg-clip-text text-transparent">
            meaningful
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 max-w-2xl text-violet-100/60"
        >
          I design and build scalable digital systems — from full-stack web apps to AI-powered platforms.
        </motion.p>
      </section>

      {/* SERVICES */}
      <section className="min-h-screen flex items-center px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="p-7 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="text-lg font-medium text-violet-200">{s.title}</h3>
                <p className="mt-2 text-sm text-violet-100/60">{s.desc}</p>
              </div>

              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 bg-violet-500/10 blur-2xl transition" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHAT I'M LOOKING FOR */}
      <section className="min-h-screen flex items-center px-6">
        <div className="max-w-5xl mx-auto w-full space-y-12">

          <h2 className="text-4xl md:text-5xl font-semibold text-center">
            What I’m looking for
          </h2>

          <p className="text-center text-violet-100/60 max-w-2xl mx-auto">
            I collaborate on meaningful, product-driven, and technically challenging ideas.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-10">

            {[
              {
                title: "Real-world problems",
                desc: "Projects that solve actual user or business problems."
              },
              {
                title: "AI + scalable systems",
                desc: "Combining machine learning with production-ready web applications."
              },
              {
                title: "Long-term collaboration",
                desc: "Startups, freelance partnerships, or ongoing product development."
              },
              {
                title: "Strong product thinking",
                desc: "Focus on UX, performance, and clean system design."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl"
              >
                <h3 className="text-lg font-medium text-violet-200">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-violet-100/60">
                  {item.desc}
                </p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* EMAIL CTA (ENHANCED) */}
<section className="min-h-screen flex items-center justify-center px-6 relative">

  {/* background glow banners */}
  <div className="absolute inset-0 -z-10 overflow-hidden">
    <div className="absolute top-10 left-10 w-[400px] h-[400px] bg-violet-600/20 blur-[120px]" />
    <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-fuchsia-600/20 blur-[140px]" />
  </div>

  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="relative max-w-4xl w-full text-center"
  >

    {/* main glowing card */}
    <div className="relative p-12 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden">

      {/* inner purple gradient banners */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-violet-500/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-fuchsia-500/20 blur-[120px]" />
      </div>

      <h2 className="text-4xl md:text-5xl font-semibold">
        Let’s build something meaningful together
      </h2>

      <p className="mt-6 text-violet-100/60">
        If you have an idea, I can help you design, build, and deploy it into a production-ready system.
      </p>

      {/* CTA buttons */}
      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="mailto:thushanyajeyathasan@gmail.com?subject=Project%20Inquiry&body=Hi%20Thushanya,%0A%0AI%20would%20like%20to%20discuss%20a%20project."
          className="px-8 py-3 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-medium shadow-lg shadow-violet-500/30"
        >
          Email Me
        </motion.a>

      </div>

    </div>
  </motion.div>
</section>

    </div>
  );
}