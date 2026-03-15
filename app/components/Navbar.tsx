"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "About",    href: "#about"    },
  { label: "Skills",   href: "#skills"   },
  { label: "Projects", href: "#projects" },
  { label: "Contact",  href: "#contact"  },
];

export default function Navbar() {
  const [scrolled,       setScrolled]       = useState(false);
  const [menuOpen,       setMenuOpen]       = useState(false);
  const [activeSection,  setActiveSection]  = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
      const sections = ["contact", "projects", "skills", "about"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 130) {
          setActiveSection(id);
          return;
        }
      }
      setActiveSection("");
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* ── Main bar ── */}
      <nav
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 50,
          transition: "background 0.4s, border-color 0.4s",
          background: scrolled ? "rgba(10,10,10,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid #242424" : "1px solid transparent",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 2rem",
            height: "60px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{
              fontFamily: "var(--font-syne), sans-serif",
              fontWeight: 800,
              fontSize: "1.2rem",
              color: "#f0ede6",
              background: "none",
              border: "none",
              cursor: "none",
              letterSpacing: "-0.01em",
            }}
          >
            WM<span style={{ color: "#caff33" }}>.</span>
          </button>

          {/* Desktop nav links — shown via .nav-links-desktop CSS class */}
          <ul className="nav-links-desktop">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    style={{
                      fontFamily: "var(--font-dm-mono), monospace",
                      fontSize: "0.7rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                      color: isActive ? "#caff33" : "#888",
                      background: "none",
                      border: "none",
                      cursor: "none",
                      transition: "color 0.3s",
                      position: "relative",
                    }}
                    onMouseEnter={(e) => { if (!isActive) (e.target as HTMLElement).style.color = "#f0ede6"; }}
                    onMouseLeave={(e) => { if (!isActive) (e.target as HTMLElement).style.color = "#888"; }}
                  >
                    {link.label}
                    {/* Underline */}
                    <span
                      style={{
                        position: "absolute",
                        bottom: "-2px", left: 0,
                        height: "1px",
                        background: "#caff33",
                        width: isActive ? "100%" : "0",
                        transition: "width 0.3s",
                        display: "block",
                      }}
                    />
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Resume CTA — download link */}
          <a
            href="/Wajahat-Mustafa-Resume.pdf"
            download="Wajahat-Mustafa-Resume.pdf"
            className="nav-cta-btn"
            style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: "0.7rem",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              border: "1px solid #caff33",
              color: "#caff33",
              padding: "0.45rem 1rem",
              background: "transparent",
              cursor: "none",
              transition: "background 0.3s, color 0.3s",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.background = "#caff33";
              el.style.color = "#0a0a0a";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.background = "transparent";
              el.style.color = "#caff33";
            }}
          >
            Resume ↓
          </a>

          {/* Hamburger — hidden on desktop via .nav-hamburger CSS class */}
          <button
            className="nav-hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{
              flexDirection: "column",
              gap: "5px",
              padding: "6px",
              background: "none",
              border: "none",
              cursor: "none",
              zIndex: 50,
            }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  width: "22px",
                  height: "1px",
                  background: "#f0ede6",
                  transition: "all 0.3s",
                  transform:
                    menuOpen && i === 0 ? "rotate(45deg) translate(4px, 4px)"
                    : menuOpen && i === 2 ? "rotate(-45deg) translate(4px, -4px)"
                    : "none",
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>
      </nav>

      {/* ── Mobile full-screen menu ── */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 40,
          background: "#0a0a0a",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "2.5rem",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
          transition: "opacity 0.4s ease",
        }}
      >
        {navLinks.map((link) => (
          <button
            key={link.label}
            onClick={() => scrollTo(link.href)}
            style={{
              fontFamily: "var(--font-syne), sans-serif",
              fontWeight: 800,
              fontSize: "2.5rem",
              color: "#f0ede6",
              background: "none",
              border: "none",
              cursor: "none",
              transition: "color 0.3s",
            }}
            onMouseEnter={(e) => { (e.target as HTMLElement).style.color = "#caff33"; }}
            onMouseLeave={(e) => { (e.target as HTMLElement).style.color = "#f0ede6"; }}
          >
            {link.label}
          </button>
        ))}
        <a
          href="/Wajahat-Mustafa-Resume.pdf"
          download="Wajahat-Mustafa-Resume.pdf"
          onClick={() => setMenuOpen(false)}
          style={{
            fontFamily: "var(--font-dm-mono), monospace",
            fontSize: "0.75rem",
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            border: "1px solid #caff33",
            color: "#caff33",
            padding: "0.75rem 1.5rem",
            background: "transparent",
            cursor: "none",
            marginTop: "1rem",
            textDecoration: "none",
            display: "inline-block",
          }}
        >
          Resume ↓
        </a>
      </div>
    </>
  );
}