import {useEffect, useState} from "react";
import {motion} from "framer-motion";

const phrases = [
  "Full Stack Developer",
  "Software Engineering Student",
  "Node.js & React Builder",
  "Mechatronics Background",
  "Open to Junior Roles",
];

interface HeroProps {
  visible: boolean;
}

export function Hero({visible}: HeroProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % phrases.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "0 48px",
        position: "relative",
        overflow: "hidden",
      }}
    >

      <div
        style={{
          position: "absolute",
          top: 0,
          left: "48px",
          width: "1px",
          height: "100%",
          background: "linear-gradient(180deg, transparent, #141414 20%, #141414 80%, transparent)",
        }}
      />

      <motion.div
        style={{position: "relative", zIndex: 1, maxWidth: "680px", paddingLeft: "40px"}}
        initial={{opacity: 0, y: 20}}
        animate={{opacity: visible ? 1 : 0, y: visible ? 0 : 20}}
        transition={{duration: 0.7, ease: "easeOut"}}
      >

        <div
          style={{
            fontSize: "10px",
            letterSpacing: ".14em",
            textTransform: "uppercase",
            color: "#2a2a2a",
            marginBottom: "24px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <span style={{width: "20px", height: "1px", background: "#1e1e1e", display: "block"}} />
          Software Engineer · Palmas, TO
        </div>

        <h1
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(52px, 8vw, 88px)",
            fontWeight: 800,
            lineHeight: 0.92,
            letterSpacing: "-.04em",
            color: "#fff",
            marginBottom: "24px",
          }}
        >
          Gabriel
          <br />
          <span style={{color: "transparent", WebkitTextStroke: "1.5px #666666" }}>Oliveira</span>
        </h1>

        <div style={{height: "26px", overflow: "hidden", marginBottom: "32px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              transform: `translateY(-${current * 26}px)`,
              transition: "transform .5s cubic-bezier(.77,0,.175,1)",
            }}
          >
            {[...phrases, phrases[0]].map((phrase, i) => (
              <span
                key={i}
                style={{
                  fontSize: "15px",
                  color: "#444",
                  height: "26px",
                  lineHeight: "26px",
                  flexShrink: 0,
                }}
              >
                {phrase}
              </span>
            ))}
          </div>
        </div>


        <div style={{display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "48px"}}>
          <a
            href="https://github.com/NikoTso"
            target="_blank"
            rel="noreferrer"
            style={{
              background: "#fff",
              color: "#000",
              padding: "10px 20px",
              borderRadius: "5px",
              fontSize: "12px",
              fontWeight: 500,
              textDecoration: "none",
              letterSpacing: ".02em",
            }}
          >
            GitHub →
          </a>
          <a
            href="https://www.linkedin.com/in/gabrielolimed"
            target="_blank"
            rel="noreferrer"
            style={{
              border: "1px solid #1a1a1a",
              color: "#444",
              padding: "10px 20px",
              borderRadius: "5px",
              fontSize: "12px",
              textDecoration: "none",
            }}
          >
            LinkedIn
          </a>
          <a
            href="mailto:gabrieloliver.gom@gmail.com"
            style={{
              border: "1px solid #1a1a1a",
              color: "#444",
              padding: "10px 20px",
              borderRadius: "5px",
              fontSize: "12px",
              textDecoration: "none",
            }}
          >
            Email
          </a>
        </div>

        <div
          style={{
            display: "inline-flex",
            border: "1px solid #111",
            borderRadius: "6px",
            overflow: "hidden",
          }}
        >
          {[
            {num: "3+", label: "Projects"},
            {num: "7+", label: "Technologies"},
            {num: "19", label: "Repos"},
          ].map((stat, i, arr) => (
            <div
              key={stat.label}
              style={{
                padding: "12px 20px",
                borderRight: i < arr.length - 1 ? "1px solid #111" : "none",
                display: "flex",
                flexDirection: "column",
                gap: "2px",
              }}
            >
              <span
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "18px",
                  fontWeight: 800,
                  color: "#fff",
                  lineHeight: 1,
                  letterSpacing: "-.02em",
                }}
              >
                {stat.num}
              </span>
              <span
                style={{
                  fontSize: "9px",
                  color: "#2a2a2a",
                  letterSpacing: ".1em",
                  textTransform: "uppercase",
                }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}