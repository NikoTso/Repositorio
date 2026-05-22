import { useEffect, useState } from "react";

interface NavbarProps {
  visible: boolean;
}

export function Navbar({ visible }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "0 48px",
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: scrolled ? "1px solid #0f0f0f" : "1px solid transparent",
        background: scrolled ? "rgba(8,8,8,0.9)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(-10px)",
        transition: "opacity .5s ease, transform .5s ease, background .3s ease, border-color .3s ease",
      }}
    >
      <span
        style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: "15px",
          fontWeight: 800,
          color: "transparent",
          WebkitTextStroke: "1px #444",
          letterSpacing: "-.02em",
        }}
      >
        Portfolio
      </span>

      <nav style={{ display: "flex", gap: "32px" }}>
        {["Projects", "Skills", "Contact"].map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            style={{
              fontSize: "13px",
              color: "#444",
              textDecoration: "none",
              letterSpacing: ".02em",
              transition: "color .15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#444")}
          >
            {link}
          </a>
        ))}
      </nav>
    </header>
  );
}