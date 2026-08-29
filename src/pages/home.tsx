import { Link } from "react-router-dom";
import { useState } from "react";
import headshot from "../assets/headshot.jpg";
import ContactLinks from "../components/contact-links";
import {
  SITE_CONFIG,
  PASTEL_COLORS,
  ANIMATION_TIMINGS,
} from "../config/constants";

/**
 * Home page component
 * Displays profile header with animated name, introduction, and contact information
 */
function Home() {
  const [isAvatarHovered, setIsAvatarHovered] = useState(false);
  const [hoveredLetterIndex, setHoveredLetterIndex] = useState<number | null>(
    null
  );
  const [fallenLetterIndexes, setFallenLetterIndexes] = useState<boolean[]>(
    () => Array(SITE_CONFIG.name.length).fill(false)
  );

  const nameLetters = SITE_CONFIG.name.split("");

  const getFlingOffset = (index: number) => {
    const angle = (index % 11) * 0.62 + (index % 3) * 0.35 + 0.15;
    const distance = 220 + ((index * 53) % 140);
    return {
      x: Math.cos(angle) * distance,
      y: Math.sin(angle) * distance - 40,
    };
  };

  const handleLetterClick = (index: number) => {
    setFallenLetterIndexes((previous) => {
      const next = [...previous];
      next[index] = true;
      return next;
    });
  };

  return (
    <main className="flex min-h-screen items-center justify-center px-6 text-slate-100 page-fade sm:px-8 lg:px-10">

      <div className="w-full max-w-3xl">
        {/* Profile Section */}
        <div className="flex items-center justify-center gap-5">
          {/* Profile Image */}
          <div
            className="shrink-0"
            onMouseEnter={() => setIsAvatarHovered(true)}
            onMouseLeave={() => setIsAvatarHovered(false)}
          >
            <img
              src={headshot}
              alt={SITE_CONFIG.name}
              className="h-24 w-24 rounded-full object-cover ring-1 ring-white/8 sm:h-28 sm:w-28"
              style={{
                transition: `transform ${ANIMATION_TIMINGS.AVATAR_HOVER}ms ease, box-shadow ${ANIMATION_TIMINGS.AVATAR_HOVER}ms ease`,
                transform: isAvatarHovered ? "translateY(-3px)" : undefined,
                boxShadow: isAvatarHovered
                  ? "0 12px 36px rgba(7,10,14,0.65)"
                  : undefined,
                display: "block",
              }}
            />
          </div>

          {/* Name and Subtitle */}
          <div className="text-left">
            <h1 className="wallpoet-font text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
              {nameLetters.map((letter, index) => {
                if (letter === " ") {
                  return (
                    <span
                      key={`space-${index}`}
                      aria-hidden="true"
                      style={{
                        display: "inline-block",
                        width: "0.45em",
                      }}
                    />
                  );
                }

                const isFallen = fallenLetterIndexes[index];
                const isHovered = hoveredLetterIndex === index;
                const flingOffset = getFlingOffset(index);
                const color = PASTEL_COLORS[index % PASTEL_COLORS.length];

                return (
                  <span
                    key={`${letter}-${index}`}
                    onClick={() => handleLetterClick(index)}
                    onMouseEnter={() => setHoveredLetterIndex(index)}
                    onMouseLeave={() => setHoveredLetterIndex(null)}
                    className={`mr-[0.04em] inline-block cursor-pointer select-none ${
                      isFallen ? "name-letter-fling" : ""
                    }`}
                    style={{
                      transition: `transform ${ANIMATION_TIMINGS.LETTER_HOVER}ms ease`,
                      animationDelay: isFallen
                        ? `${index * ANIMATION_TIMINGS.STAGGER_LETTER}ms`
                        : undefined,
                      transform: isFallen
                        ? undefined
                        : isHovered
                          ? "translateY(-2px)"
                          : "translateY(0)",
                      color,
                      willChange: "transform, opacity",
                      ["--x" as string]: `${flingOffset.x}px`,
                      ["--y" as string]: `${flingOffset.y}px`,
                    }}
                  >
                    {letter}
                  </span>
                );
              })}
            </h1>

            <p className="pixel-font mt-3 text-[0.9rem] font-medium tracking-wide text-slate-400">
              {SITE_CONFIG.subtitle}
            </p>
          </div>
        </div>

        {/* Introduction Section */}
        <div className="mx-auto mt-10 max-w-[65ch] text-center">
          <p className="text-[1.05rem] font-light leading-8 text-slate-300 text-justify sm:text-lg">
            {"Hi! I'm a junior at WPI studying Robotics Engineering & Computer Science. "}

            {"Take a look at some of my "}

            <Link to="/projects" className="animated-link">
              projects
            </Link>

            {", learn more about my "}

            <Link to="/experience" className="animated-link">
              experience
            </Link>

            {", or browse a few of my "}

            <Link to="/hobbies" className="animated-link">
              hobbies
            </Link>

            {" outside of engineering. "}

            {"If you'd like to know more, feel free to view my "}

            <a href="/resume.pdf" className="animated-link">
              resume
            </a>

            {" or "}

            <a href="mailto:eganchristopher06@gmail.com" className="animated-link">
              contact
            </a>

            {" me."}
          </p>

          {/* Contact Links */}
          <ContactLinks />
        </div>
      </div>
    </main>
  );
}

export default Home;