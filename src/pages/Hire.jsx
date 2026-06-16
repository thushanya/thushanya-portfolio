import { motion } from "framer-motion";
import { useState } from "react";

export default function Hire() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    message: "",
    budget: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = `New Project Inquiry from ${formData.name}`;
    const body = `Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company}
Project Type: ${formData.projectType}
Budget: ${formData.budget}

Message:
${formData.message}`;

    window.location.href =
      `mailto:thushanyajeyathasan@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

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

      {/* soft background field */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[900px] w-[900px] bg-violet-500/10 blur-[220px]" />
        <div className="absolute bottom-0 right-0 h-[700px] w-[700px] bg-cyan-500/10 blur-[200px]" />
      </div>

      {/* ================= HERO (CHAPTER 1) ================= */}
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
          Freelance development, machine learning systems, and scalable digital products designed with clarity and precision.
        </motion.p>
      </section>

      {/* ================= SERVICES (CHAPTER 2 - FLOATING GRID) ================= */}
      <section className="min-h-screen flex items-center px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
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

      {/* ================= STORY SECTION (CHAPTER 3) ================= */}
      <section className="min-h-screen flex items-center px-6">
        <div className="max-w-4xl mx-auto space-y-10">

          <h2 className="text-4xl md:text-5xl font-semibold">
            Are you interested? Let’s configure your next interface. 
          </h2>

          <p className="text-violet-100/60 leading-relaxed">
            Every system is designed with architecture-first thinking. Performance, scalability, and clarity are built before implementation begins.
          </p>

          <div className="text-sm text-violet-100/60 space-y-2">
            <p><span className="text-violet-300">Email:</span> thushanyajeyathasan@gmail.com</p>
            <p><span className="text-violet-300">Phone:</span> +94 77 3254779</p>
            <p><span className="text-violet-300">Availability:</span> Remote / Hybrid / Freelance</p>
          </div>

        </div>
      </section>

      {/* ================= FORM (CHAPTER 4 - FOCUS BLOCK) ================= */}
      <section className="min-h-screen flex items-center px-6">
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto w-full space-y-4"
        >

          <div className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl space-y-4">

            {["name", "email", "phone", "company"].map((key) => (
              <input
                key={key}
                name={key}
                value={formData[key]}
                onChange={handleChange}
                placeholder={key}
                className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10 outline-none focus:border-violet-400/40"
              />
            ))}

            <select
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10"
            >
              <option value="">Project Type</option>
              <option>Web Development</option>
              <option>Machine Learning</option>
              <option>Data Science</option>
              <option>Consulting</option>
            </select>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Describe your project..."
              className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10 resize-none"
            />

            <button className="w-full py-3 rounded-full bg-violet-500/20 hover:bg-violet-500/30 transition">
              Send Inquiry →
            </button>

          </div>
        </motion.form>
      </section>

    </div>
  );
}