import { Link } from "react-router-dom";

const featuredProjects = [
  {
    title: "Studio Notes",
    description: "A calm note-taking space designed for focused creative work.",
  },
  {
    title: "Signal Lab",
    description: "A dashboard concept for visualizing ideas, tasks, and progress.",
  },
  {
    title: "Northstar",
    description: "A personal portfolio concept built around clarity and storytelling.",
  },
];

function Projects() {
  return (
    <main className="min-h-screen bg-[#05070b] text-slate-100">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-10">
        <section className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-2xl shadow-black/40 backdrop-blur sm:p-10 lg:p-12">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-slate-400">
                Selected work
              </p>
              <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
                Projects
              </h1>
            </div>
            <Link
              to="/"
              className="text-sm font-medium text-sky-300 transition hover:text-sky-200"
            >
              ← Back home
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {featuredProjects.map((project) => (
              <article
                key={project.title}
                className="rounded-[1.25rem] border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
              >
                <h2 className="mb-2 text-lg font-semibold">{project.title}</h2>
                <p className="text-sm leading-7 text-slate-300">{project.description}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

export default Projects;
