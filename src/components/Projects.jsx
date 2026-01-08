const projects = [
  {
    title: "IRB Tranche 3 Implementation",
    meta: "Bank of Ireland | Technical Project Manager | Oct 2024 – Jul 2025",
    description:
      "Led a regulatory-critical IRB Tranche 3 implementation for the BIPS pricing and risk platform used by approximately 1800 users across 6 business units. Owned end-to-end delivery including planning, risk management, stakeholder coordination, technical design finalization, and system testing. Governed integration with the ERS Rating Engine for real-time and bulk PD calculations.",
    metrics: [
      "Delivered within regulatory timelines with zero post-UAT issues",
      "Reduced delivery risk through early dependency mapping and phased releases",
      "Enabled accurate PD risk calculations supporting regulatory reporting",
    ],
  },
  {
    title: "Finergo Rollout – Monolith to Microservices Migration",
    meta: "Bank of Ireland | Technical Project Manager | Mar 2025 – Jul 2025",
    description:
      "Led the rollout of the Finergo KYC platform as part of a broader modernization initiative, including migration from a legacy monolithic middleware architecture to microservices. Defined target-state architecture, delivery roadmap, and risk mitigation strategy while coordinating cross-functional teams.",
    metrics: [
      "Executed monolith-to-microservices migration with no business disruption",
      "Improved system scalability and fault isolation for KYC workflows",
      "Reduced onboarding delays through streamlined API-based integrations",
    ],
  },
  {
    title: "BCS Upgrade – BEX Reporting Automation",
    meta: "Bank of Ireland | Technical Project Manager | Jan 2025 – Feb 2025",
    description:
      "Managed delivery of the BCS/BPC upgrade requiring large-scale updates to enterprise BEX reports. Led planning, execution, and risk management for macro-based automation across 200+ reports.",
    metrics: [
      "Automated updates for 200+ BEX reports, significantly reducing manual effort",
      "Mitigated upgrade risks and ensured uninterrupted reporting continuity",
      "Delivered upgrade within a compressed timeline",
    ],
  },
  {
    title: "IRB Tranche 1 Implementation & ERS Integration",
    meta: "Bank of Ireland | Team Lead | Jan 2023 – May 2024",
    description:
      "Acted as Team Lead for IRB Tranche 1 regulatory enhancements, supporting the rollout of new PD models and ERS integration. Bridged business and engineering teams and supported UAT and deployments.",
    metrics: [
      "Enabled real-time and bulk PD rating calculations",
      "Supported successful UAT completion and stable production release",
      "Established reusable integration patterns for future IRB tranches",
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">Projects</h2>

        <div className="space-y-10">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-slate-950 border border-slate-800 rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold text-indigo-400 mb-1">
                {project.title}
              </h3>

              <p className="text-sm text-slate-400 mb-3">{project.meta}</p>

              <p className="text-slate-300 leading-relaxed mb-4">
                {project.description}
              </p>

              <ul className="list-disc list-inside space-y-1 text-slate-400">
                {project.metrics.map((metric, i) => (
                  <li key={i}>{metric}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
