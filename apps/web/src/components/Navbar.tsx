import { useEffect, useState } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-300

        ${
          scrolled
            ? "bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-zinc-900"
            : "bg-transparent"
        }
      `}
    >

      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        <h1 className="font-bold text-lg text-white">
          Portifolio
        </h1>

        <nav className="hidden md:flex gap-6 text-sm text-zinc-400">

          <a
            href="#home"
            className="hover:text-white transition"
          >
            Home
          </a>

          <a
            href="#projects"
            className="hover:text-white transition"
          >
            Projects
          </a>

          <a
            href="#skills"
            className="hover:text-white transition"
          >
            Skills
          </a>

          <a
            href="#contacts"
            className="hover:text-white transition"
          >
            Contact
          </a>

        </nav>

      </div>

    </header>
  );
}