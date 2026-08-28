import { Link, useLocation } from "react-router-dom";
import { SITE_CONFIG, NAVIGATION_LINKS } from "../config/constants";

/**
 * Global navigation displayed at the top of every page
 */
function Navbar() {
  const location = useLocation();

  /**
   * Determines if a navigation path is currently active
   * Project detail pages keep Projects highlighted
   */
  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-[100]">
      <nav className="site-container flex h-[88px] items-center justify-between">
        <Link
          to="/"
          className="pixel-font text-sm tracking-wide text-slate-300 transition-colors hover:text-white"
        >
          {SITE_CONFIG.name}
        </Link>

        <div className="flex items-center gap-6">
          {NAVIGATION_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm transition-colors ${
                isActive(link.path)
                  ? "text-white"
                  : "text-slate-500 hover:text-slate-200"
              }`}
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