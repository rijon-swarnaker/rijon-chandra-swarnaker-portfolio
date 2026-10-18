import React from "react";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";

const QUICK_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  const githubUrl = process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/rijon-swarnaker";
  const linkedinUrl = process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://www.linkedin.com/in/rijon-swarnaker/";
  const emailUrl = "mailto:rijonswarnaker@gmail.com";

  return (
    <footer className="relative border-t border-slate-800/80 bg-slate-950/90 backdrop-blur-md pt-5 pb-5 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-20 bg-cyan-500/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-3  md:grid-cols-12 gap-10 items-start">
          {/* Brand & Tagline (5 cols) */}
          <div className="col-span-2 md:col-span-5 space-y-1">
            <a href="#home" className="inline-flex items-center gap-2 group focus:outline-none">
              <span className="text-2xl font-Exo font-Merienda font-extrabold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                Rijon<span className="text-cyan-400">.</span>
              </span>
            </a>
            <p className="text-sm  font-Space-Grotesk text-slate-300 max-w-sm font-medium leading-relaxed">
              Learning, Building, <br /> and Growing Through Code.
            </p>
          </div>

          {/* Quick Links (4 cols) */}
          <div className="md:col-span-4 hidden lg:block space-y-3">
            <h3 className="text-xs font-bold font-Exo uppercase tracking-wider text-slate-300">
              Quick Links
            </h3>
            <ul className="flex flex-wrap gap-x-6 font-Share-Tech gap-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-300 hover:text-cyan-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links (3 cols) */}
          <div className="md:col-span-3 space-y-3 text-right">
            <h3 className="text-xs font-bold font-Exo uppercase tracking-wider text-slate-300">
              Connect
            </h3>
            <div className="flex items-center gap-3 md:justify-end">
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-slate-600 hover:bg-slate-850 hover:-translate-y-0.5 transition-all duration-200"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-blue-400 hover:border-blue-500/40 hover:bg-slate-850 hover:-translate-y-0.5 transition-all duration-200"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href={emailUrl}
                aria-label="Send Email to rijonswarnaker@gmail.com"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-slate-850 hover:-translate-y-0.5 transition-all duration-200"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}