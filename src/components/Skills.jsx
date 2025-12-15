const skills = [
  {
    title: "Backend & Architecture",
    items: ["Java", "Spring Boot", "Microservices", "REST APIs", "Hibernate", "JPA"],
  },
  {
    title: "Cloud & DevOps",
    items: ["AWS (EC2, S3, IAM)", "Docker", "CI/CD", "Cloud Architecture"],
  },
  {
    title: "Leadership & TPM",
    items: ["Agile / Scrum", "Project Planning", "Stakeholder Management", "Team Mentoring"],
  },
]

export default function Skills() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold mb-10">Skills</h3>

        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((skill, idx) => (
            <div key={idx} className="bg-slate-900 p-6 rounded-xl border border-slate-800">
              <h4 className="text-xl font-semibold mb-4 text-indigo-400">
                {skill.title}
              </h4>
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
