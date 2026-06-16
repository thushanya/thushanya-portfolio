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
    { icon: "🚀", title: "Web Development", desc: "Modern React, scalable UI systems.", price: "From $50/hr" },
    { icon: "🤖", title: "Machine Learning", desc: "Real-world prediction systems & NLP.", price: "Project based" },
    { icon: "📊", title: "Data Science", desc: "Dashboards, analytics, insights.", price: "Project based" },
    { icon: "💼", title: "Consulting", desc: "Architecture & system design guidance.", price: "From $75/hr" },
    { icon: "🎨", title: "UI/UX", desc: "Clean, modern interface design systems.", price: "From $40/hr" },
    { icon: "🔧", title: "Full Stack", desc: "End-to-end production systems.", price: "Custom quote" }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden pt-24 pb-24 bg-[#07020f] text-white">

      {/* background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 bg-violet-500/20 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] bg-cyan-500/10 blur-[120px]" />
        <div className="absolute top-40 left-10 h-[300px] w-[300px] bg-fuchsia-500/10 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <span className="text-xs tracking-[0.4em] uppercase text-violet-300">
            Let’s collaborate
          </span>

          <h1 className="mt-6 text-5xl md:text-6xl font-bold">
            Build something{" "}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-300 bg-clip-text text-transparent">
              impactful
            </span>
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-violet-100/70">
            Freelance development, ML systems, and data products built with production-grade quality and clean UI systems.
          </p>
        </motion.div>

        {/* SERVICES — FLOATING / STAGGER LAYOUT */}
        <div className="grid md:grid-cols-3 gap-6 mb-24">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`group relative p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl
                ${i % 2 === 0 ? "md:-translate-y-4" : ""}`}
            >
              <div className="text-3xl mb-3 group-hover:scale-110 transition">
                {s.icon}
              </div>

              <h3 className="text-lg font-semibold text-violet-200">
                {s.title}
              </h3>

              <p className="mt-2 text-sm text-violet-100/60">
                {s.desc}
              </p>

              <p className="mt-4 text-sm text-violet-300">
                {s.price}
              </p>

              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-violet-500/10 to-cyan-500/10" />
            </motion.div>
          ))}
        </div>

        {/* SPLIT SECTION */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* INFO PANEL */}
          <div className="relative">
            <div className="absolute inset-0 bg-violet-500/10 blur-3xl rounded-3xl" />

            <div className="relative p-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
              <h2 className="text-3xl font-bold">
                Ready to build?
              </h2>

              <p className="mt-4 text-violet-100/70">
                Share your idea and get a structured system design + implementation plan for your project.
              </p>

              <div className="mt-8 space-y-4 text-sm">
                <p><span className="text-violet-300">Email:</span> thushanyajeyathasan@gmail.com</p>
                <p><span className="text-violet-300">Phone:</span> +94 77 3254779</p>
                <p><span className="text-violet-300">Work:</span> Remote / Hybrid / Freelance</p>
              </div>
            </div>
          </div>

          {/* FORM — FLOATING GLASS */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
          >
            <div className="space-y-4">

              {[
                ["name", "Full Name *"],
                ["email", "Email *"],
                ["phone", "Phone"],
                ["company", "Company"]
              ].map(([key, label]) => (
                <div key={key}>
                  <label className="text-sm text-violet-200">{label}</label>
                  <input
                    name={key}
                    value={formData[key]}
                    onChange={handleChange}
                    className="w-full mt-2 px-4 py-3 rounded-xl bg-black/20 border border-white/10 text-white outline-none focus:border-violet-400/40"
                  />
                </div>
              ))}

              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="w-full mt-2 px-4 py-3 rounded-xl bg-black/20 border border-white/10 text-white"
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
                className="w-full mt-2 px-4 py-3 rounded-xl bg-black/20 border border-white/10 text-white resize-none"
              />

              <button
                type="submit"
                className="w-full py-3 rounded-full bg-violet-500/20 hover:bg-violet-500/30 transition"
              >
                Send Inquiry →
              </button>
            </div>
          </motion.form>
        </div>

      </div>
    </div>
  );
}