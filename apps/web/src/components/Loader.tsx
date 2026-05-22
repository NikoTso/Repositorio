import {useEffect, useState} from "react";

interface LoaderProps {
  onComplete: () => void;
}

export function Loader({ onComplete }: LoaderProps) {
  const [pct, setPct] = useState(0);
  const [nameVisible, setNameVisible] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const nameTimer = setTimeout(() => setNameVisible(true), 150);

    const interval = setInterval(() => {
      setPct((prev) => {
        const next = prev + Math.random() * 3.5 + 1;
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setHidden(true);
            setTimeout(onComplete, 700);
          }, 500);
          return 100;
        }
        return next;
      });
    }, 40);

    return () => {
      clearTimeout(nameTimer);
      clearInterval(interval);
    };
  }, [onComplete]);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "#080808",
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "28px",
        transition: "opacity .7s ease, visibility .7s ease",
        opacity: hidden ? 0 : 1,
        visibility: hidden ? "hidden" : "visible",
      }}
    >
      <div
        style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: "clamp(72px, 16vw, 120px)",
          fontWeight: 800,
          letterSpacing: "-.04em",
          lineHeight: 1,
          color: "transparent",
          WebkitTextStroke: nameVisible ? "1px #555" : "1px #2a2a2a",
          opacity: nameVisible ? 1 : 0,
          transform: nameVisible ? "translateY(0)" : "translateY(10px)",
          transition: "opacity .6s ease, transform .6s ease, -webkit-text-stroke .4s ease",
        }}
      >
        GOM
      </div>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
        <div style={{ width: "180px", height: "1px", background: "#141414", overflow: "hidden" }}>
          <div
            style={{
              height: "100%",
              width: `${pct}%`,
              background: "#fff",
              transition: "width .04s linear",
            }}
          />
        </div>
        <span
          style={{
            fontSize: "10px",
            color: "#2a2a2a",
            letterSpacing: ".12em",
            fontVariantNumeric: "tabular-nums",
          }}
        >
          {Math.floor(pct)}%
        </span>
      </div>
    </div>
  );
}