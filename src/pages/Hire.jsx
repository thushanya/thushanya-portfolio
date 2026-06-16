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
    <div className="relative min-h-screen bg-[#07020f] text-white overflow-hidden">

      {/* ================= BACKGROUND ================= */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[700px] w-[700px] bg-violet-500/15 blur-[180px]" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] bg-cyan-500/10 blur-[160px]" />
        <div className="absolute top-40 left-10 h-[400px] w-[400px] bg-fuchsia-500/10 blur-[160px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 space-y-32 pt-28 pb-28">

        {/* ================= HERO ================= */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <span className="text-xs tracking-[0.4em] uppercase text-violet-300">
            Let’s collaborate
          </span>

          <h1 className="mt-6 text-5xl md:text-6xl font-bold leading-tight">
            Build something{" "}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-300 bg-clip-text text-transparent">
              meaningful
            </span>
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-violet-100/70 leading-relaxed">
            Freelance development, machine learning systems, and scalable data products designed with production precision.
          </p>
        </motion.section>

        {/* ================= SERVICES (SPATIAL GRID) ================= */}
        <section className="grid md:grid-cols-3 gap-10">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`relative group`}
            >
              <div className={`p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition
                ${i % 2 === 0 ? "md:-translate-y-6" : ""}`}
              >

                <div className="text-3xl mb-4 group-hover:scale-110 transition">
                  {s.icon}
                </div>

                <h3 className="text-xl font-semibold text-violet-200">
                  {s.title}
                </h3>

                <p className="mt-3 text-violet-100/60 leading-relaxed">
                  {s.desc}
                </p>

              </div>

              {/* glow */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-violet-500/10 to-cyan-500/10 blur-xl" />
            </motion.div>
          ))}
        </section>

        {/* ================= INFO SPLIT ================= */}
        <section className="grid lg:grid-cols-2 gap-12 items-start">

          {/* LEFT INFO */}
          <div className="relative">
            <div className="absolute inset-0 bg-violet-500/10 blur-3xl rounded-3xl" />

            <div className="relative p-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
              <h2 className="text-3xl font-semibold">
                Structured execution. Clean delivery.
              </h2>

              <p className="mt-4 text-violet-100/70 leading-relaxed">
                Every project starts with system design clarity, ensuring scalable architecture before implementation begins.
              </p>

              <div className="mt-8 space-y-3 text-sm text-violet-100/70">
                <p><span className="text-violet-300">Email:</span> thushanyajeyathasan@gmail.com</p>
                <p><span className="text-violet-300">Phone:</span> +94 77 3254779</p>
                <p><span className="text-violet-300">Availability:</span> Remote / Hybrid / Freelance</p>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl space-y-5"
          >
            {["name", "email", "phone", "company"].map((key) => (
              <div key={key}>
                <label className="text-sm text-violet-200 capitalize">
                  {key}
                </label>

                <input
                  name={key}
                  value={formData[key]}
                  onChange={handleChange}
                  className="w-full mt-2 px-4 py-3 rounded-xl bg-black/20 border border-white/10 outline-none focus:border-violet-400/40"
                />
              </div>
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

            <button
              type="submit"
              className="w-full py-3 rounded-full bg-violet-500/20 hover:bg-violet-500/30 transition"
            >
              Send Inquiry →
            </button>
          </motion.form>
        </section>

      </div>
    </div>
  );
}