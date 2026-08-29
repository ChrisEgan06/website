/**
 * Site-wide configuration and constants
 * Centralized configuration makes updates easier and reduces duplication
 */

export const SITE_CONFIG = {
  name: "Christopher Egan",
  subtitle: "Computer Science & Robotics Engineering @ WPI",
};

export const PASTEL_COLORS = [
  "#8fdcff",
  "#c7b0ff",
  "#f8c8a8",
  "#bfe9cc",
  "#f7b6cf",
];

export const CONTACT_LINKS = [
  {
    label: "Email",
    href: "mailto:eganchristopher06@gmail.com",
    icon: "✉",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/christopher--egan",
    icon: "in",
  },
  {
    label: "GitHub",
    href: "https://github.com/ChrisEgan06",
    icon: "⚙",
  },
];

export const NAVIGATION_LINKS = [
  { label: "Home", path: "/" },
  { label: "Projects", path: "/projects" },
  { label: "Experience", path: "/experience" },
  { label: "Hobbies", path: "/hobbies" },
];

export const ANIMATION_TIMINGS = {
  LETTER_HOVER: 240,
  AVATAR_HOVER: 220,
  STAGGER_LETTER: 20,
};
