const skills = [
  {
    title: "Program & Delivery Management",
    items: [
      "Agile & Hybrid Delivery Models",
      "Scrum Ceremonies (Sprint Planning, Daily Stand-ups, Reviews, Retrospectives)",
      "Scrum, Kanban & Scrumban",
      "End-to-End Project Delivery",
      "Sprint Planning & Execution",
      "Risk & Dependency Management",
      "Stakeholder & Vendor Management",
      "Governance & Reporting",
      "Statement of Work (SOW)",
    ],
  },
  {
    title: "Banking & Regulatory Domain",
    items: [
      "Banking & Fintech Systems",
      "IRB Regulatory Programs",
      "Credit Risk & PD Models",
      "KYC & Compliance Platforms",
      "Regulatory Reporting",
      "UAT & Non-Functional Testing",
    ],
  },
  {
    title: "Technical & Architecture Awareness",
    items: [
      "Microservices Architecture",
      "Monolith to Microservices Migration",
      "API & Systems Integration",
      "Batch & File-Based Processing",
      "Logging & Observability",
    ],
  },
  {
    title: "Tools & Collaboration",
    items: [
      "Jira",
      "Confluence",
      "Trello",
      "Microsoft Excel (Tracking, Reporting, RAID Logs)",
      "SDLC & Release Management",
      "Cross-Functional Team Leadership",
      "Production Support & Go-Live Management",
      "Documentation & Knowledge Transfer",
    ],
  },
]

export default function Skills() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">Skills</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="bg-slate-900 border border-slate-800 rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold text-indigo-400 mb-4">
                {skill.title}
              </h3>
              <ul className="space-y-2 text-slate-300">
                {skill.items.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}