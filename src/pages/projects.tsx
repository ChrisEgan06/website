import { Link } from "react-router-dom";

/*
 * --------------------------------------------------------------------------
 * Project data
 * --------------------------------------------------------------------------
 *
 * Keeping project information in one array makes the page easy to update.
 * Adding or removing a project only requires changing this list.
 */
const projects = [
  {
    slug: "gaussian-splat-esdf",
    category: "PERCEPTION",
    title: "Gaussian Splat to ESDF Pipeline",
    description:
      "A pipeline for converting Gaussian-splat reconstructions into voxelized environments and ESDFs for robotic applications.",
    tech: "Python · Nerfstudio · Open3D · NumPy",
    image: "/projects/pipeline.jpg",

    /*
     * The pipeline image is a diagram rather than a photograph.
     * `contain` keeps the entire diagram visible instead of cropping it.
     */
    imageFit: "contain",
  },

  {
    slug: "esdf-collision-checking",
    category: "ROBOTICS",
    title: "ESDF Implementation",
    description:
      "Collision checking using Euclidean Signed Distance Fields to evaluate obstacle clearance in reconstructed environments.",
    tech: "Python · Open3D · NumPy",
    image: "/projects/esdf-collision.jpg",

    // Standard project image.
    imageFit: "cover",
  },

  {
    slug: "attitude-estimation-simulation",
    category: "STATE ESTIMATION",
    title: "Attitude Estimation — Simulation",
    description:
      "A quaternion-based Multiplicative Extended Kalman Filter developed and tested in MATLAB and Simulink.",
    tech: "MATLAB · Simulink · MEKF · Quaternions",
    image: "/projects/attitude-sim.jpg",

    // Standard project image.
    imageFit: "cover",
  },

  {
    slug: "attitude-estimation-embedded",
    category: "EMBEDDED SYSTEMS",
    title: "Attitude Estimation — Embedded",
    description:
      "An embedded implementation of the attitude estimator running on an STM32H7 and integrating multiple sensors.",
    tech: "C++ · STM32H7 · IMU · Magnetometer · Barometer",
    image: "/projects/attitude-embedded.jpg",

    // Standard project image.
    imageFit: "cover",
  },

  {
    slug: "allan-variance",
    category: "SENSOR CHARACTERIZATION",
    title: "Allan Variance Analysis",
    description:
      "A sensor-analysis script used to characterize IMU noise and estimate parameters for state estimation.",
    tech: "Python · NumPy · Matplotlib · IMU",
    image: "/projects/allan-variance.jpg",

    // Standard project image.
    imageFit: "cover",
  },
];

/*
 * --------------------------------------------------------------------------
 * Projects page
 * --------------------------------------------------------------------------
 */

function Projects() {
  return (
    <main className="min-h-screen py-12 text-slate-100 page-fade">
      <div className="site-container">

        {/* ---------------------------------------------------------------- */}
        {/* Page header                                                       */}
        {/* ---------------------------------------------------------------- */}

        <header className="mb-14 border-b border-white/10 pb-8">

          {/* Page title */}
          <h1 className="wallpoet-font mt-3 text-4xl text-white sm:text-5xl">
            Projects
          </h1>

          {/* Page description */}
          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400">
            Robotics, perception, and state estimation projects.
          </p>
        </header>

        {/* ---------------------------------------------------------------- */}
        {/* Project grid                                                      */}
        {/* ---------------------------------------------------------------- */}

        <div className="grid gap-x-8 gap-y-12 md:grid-cols-2">

          {projects.map((project) => (
            /*
             * The entire card is a Link.
             *
             * This means users can click anywhere on the card rather
             * than having to find a small "view project" link.
             */
            <Link
              key={project.slug}
              to={`/projects/${project.slug}`}
              className="group block"
            >
              {/* ---------------------------------------------------------- */}
              {/* Project card                                                 */}
              {/* ---------------------------------------------------------- */}

              <article
                className="
                  overflow-hidden
                  border
                  border-white/10
                  bg-white/[0.025]
                  transition-colors
                  duration-200
                  group-hover:border-white/20
                "
              >

                {/* -------------------------------------------------------- */}
                {/* Project image                                               */}
                {/* -------------------------------------------------------- */}

                <div
                  className="
                    aspect-[16/9]
                    overflow-hidden
                    bg-[#0b0d10]
                  "
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`
                      h-full
                      w-full
                      transition
                      duration-500
                      group-hover:scale-[1.02]
                      ${
                        project.imageFit === "contain"
                          ? "object-contain"
                          : "object-cover"
                      }
                    `}
                  />
                </div>

                {/* -------------------------------------------------------- */}
                {/* Project information                                         */}
                {/* -------------------------------------------------------- */}

                <div className="p-5">

                  {/* Project category */}
                  <p className="pixel-font text-[10px] tracking-widest text-cyan-300/70">
                    {project.category}
                  </p>

                  {/* Project title */}
                  <h2 className="mt-2 text-xl font-medium text-white">
                    {project.title}
                  </h2>

                  {/* Project description */}
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <p className="mt-5 font-mono text-[11px] text-slate-600">
                    {project.tech}
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Projects;