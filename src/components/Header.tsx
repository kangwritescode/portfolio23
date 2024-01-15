import { useMemo } from "react";
import GithubIcon from "./GithubIcon";
import LinkedinIcon from "./LinkedinIcon";

function SocialMediaLinks() {
  const linkData = useMemo(
    () => [
      {
        name: "GitHub",
        href: "https://www.github.com/kangwritescode",
        icon: <GithubIcon />,
      },
      {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/davidhjkang/",
        icon: <LinkedinIcon />,
      },
    ],
    [],
  );
  return (
    <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
      {linkData.map((link) => (
        <li key={link.name} className="mr-5 text-xs">
          <a
            className="text-zinc-200 hover:text-zinc-100"
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="sr-only">{link.name}</span>
            <span className="h-6 w-6">{link.icon}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function Header() {
  const navItems = useMemo(
    () => [
      { name: "About", href: "#about" },
      { name: "Experience", href: "#experience" },
      { name: "Projects", href: "#proejcts" },
    ],
    [],
  );
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:h-full lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-zinc-200 sm:text-5xl">
          <a href="/">David Kang</a>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-zinc-200 sm:text-xl">
          Software Engineer at Aetna Health
        </h2>
        <p className="mt-4 max-w-xs leading-normal">
          I build polished, performant, and accessible web experiences.
        </p>
        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-16 w-max">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  className="group flex items-center py-3"
                  href={item.href}
                  aria-current="page"
                >
                  <span className="nav-indicator mr-4 h-px w-8 bg-zinc-600 transition-all group-hover:w-16 group-hover:bg-zinc-200 group-focus-visible:w-16 group-focus-visible:bg-zinc-200 motion-reduce:transition-none" />
                  <span className="nav-text text-xs font-bold uppercase tracking-widest text-zinc-500 group-hover:text-zinc-200 group-focus-visible:text-zinc-200">
                    {item.name}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <SocialMediaLinks />
    </header>
  );
}
