export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>

        <p className="text-lg text-slate-400 mb-6 leading-relaxed">
          I am open to Technical Project Manager, Project Manager, Scrum Master,
          Delivery Manager, Agile Lead, or similar roles within banking and
          fintech environments, including regulatory programs, platform
          modernization, and enterprise transformation initiatives.
        </p>

        {/* Availability */}
        <p className="text-md text-slate-400 mb-8">
          <span className="font-semibold text-slate-300">Availability:</span>{" "}
          Open to full-time, contract, or consulting opportunities
        </p>

        {/* Contact Details */}
        <div className="mb-10">
          <p className="text-slate-300">
            <span className="font-semibold">Email:</span>{" "}
            <a
              href="mailto:mehjbeecareers@gmail.com"
              className="text-indigo-400 hover:underline"
            >
              mehjbeecareers@gmail.com
            </a>
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-500 px-6 py-3 rounded-lg font-semibold text-white hover:bg-indigo-600 transition"
          >
            Download Resume
          </a>

          <a
            href="https://www.linkedin.com/in/mehjbee/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-slate-600 px-6 py-3 rounded-lg font-semibold text-slate-200 hover:bg-slate-800 transition"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-slate-600 px-6 py-3 rounded-lg font-semibold text-slate-200 hover:bg-slate-800 transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
