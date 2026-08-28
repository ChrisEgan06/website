// src/pages/home.tsx

import { Link } from "react-router-dom";
import { useState } from "react";
import headshot from "../assets/headshot.jpg";

/* -------------------------------------------------------------------------- */
/*                               PAGE CONTENT                                 */
/* -------------------------------------------------------------------------- */

const siteName = "Christopher Egan";
const siteSubtitle = "Computer Science & Robotics Engineering @ WPI";

const pastelNameColors = [
  "#8fdcff",
  "#c7b0ff",
  "#f8c8a8",
  "#bfe9cc",
  "#f7b6cf",
];

/* -------------------------------------------------------------------------- */
/*                              HOME COMPONENT                                */
/* -------------------------------------------------------------------------- */

function Home() {
  /* ------------------------------------------------------------------------ */
  /*                                  STATE                                   */
  /* ------------------------------------------------------------------------ */

  // Controls the subtle hover effect on the profile picture.
  const [isAvatarHovered, setIsAvatarHovered] = useState(false);

  // Stores the index of the name letter currently being hovered.
  const [hoveredLetterIndex, setHoveredLetterIndex] = useState<number | null>(
    null
  );

  // Keeps track of letters that have been clicked and animated away.
  const [fallenLetterIndexes, setFallenLetterIndexes] = useState<boolean[]>(
    () => Array(siteName.length).fill(false)
  );

  /* ------------------------------------------------------------------------ */
  /*                            DERIVED VALUES                                */
  /* ------------------------------------------------------------------------ */

  // Split the name into individual characters so each letter can be animated.
  const nameLetters = siteName.split("");

  /* ------------------------------------------------------------------------ */
  /*                            HELPER FUNCTIONS                              */
  /* ------------------------------------------------------------------------ */

  /**
   * Generates the final position of a letter after it is clicked.
   *
   * The calculation is based on the letter index, making the animation
   * deterministic rather than changing every time the component renders.
   */
  const getFlingOffset = (index: number) => {
    const angle = (index % 11) * 0.62 + (index % 3) * 0.35 + 0.15;
    const distance = 220 + ((index * 53) % 140);

    return {
      x: Math.cos(angle) * distance,
      y: Math.sin(angle) * distance - 40,
    };
  };

  /**
   * Marks a letter as fallen when it is clicked.
   */
  const handleLetterClick = (index: number) => {
    setFallenLetterIndexes((previous) => {
      const next = [...previous];
      next[index] = true;

      return next;
    });
  };

  /* ------------------------------------------------------------------------ */
  /*                                  RENDER                                  */
  /* ------------------------------------------------------------------------ */

  return (
    /*
     * The navbar is fixed and therefore does not affect this layout.
     *
     * min-h-screen makes this exactly one viewport tall.
     *
     * flex + items-center + justify-center puts the entire homepage
     * content group directly in the center of the screen.
     */
    <main className="flex min-h-screen items-center justify-center px-6 text-slate-100 page-fade sm:px-8 lg:px-10">

      {/* ------------------------------------------------------------------ */}
      {/*                         CENTERED CONTENT                            */}
      {/* ------------------------------------------------------------------ */}

      <div className="w-full max-w-3xl">

        {/* -------------------------------------------------------------- */}
        {/*                         PROFILE HEADER                          */}
        {/* -------------------------------------------------------------- */}

        {/*
         * The profile picture and name form one horizontal group.
         *
         * justify-center centers that entire group horizontally.
         */}
        <div className="flex items-center justify-center gap-5">

          {/* ------------------------------------------------------------ */}
          {/*                         PROFILE IMAGE                         */}
          {/* ------------------------------------------------------------ */}

          <div
            className="shrink-0"
            onMouseEnter={() => setIsAvatarHovered(true)}
            onMouseLeave={() => setIsAvatarHovered(false)}
          >
            <img
              src={headshot}
              alt="Christopher Egan"
              className="
                h-24
                w-24
                rounded-full
                object-cover
                ring-1
                ring-white/8
                sm:h-28
                sm:w-28
              "
              style={{
                // Smoothly animate the hover effect.
                transition: "transform 220ms ease, box-shadow 220ms ease",

                // Move the image slightly upward while hovered.
                transform: isAvatarHovered
                  ? "translateY(-3px)"
                  : undefined,

                // Add a subtle shadow while hovered.
                boxShadow: isAvatarHovered
                  ? "0 12px 36px rgba(7,10,14,0.65)"
                  : undefined,

                display: "block",
              }}
            />
          </div>

          {/* ------------------------------------------------------------ */}
          {/*                            NAME                                */}
          {/* ------------------------------------------------------------ */}

          <div className="text-left">
            <h1
              className="
                wallpoet-font
                text-4xl
                font-semibold
                tracking-[-0.03em]
                text-white
                sm:text-5xl
              "
            >
              {nameLetters.map((letter, index) => {
                /*
                 * Render spaces separately so they do not interfere
                 * with the individual letter animations.
                 */
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

                // Determine whether this letter has been clicked.
                const isFallen = fallenLetterIndexes[index];

                // Determine whether this letter is currently hovered.
                const isHovered = hoveredLetterIndex === index;

                // Calculate the letter's fling direction.
                const flingOffset = getFlingOffset(index);

                // Give each letter a repeating pastel color.
                const color =
                  pastelNameColors[index % pastelNameColors.length];

                return (
                  <span
                    key={`${letter}-${index}`}
                    onClick={() => handleLetterClick(index)}
                    onMouseEnter={() => setHoveredLetterIndex(index)}
                    onMouseLeave={() => setHoveredLetterIndex(null)}
                    className={`
                      mr-[0.04em]
                      inline-block
                      cursor-pointer
                      select-none
                      ${isFallen ? "name-letter-fling" : ""}
                    `}
                    style={{
                      // Smooth hover movement.
                      transition: "transform 240ms ease",

                      // Slightly stagger each falling letter.
                      animationDelay: isFallen
                        ? `${index * 20}ms`
                        : undefined,

                      // Lift the letter slightly on hover.
                      transform: isFallen
                        ? undefined
                        : isHovered
                          ? "translateY(-2px)"
                          : "translateY(0)",

                      // Apply the pastel letter color.
                      color,

                      // Hint to the browser that these properties animate.
                      willChange: "transform, opacity",

                      // Values consumed by the CSS fling animation.
                      ["--x" as string]: `${flingOffset.x}px`,
                      ["--y" as string]: `${flingOffset.y}px`,
                    }}
                  >
                    {letter}
                  </span>
                );
              })}
            </h1>

            {/* ---------------------------------------------------------- */}
            {/*                           SUBTITLE                           */}
            {/* ---------------------------------------------------------- */}

            <p
              className="
                pixel-font
                mt-3
                text-[0.9rem]
                font-medium
                tracking-wide
                text-slate-400
              "
            >
              {siteSubtitle}
            </p>
          </div>
        </div>

        {/* -------------------------------------------------------------- */}
        {/*                         INTRODUCTION                             */}
        {/* -------------------------------------------------------------- */}

        {/*
         * This paragraph sits underneath the profile header.
         *
         * mx-auto keeps the paragraph itself centered within the
         * maximum content width.
         */}
        <div className="mx-auto mt-10 max-w-[65ch] text-center">
          <p
            className="
              text-[1.05rem]
              font-light
              leading-8
              text-slate-300
              sm:text-lg
            "
          >
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

            <a
              href="mailto:christopher@example.com"
              className="animated-link"
            >
              contact
            </a>

            {" me."}
          </p>
        </div>
      </div>
    </main>
  );
}

export default Home;