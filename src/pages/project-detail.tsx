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
    video: undefined,
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
    video: undefined,
    presentation:
      "https://docs.google.com/presentation/d/e/2PACX-1vRy-PILR0y6zbEfe7uRxogX8M9GhWSd8Cl5EkrvbHmKKiXlpXVP21mfI2vTsB2444AMTCANvOFbGpsL/pubembed?start=false&loop=false&delayms=3000",
  },

  "pose-estimation-simulation": {
    category: "STATE ESTIMATION",
    title: "Pose Estimation — Simulation",
    description:
      "Quaternion-based multiplicative extended Kalman filter fusing multiple sensors for 6-DoF state estimation in autonomous rocket guidance simulation.",
    tech: "MATLAB · Simulink · MEKF · Quaternions",
    overview:
      "Developed and tested a quaternion-based multiplicative extended Kalman filter (QM-EKF) that fused dual IMUs, GPS, barometer, and magnetometer measurements to estimate full 6-DoF vehicle state for autonomous rocket guidance in MATLAB/Simulink flight simulation.",
    video: undefined,
    presentation: undefined,
  },

  "pose-estimation-embedded": {
    category: "EMBEDDED SYSTEMS",
    title: "Pose Estimation — Embedded",
    description:
      "Quaternion-based multiplicative extended Kalman filter implementation on STM32H7 for real-time 6-DoF attitude estimation and autonomous rocket guidance.",
    tech: "C++ · STM32H7 · IMU · Magnetometer · Barometer",
    overview:
      "Ported the QM-EKF to C++ on an STM32H7 microcontroller for a planned supersonic flight with an anticipated apogee of 10,000 feet. Implemented real-time sensor fusion and state estimation for autonomous rocket guidance using canards for stabilization.",
    video: "/projects/embedded-demo.mov",
    presentation: undefined,
  },

  "allan-variance": {
    category: "SENSOR CHARACTERIZATION",
    title: "Allan Variance Analysis",
    description:
      "C++ and Python tools for dual-IMU data acquisition and Allan variance analysis to characterize sensor noise for state estimation systems.",
    tech: "C++ · Python · NumPy · Matplotlib · STM32H7",
    overview:
      "Developed software to interface with two IMUs on an STM32H7 microcontroller and collect 7 hours of synchronized sensor data. Implemented Allan variance analysis to characterize IMU noise and estimate parameters for the QM-EKF noise matrix.",
    video: undefined,
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
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400 text-justify">
            {project.description}
          </p>
          <p className="mt-6 font-mono text-xs text-slate-500">
            {project.tech}
          </p>
        </header>

        <section className="mt-12 max-w-3xl">
          <h2 className="text-xl font-medium text-white">Overview</h2>
          <p className="mt-4 leading-8 text-slate-400 text-justify">
            {project.overview}
          </p>
        </section>

        {project.video && (
          <section className="mt-16 border-t border-white/10 pt-12">
            <h2 className="text-xl font-medium text-white">Demo</h2>
            <p className="mt-4 max-w-2xl leading-7 text-slate-400 text-justify">
              Live demonstration of the system in action.
            </p>
            <div className="mt-8 aspect-video w-full overflow-hidden border border-white/10 bg-[#0b0d10]">
              <video
                src={project.video}
                title={`${project.title} demo`}
                className="h-full w-full"
                controls
                autoPlay
                muted
                loop
              />
            </div>
          </section>
        )}

        {project.presentation && (
          <section className="mt-16 border-t border-white/10 pt-12">
            <h2 className="text-xl font-medium text-white">Presentation</h2>
            <p className="mt-4 max-w-2xl leading-7 text-slate-400 text-justify">
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