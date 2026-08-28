/**
 * Experience page
 * Displays a chronological list of current work experiences
 */
const experiences = [
  {
    date: "AUG 2026 — PRESENT",
    role: "Research Assistant",
    organization: "FuTURE",
    description:
      "Working on robotics research involving perception, simulation, and autonomous systems.",
  },
  {
    date: "FEB 2026 — PRESENT",
    role: "Perception & Machine Learning Engineer",
    organization: "PeAR",
    description:
      "Working on perception and machine learning systems for autonomous robotics, with a focus on computer vision, 3D environments, and simulation.",
  },
  {
    date: "AUG 2025 — PRESENT",
    role: "GNC",
    organization: "HPRC",
    description:
      "Working on guidance, navigation, and control systems for high-power rocketry, including state estimation and embedded flight systems.",
  },
];

function Experience() {
  return (
    <main className="min-h-screen py-12 text-slate-100 page-fade">
      <div className="site-container">
        <header className="mb-14 border-b border-white/10 pb-8">
          <h1 className="wallpoet-font mt-3 text-4xl text-white sm:text-5xl">
            Experience
          </h1>
          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400">
            Things I'm currently working on.
          </p>
        </header>

        <section>
          {experiences.map((experience, index) => (
            <article
              key={`${experience.organization}-${experience.role}`}
              className={`grid gap-6 py-9 sm:grid-cols-[180px_1fr] ${
                index !== experiences.length - 1
                  ? "border-b border-white/8"
                  : ""
              }`}
            >
              <div>
                <p className="font-mono text-xs tracking-wide text-slate-500">
                  {experience.date}
                </p>
              </div>

              <div>
                <h2 className="text-xl font-medium text-white">
                  {experience.role}
                </h2>
                <p className="mt-1 text-sm text-cyan-300/80">
                  {experience.organization}
                </p>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">
                  {experience.description}
                </p>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}

export default Experience;