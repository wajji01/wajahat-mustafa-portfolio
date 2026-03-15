"use client";

import { useEffect, useState } from "react";

const roles = [
  "Full Stack Developer",
  "React Specialist",
  "Node.js Engineer",
  "UI/UX Enthusiast",
];

const ticker = [
  "Next.js", "React", "TypeScript", "Node.js", "PostgreSQL",
  "Tailwind CSS", "Docker", "REST APIs", "GraphQL", "MongoDB",
];

export default function Hero() {
  const [roleIndex,  setRoleIndex]  = useState(0);
  const [displayed,  setDisplayed]  = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex,  setCharIndex]  = useState(0);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && charIndex < current.length) {
      timeout = setTimeout(() => { setDisplayed(current.slice(0, charIndex + 1)); setCharIndex((c) => c + 1); }, 80);
    } else if (!isDeleting && charIndex === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => { setDisplayed(current.slice(0, charIndex - 1)); setCharIndex((c) => c - 1); }, 40);
    } else {
      setIsDeleting(false);
      setRoleIndex((r) => (r + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Grid BG */}
      <div
        style={{
          position: "absolute", inset: 0, opacity: 0.04, pointerEvents: "none",
          backgroundImage: "linear-gradient(#caff33 1px, transparent 1px), linear-gradient(90deg, #caff33 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Glow blob */}
      <div
        style={{
          position: "absolute", top: "40%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px", height: "600px", borderRadius: "50%",
          background: "rgba(202,255,51,0.04)", filter: "blur(100px)",
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative", zIndex: 1,
          maxWidth: "1200px", margin: "0 auto",
          padding: "140px 2rem 6rem",
        }}
      >
        {/* Badge */}
        <div
          className="hero-animate a1"
          style={{
            display: "inline-flex", alignItems: "center", gap: "0.6rem",
            border: "1px solid #242424", background: "#111",
            padding: "0.5rem 1rem", marginBottom: "2rem",
          }}
        >
          <span
            style={{
              width: 8, height: 8, borderRadius: "50%", background: "#caff33",
              animation: "pulse 1.5s ease-in-out infinite",
            }}
          />
          <style>{`@keyframes pulse{0%,100%{opacity:1}50%{opacity:.4}}`}</style>
          <span
            style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: "0.65rem", textTransform: "uppercase",
              letterSpacing: "0.15em", color: "#888",
            }}
          >
            Available for work
          </span>
        </div>

        {/* Name */}
        <h1
          className="hero-animate a2 glitch"
          data-text="Wajahat Mustafa"
          style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontWeight: 800,
            fontSize: "clamp(3.2rem, 9vw, 8rem)",
            lineHeight: 1,
            color: "#f0ede6",
            marginBottom: "1.2rem",
          }}
        >
          Wajahat<br />Mustafa
          <span style={{ color: "#caff33" }}>.</span>
        </h1>

        {/* Typewriter */}
        <div
          className="hero-animate a3"
          style={{
            fontFamily: "var(--font-dm-mono), monospace",
            fontSize: "clamp(0.9rem, 2.2vw, 1.3rem)",
            color: "#888",
            marginBottom: "2rem",
          }}
        >
          <span style={{ color: "#caff33" }}>&gt;</span>{" "}
          {displayed}
          <span className="animate-blink" style={{ color: "#caff33" }}>|</span>
        </div>

        {/* Description */}
        <p
          className="hero-animate a4"
          style={{
            fontFamily: "var(--font-dm-mono), monospace",
            fontSize: "0.85rem",
            color: "#888",
            maxWidth: "520px",
            lineHeight: 1.85,
            marginBottom: "3rem",
          }}
        >
          I build performant, scalable web applications from pixel-perfect
          frontends to robust backend systems. Clean code is my craft.
        </p>

        {/* CTAs */}
        <div
          className="hero-animate a5"
          style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "4rem" }}
        >
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em",
              background: "#caff33", color: "#0a0a0a",
              padding: "1rem 2rem", border: "none", cursor: "none",
              fontWeight: 500, transition: "all 0.3s",
            }}
            onMouseEnter={(e) => { const el = e.currentTarget; el.style.background = "#f0ede6"; el.style.boxShadow = "0 0 40px rgba(202,255,51,0.3)"; }}
            onMouseLeave={(e) => { const el = e.currentTarget; el.style.background = "#caff33"; el.style.boxShadow = "none"; }}
          >
            View Work
          </button>
          <button
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em",
              border: "1px solid #242424", color: "#888",
              padding: "1rem 2rem", background: "transparent", cursor: "none",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => { const el = e.currentTarget; el.style.borderColor = "#f0ede6"; el.style.color = "#f0ede6"; }}
            onMouseLeave={(e) => { const el = e.currentTarget; el.style.borderColor = "#242424"; el.style.color = "#888"; }}
          >
            About Me
          </button>
        </div>

        {/* Stats */}
        <div
          className="hero-animate a6"
          style={{ display: "flex", gap: "3rem", flexWrap: "wrap" }}
        >
          {[
            { val: "3+",  label: "Years Experience" },
            { val: "30+", label: "Projects Built"   },
            { val: "15+", label: "Happy Clients"    },
          ].map((s) => (
            <div key={s.label}>
              <div
                style={{
                  fontFamily: "var(--font-syne), sans-serif",
                  fontWeight: 800, fontSize: "2.5rem", color: "#caff33",
                }}
              >
                {s.val}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-dm-mono), monospace",
                  fontSize: "0.65rem", textTransform: "uppercase",
                  letterSpacing: "0.15em", color: "#555", marginTop: "0.25rem",
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        style={{
          position: "absolute", bottom: "5rem", left: "50%",
          transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem",
          background: "none", border: "none", cursor: "none",
          color: "#555", transition: "color 0.3s",
        }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#caff33"; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#555"; }}
      >
        <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: "0.6rem", textTransform: "uppercase", letterSpacing: "0.15em" }}>
          Scroll
        </span>
        <span style={{ width: "1px", height: "48px", background: "linear-gradient(to bottom, currentColor, transparent)" }} />
      </button>

      {/* Marquee ticker */}
      <div
        style={{
          position: "absolute", bottom: 0, left: 0, right: 0,
          borderTop: "1px solid #1a1a1a",
          background: "rgba(17,17,17,0.85)", backdropFilter: "blur(8px)",
          padding: "0.75rem 0", overflow: "hidden",
        }}
      >
        <div className="animate-marquee" style={{ display: "flex", whiteSpace: "nowrap" }}>
          {[...ticker, ...ticker].map((t, i) => (
            <span
              key={i}
              style={{
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: "0.65rem", textTransform: "uppercase",
                letterSpacing: "0.15em", color: "#555", margin: "0 1.5rem",
              }}
            >
              {t}
              <span style={{ color: "#caff33", margin: "0 1.5rem" }}>✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}