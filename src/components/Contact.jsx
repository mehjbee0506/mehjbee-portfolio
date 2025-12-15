export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-6">Let’s Connect</h3>

        <p className="text-lg text-slate-400 mb-10">
          Open to leadership roles, technical consulting, and impactful projects.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <a href="/resume.pdf" target="_blank" className="bg-indigo-500 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-600">
            Download Resume
          </a>
          <a href="https://www.linkedin.com/in/mehjbee/" target="_blank" className="border border-slate-600 px-6 py-3 rounded-lg hover:bg-slate-800">
            LinkedIn
          </a>
          <a href="https://github.com" target="_blank" className="border border-slate-600 px-6 py-3 rounded-lg hover:bg-slate-800">
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
