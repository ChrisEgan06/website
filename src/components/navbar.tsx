import { Link, useLocation } from "react-router-dom";

/**
 * Global navigation displayed at the top of every page.
 *
 * The navbar uses the same `.site-container` class as the
 * page content so everything lines up on the same left edge.
 */
function Navbar() {
  const location = useLocation();

  // All primary pages shown in the navigation.
  const navigationLinks = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "Projects",
      path: "/projects",
    },
    {
      label: "Experience",
      path: "/experience",
    },
  ];

  /**
   * Determines which navigation item is currently active.
   */
  const isActive = (path: string) => {
    // Home should only be active on the exact homepage.
    if (path === "/") {
      return location.pathname === "/";
    }

    // Project detail pages should keep Projects highlighted.
    return location.pathname.startsWith(path);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-[100]">
      <nav className="site-container flex h-[88px] items-center justify-between">
        {/* Site name */}
        <Link
          to="/"
          className="
            pixel-font
            text-sm
            tracking-wide
            text-slate-300
            transition-colors
            hover:text-white
          "
        >
          Christopher Egan
        </Link>

        {/* Navigation links */}
        <div className="flex items-center gap-6">
          {navigationLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`
                text-sm
                transition-colors
                ${
                  isActive(link.path)
                    ? "text-white"
                    : "text-slate-500 hover:text-slate-200"
                }
              `}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;