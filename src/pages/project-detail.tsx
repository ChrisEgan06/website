import { Link, useParams } from "react-router-dom";

/*
 * --------------------------------------------------------------------------
 * Project data
 * --------------------------------------------------------------------------
 *
 * Each project contains the information shown on its detail page.
 *
 * The `presentation` field is optional. Projects that have a Google Slides
 * presentation will display it automatically.
 */
const projects = {
  "gaussian-splat-esdf": {
    category: "PERCEPTION",
    title: "Gaussian Splat to ESDF Pipeline",
    description:
      "An end-to-end pipeline for converting metric Gaussian splats into Euclidean Signed Distance Fields for robotic applications.",
    tech: "Python · Nerfstudio · Open3D · NumPy",
    overview:
      "I built a pipeline that converts metrically scaled Gaussian-splat reconstructions into ESDFs that can be used by robotic systems for path planning, collision checking, and obstacle-clearance queries. The resulting ESDF was also integrated into an RRT path-planning system.",

    // Google Slides presentation for this project.
    presentation:
      "https://docs.google.com/presentation/d/e/2PACX-1vRIY92SAq4L5dgpn6jMRcZwwAhFbtvGkFAtDRQiqjmv4pOoUdlUUW_OTfB74QTf0Q7CDPBJrvkR-LAp/pubembed?start=false&loop=false&delayms=3000",
  },

  "esdf-collision-checking": {
    category: "ROBOTICS",
    title: "ESDF Implementations",
    description:
      "Collision checking using Euclidean Signed Distance Fields to evaluate obstacle clearance in reconstructed environments.",
    tech: "Python · Open3D · NumPy",
    overview:
      "Developed collision-checking methods using an ESDF representation to determine obstacle proximity and clearance for robotic systems.",

    // Google Slides presentation for this project.
    presentation:
      "https://docs.google.com/presentation/d/e/2PACX-1vRy-PILR0y6zbEfe7uRxogX8M9GhWSd8Cl5EkrvbHmKKiXlpXVP21mfI2vTsB2444AMTCANvOFbGpsL/pubembed?start=false&loop=false&delayms=3000",
  },

  "attitude-estimation-simulation": {
    category: "STATE ESTIMATION",
    title: "Attitude Estimation — Simulation",
    description:
      "A quaternion-based Multiplicative Extended Kalman Filter developed and tested in MATLAB and Simulink.",
    tech: "MATLAB · Simulink · MEKF · Quaternions",
    overview:
      "Developed and tested a quaternion-based Multiplicative Extended Kalman Filter for attitude estimation in simulation.",

    // Add a presentation URL here later if this project gets one.
    presentation: undefined,
  },

  "attitude-estimation-embedded": {
    category: "EMBEDDED SYSTEMS",
    title: "Attitude Estimation — Embedded",
    description:
      "An embedded implementation of the attitude estimator running on an STM32H7 and integrating multiple sensors.",
    tech: "C++ · STM32H7 · IMU · Magnetometer · Barometer",
    overview:
      "Integrated the attitude-estimation system into an embedded flight computer and implemented the estimator for real-time execution on an STM32H7.",

    // Add a presentation URL here later if this project gets one.
    presentation: undefined,
  },

  "allan-variance": {
    category: "SENSOR CHARACTERIZATION",
    title: "Allan Variance Analysis",
    description:
      "A Python-based analysis tool for characterizing IMU noise and estimating parameters used by the attitude estimator.",
    tech: "Python · NumPy · Matplotlib · IMU",
    overview:
      "Created a script for analyzing long-duration IMU recordings and characterizing the sensor noise used to inform the attitude-estimation system.",

    // Add a presentation URL here later if this project gets one.
    presentation: undefined,
  },
};

/*
 * --------------------------------------------------------------------------
 * Project detail page
 * --------------------------------------------------------------------------
 */

function ProjectDetail() {
  // Read the project slug from the current URL.
  const { slug } = useParams();

  /*
   * Look up the project associated with the URL.
   *
   * Example:
   * /projects/gaussian-splat-esdf
   *
   * gives us the "gaussian-splat-esdf" project.
   */
  const project = slug
    ? projects[slug as keyof typeof projects]
    : undefined;

  /*
   * If someone visits a project URL that doesn't exist,
   * show a simple error instead of breaking the page.
   */
  if (!project) {
    return (
      <main className="min-h-screen py-12 text-slate-100 page-fade">
        <div className="site-container">
          <h1 className="text-2xl text-white">
            Project not found
          </h1>

          <Link
            to="/projects"
            className="animated-link mt-4 inline-block text-sm"
          >
            ← back to projects
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen py-12 text-slate-100 page-fade">
      <div className="site-container">

        {/* ---------------------------------------------------------------- */}
        {/* Project header                                                    */}
        {/* ---------------------------------------------------------------- */}

        <header className="mt-12 border-b border-white/10 pb-10">

          {/* Project category */}
          <p className="pixel-font text-xs tracking-widest text-cyan-300/70">
            {project.category}
          </p>

          {/* Project title */}
          <h1 className="wallpoet-font mt-3 text-4xl text-white sm:text-5xl">
            {project.title}
          </h1>

          {/* Short project description */}
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            {project.description}
          </p>

          {/* Technologies used */}
          <p className="mt-6 font-mono text-xs text-slate-500">
            {project.tech}
          </p>
        </header>

        {/* ---------------------------------------------------------------- */}
        {/* Project overview                                                  */}
        {/* ---------------------------------------------------------------- */}

        <section className="mt-12 max-w-3xl">
          <h2 className="text-xl font-medium text-white">
            Overview
          </h2>

          <p className="mt-4 leading-8 text-slate-400">
            {project.overview}
          </p>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Presentation                                                      */}
        {/* ---------------------------------------------------------------- */}
        {/*
         * Only projects with a presentation URL will display this section.
         *
         * This means adding a presentation to another project later is
         * as simple as adding its URL to the project data above.
         */}

        {project.presentation && (
          <section className="mt-16 border-t border-white/10 pt-12">

            {/* Section heading */}
            <h2 className="text-xl font-medium text-white">
              Presentation
            </h2>

            {/* Short description */}
            <p className="mt-4 max-w-2xl leading-7 text-slate-400">
              A detailed walkthrough of the project, implementation,
              and results.
            </p>

            {/* ------------------------------------------------------------ */}
            {/* Responsive Google Slides embed                                */}
            {/* ------------------------------------------------------------ */}

            <div
              className="
                mt-8
                aspect-video
                w-full
                overflow-hidden
                border
                border-white/10
                bg-[#0b0d10]
              "
            >
              <iframe
                src={project.presentation}
                title={`${project.title} presentation`}
                className="h-full w-full"
                allowFullScreen
              />
            </div>
          </section>
        )}

        {/* ---------------------------------------------------------------- */}
        {/* Bottom spacing                                                    */}
        {/* ---------------------------------------------------------------- */}

        <div className="h-20" />
      </div>
    </main>
  );
}

export default ProjectDetail;