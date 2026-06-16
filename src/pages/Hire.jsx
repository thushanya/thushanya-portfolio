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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `New Project Inquiry from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCompany: ${formData.company}\nProject Type: ${formData.projectType}\nBudget: ${formData.budget}\n\nMessage:\n${formData.message}`;
    window.location.href = `mailto:thushanyajeyathasan@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const services = [
    { icon: "🚀", title: "Web Development", description: "Modern React, MERN stack, and responsive applications with clean UI.", price: "Starting $50/hr" },
    { icon: "🤖", title: "Machine Learning", description: "Prediction models, NLP, and smart systems built for real-world use.", price: "Project based" },
    { icon: "📊", title: "Data Science", description: "Analytics, dashboards, and actionable visual insights from your data.", price: "Project based" },
    { icon: "💼", title: "Consulting", description: "Architecture guidance, tech strategy, and delivery planning for teams.", price: "Starting $75/hr" },
    { icon: "🎨", title: "UI/UX Design", description: "Polished interfaces that feel premium and easy to use.", price: "Starting $40/hr" },
    { icon: "🔧", title: "Full Stack", description: "End-to-end development from frontend to backend and deployment.", price: "Custom quote" }
  ];

  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } } };
  const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

  return (
    <div className="min-h-screen pt-24 pb-24 relative overflow-hidden bg-[#07020f] text-white">
      <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-violet-500/15 to-transparent blur-3xl" />
      <div className="absolute top-20 left-0 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl" />
      <div className="absolute bottom-20 right-16 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative z-10 w-full">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-flex rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-violet-200">
            Let’s collaborate
          </span>
          <h1 className="section-title mt-6 mb-4">Latest works.</h1>
          <p className="text-lg text-gray-400 max-w-2xl mb-8">
            I’m available for freelance projects, startup collaborations, and product development with data science, machine learning, and full stack expertise.
          </p>
        </motion.div>

        <motion.div className="grid md:grid-cols-3 gap-6 mb-20" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {services.map((service, i) => (
            <motion.div key={i} variants={itemVariants} whileHover={{ y: -5 }} className="group">
              <div className="h-full p-6 rounded-[2rem] glass-effect-hover border border-white/10 transition-all duration-300">
                <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110">{service.icon}</div>
                <h3 className="text-xl font-semibold text-violet-200 mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{service.description}</p>
                <p className="text-violet-300 font-semibold text-sm">{service.price}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="grid md:grid-cols-2 gap-12 items-start" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="rounded-[2rem] border border-white/10 bg-[#090216]/90 p-10 shadow-glow-purple backdrop-blur-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to build?</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Tell me about your idea, and I’ll help turn it into a production-ready web app or data product with a strong visual polish.
            </p>
            <div className="space-y-4">
              <div>
                <p className="text-violet-300 font-semibold mb-1">Email</p>
                <p className="text-gray-300">thushanyajeyathasan@gmail.com</p>
              </div>
              <div>
                <p className="text-violet-300 font-semibold mb-1">Phone</p>
                <p className="text-gray-300">+94 77 3254779</p>
              </div>
              <div>
                <p className="text-violet-300 font-semibold mb-1">Availability</p>
                <p className="text-gray-300">Remote | Hybrid | On-site | Freelance | Short-term contracts</p>
              </div>
            </div>
          </div>

          <motion.form onSubmit={handleSubmit} className="glass-effect rounded-[2rem] p-8 border border-white/10" variants={itemVariants}>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-violet-200 mb-2">Full Name *</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Your name" className="input-field" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-violet-200 mb-2">Email *</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="your@email.com" className="input-field" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-violet-200 mb-2">Phone</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+94 77 XXXXXX" className="input-field" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-violet-200 mb-2">Company</label>
                <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Your company" className="input-field" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-violet-200 mb-2">Project Type *</label>
                <select name="projectType" value={formData.projectType} onChange={handleChange} required className="input-field">
                  <option value="">Select a project type</option>
                  <option value="web-development">Web Development</option>
                  <option value="machine-learning">Machine Learning</option>
                  <option value="data-science">Data Science</option>
                  <option value="consulting">Consulting</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-violet-200 mb-2">Budget Range</label>
                <select name="budget" value={formData.budget} onChange={handleChange} className="input-field">
                  <option value="">Select budget range</option>
                  <option value="under-1k">Under $1,000</option>
                  <option value="1k-5k">$1,000 - $5,000</option>
                  <option value="5k-10k">$5,000 - $10,000</option>
                  <option value="10k-25k">$10,000 - $25,000</option>
                  <option value="25k-plus">$25,000+</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-violet-200 mb-2">Tell me about your project *</label>
                <textarea name="message" value={formData.message} onChange={handleChange} required placeholder="Describe your project..." rows="5" className="input-field resize-none"></textarea>
              </div>

              <button type="submit" className="w-full btn-primary mt-4">
                Send inquiry
              </button>
            </div>
          </motion.form>
        </motion.div>

        <motion.div className="text-center mt-20 pt-12 border-t border-white/10" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <p className="text-gray-400 mb-6">Prefer a quick chat?</p>
          <a href="https://www.linkedin.com/in/thushanya-jeyathasan" className="btn-primary inline-block">
            Connect on LinkedIn
          </a>
        </motion.div>
      </div>
    </div>
  );
}
