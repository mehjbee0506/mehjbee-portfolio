const projects = [
  {
    title: "Enterprise User Management System",
    desc: "Designed microservices architecture improving scalability and reducing response time by 35%.",
  },
  {
    title: "Cloud Migration to AWS",
    desc: "Led migration from on-prem to AWS with secure IAM and cost optimization.",
  },
  {
    title: "High-Volume Payment Platform",
    desc: "Built fault-tolerant APIs handling high transaction throughput.",
  },
  {
    title: "Agile Delivery Transformation",
    desc: "Improved sprint predictability and team velocity by 25%.",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold mb-10">Projects</h3>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-slate-950 p-6 rounded-xl border border-slate-800">
              <h4 className="text-xl font-semibold mb-3 text-indigo-400">
                {project.title}
              </h4>
              <p className="text-slate-300">{project.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
