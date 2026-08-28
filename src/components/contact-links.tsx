import { CONTACT_LINKS } from "../config/constants";

/**
 * ContactLinks Component
 * Displays social media and contact links in a clean, horizontal layout
 */
function ContactLinks() {
  return (
    <div className="mt-6 flex justify-center gap-6">
      {CONTACT_LINKS.map(({ label, href }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 transition-colors hover:text-white"
          aria-label={label}
        >
          {label}
        </a>
      ))}
    </div>
  );
}

export default ContactLinks;
