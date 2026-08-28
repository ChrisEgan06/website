import { Link, useParams } from "react-router-dom";

/**
 * Project detail data
 * Each project includes its full description, tech stack, and optional presentation
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
    presentation: undefined,
  },
};

/**
 * Project detail page
 * Displays full project information, including overview and presentation if available
 */
function ProjectDetail() {
  const { slug } = useParams();
  const project = slug
    ? projects[slug as keyof typeof projects]
    : undefined;

  if (!project) {
    return (
      <main className="min-h-screen py-12 text-slate-100 page-fade">
        <div className="site-container">
          <h1 className="text-2xl text-white">Project not found</h1>
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
        <header className="mt-12 border-b border-white/10 pb-10">
          <p className="pixel-font text-xs tracking-widest text-cyan-300/70">
            {project.category}
          </p>
          <h1 className="wallpoet-font mt-3 text-4xl text-white sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            {project.description}
          </p>
          <p className="mt-6 font-mono text-xs text-slate-500">
            {project.tech}
          </p>
        </header>

        <section className="mt-12 max-w-3xl">
          <h2 className="text-xl font-medium text-white">Overview</h2>
          <p className="mt-4 leading-8 text-slate-400">
            {project.overview}
          </p>
        </section>

        {project.presentation && (
          <section className="mt-16 border-t border-white/10 pt-12">
            <h2 className="text-xl font-medium text-white">Presentation</h2>
            <p className="mt-4 max-w-2xl leading-7 text-slate-400">
              A detailed walkthrough of the project, implementation, and
              results.
            </p>
            <div className="mt-8 aspect-video w-full overflow-hidden border border-white/10 bg-[#0b0d10]">
              <iframe
                src={project.presentation}
                title={`${project.title} presentation`}
                className="h-full w-full"
                allowFullScreen
              />
            </div>
          </section>
        )}

        <div className="h-20" />
      </div>
    </main>
  );
}

export default ProjectDetail;