import { motion } from "framer-motion"

export default function Intro() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl text-center"
      >
        {/* Headline */}
        <p className="text-indigo-400 font-semibold tracking-wide uppercase">
           Technical Project Manager | Banking & Fintech
        </p>

        <h1 className="mt-4 text-5xl md:text-6xl font-extrabold tracking-tight">
          Driving regulatory delivery.<br />
          Modernizing banking platforms.
        </h1>

        <p className="mt-6 text-lg text-slate-400 leading-relaxed">
          I lead complex banking and fintech programs as a Technical Project Manager, driving end-to-end delivery using Agile and hybrid methodologies while owning planning, execution, risk management, and stakeholder coordination across cross-functional teams.
        </p>

        {/* STATS */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          {[
            { value: "8+", label: "Years Experience" },
            { value: "13+", label: "Enterprise and Regulatory Programs Delivered" },
            { value: "8+", label: "Cross-Functional Teams Led" },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + idx * 0.2 }}
              className="rounded-xl border border-slate-800 bg-slate-900 p-6"
            >
              <div className="text-3xl font-bold text-indigo-400">
                {stat.value}
              </div>
              <div className="mt-2 text-slate-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-12 flex gap-4 justify-center"
        >
          <a
            href="#projects"
            className="bg-indigo-500 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-600 transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="border border-slate-600 px-6 py-3 rounded-lg font-semibold hover:bg-slate-800 transition"
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}