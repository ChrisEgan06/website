// src/pages/home.tsx
// This is the main landing page for the site.
// If you want to change the text, image, or name animation,
// start here and edit the constants near the top.
import { Link } from "react-router-dom";
import { useCallback, useState } from "react";
import headshot from "../assets/headshot.jpg";

// ---- Content you can tweak quickly ------------------------------------
// Keep the text here so it is easy to edit later without digging through JSX.
const siteName = "Christopher Egan";
const siteSubtitle = "Computer Science & Robotics Engineering @ WPI";
const pastelNameColors = ["#8fdcff", "#c7b0ff", "#f8c8a8", "#bfe9cc", "#f7b6cf"];

function Home() {
  // ---- State -----------------------------------------------------------
  // These control the small interactions on the page.
  const [isAvatarHovered, setIsAvatarHovered] = useState(false);
  const [hoveredLetterIndex, setHoveredLetterIndex] = useState<number | null>(null);
  const [fallenLetterIndexes, setFallenLetterIndexes] = useState<boolean[]>(() => Array(siteName.length).fill(false));

  const nameLetters = siteName.split("");

  // ---- Helper functions -----------------------------------------------
  // This creates a random-ish fling path for each letter when it is clicked.
  const getFlingOffset = (index: number) => {
    const angle = (index % 11) * 0.62 + (index % 3) * 0.35 + 0.15;
    const distance = 220 + ((index * 53) % 140);
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance - 40;

    return { x, y };
  };
  // ---- Event handler --------------------------------------------------
  // This is intentionally empty because the page is mostly static.
  const handleMove = useCallback(() => {
    // no-op; kept here so the page stays easy to expand later
  }, []);

  return (
    <main
      onMouseMove={handleMove}
      className="relative min-h-screen overflow-hidden px-6 py-6 text-slate-100 sm:px-8 lg:px-10 page-fade"
    >
      {/* ---- Main content column ---------------------------------------- */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-3xl flex-col justify-center pt-2 sm:pt-0">
        {/* ---- Top row: image + name + subtitle --------------------------- */}
        <div className="mb-5 flex items-center justify-start gap-4">
          {/* Profile image block */}
          <div
            onMouseEnter={() => setIsAvatarHovered(true)}
            onMouseLeave={() => setIsAvatarHovered(false)}
            style={{ position: "relative", display: "inline-block" }}
          >
            {/* Soft glow behind the avatar */}
            <div
              aria-hidden
              style={{
                position: "absolute",
                inset : "-8px",
                borderRadius: 999,
                filter: "blur(14px)",
                background: "radial-gradient(circle at 30% 20%, rgba(61,217,235,0.12), transparent 30%)",
                opacity: isAvatarHovered ? 1 : 0,
                transform: isAvatarHovered ? "translateY(-2px)" : "translateY(0)",
                transition: "opacity 240ms ease, transform 240ms ease",
                pointerEvents: "none",
              }}
            />

            {/* Headshot image. Swap this file later by replacing the import at the top. */}
            <img
              src={headshot}
              alt="Christopher Egan"
              className="h-24 w-24 rounded-full object-cover ring-1 ring-white/8 sm:h-28 sm:w-28"
              style={{
                transition: "transform 220ms ease, box-shadow 220ms ease",
                transform: isAvatarHovered ? "translateY(-3px)" : undefined,
                boxShadow: isAvatarHovered ? "0 12px 36px rgba(7,10,14,0.65)" : undefined,
                display: "block",
              }}
            />
          </div>

          {/* Name + subtitle */}
          <div className="mt-1 space-y-1.5">
            <h1 className="wallpoet-font text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
              {nameLetters.map((letter, index) => {
                // Spaces are rendered as invisible blocks so the letters keep the right flow.
            if (letter === " ") {
              return (
                <span
                  key={`${letter}-${index}`}
                  style={{ display: "inline-block", width: "0.45em" }}
                />
              );
            }

                const isFallen = fallenLetterIndexes[index];
                const isHovered = hoveredLetterIndex === index;
                const flingOffset = getFlingOffset(index);
                const color = pastelNameColors[index % pastelNameColors.length];

                return (
                  <span
                    key={`${letter}-${index}`}
                    onClick={() =>
                      setFallenLetterIndexes((previous) => {
                        const next = [...previous];
                        next[index] = true;
                        return next;
                      })
                    }
                    onMouseEnter={() => setHoveredLetterIndex(index)}
                    onMouseLeave={() => setHoveredLetterIndex(null)}
                    className={`mr-[0.04em] inline-block cursor-pointer select-none ${isFallen ? "name-letter-fling" : ""}`}
                    style={{
                      display: "inline-block",
                      transition: "transform 240ms ease",
                      animationDelay: isFallen ? `${index * 20}ms` : undefined,
                      transform: isFallen ? undefined : isHovered ? "translateY(-2px)" : "translateY(0)",
                      opacity: 1,
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
            <p className="mt-5 text-[0.95rem] text-slate-400 tracking-wide font-medium pixel-font">{siteSubtitle}</p>
          </div>
        </div>

        {/* ---- Intro paragraph ------------------------------------------- */}
        <div className="relative max-w-[65ch]">
          <p className="relative z-10 text-[1.12rem] leading-8 font-light text-slate-300 sm:text-lg">
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
            {"If you'd like to know more, feek free ti "}
            <a href="/resume.pdf" className="animated-link">
              resume
            </a>
            {" or "}
            <a href="mailto:christopher@example.com" className="animated-link">
              contac
            </a>
            {" me."}
          </p>
        </div>
      </div>

      {/*
        If you want to add more polish later, this is the place to do it.
        For example: a new animation, a small shape behind the text, or a different accent.
      */}
    </main>
  );
}

export default Home;