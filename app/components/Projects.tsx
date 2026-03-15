"use client";

import { useState } from "react";

const projects = [
  {
    id: "01",
    title: "NexaShop",
    cat: "E-Commerce Platform",
    color: "#caff33",
    featured: true,
    year: "2024",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Prisma", "Redis"],
    desc: "Full-featured e-commerce platform with real-time inventory management, Stripe payments, and a powerful admin dashboard. Built for scale — supports 10k+ products and multi-vendor workflows.",
    live: "#",
    repo: "#",
  },
  {
    id: "02",
    title: "TaskFlow",
    cat: "SaaS Project Tool",
    color: "#33caff",
    featured: true,
    year: "2024",
    tech: ["React", "Node.js", "Socket.io", "MongoDB", "JWT", "AWS S3"],
    desc: "Collaborative project management tool with real-time Kanban boards, team analytics, and WebSocket-powered live collaboration. Used by 500+ teams.",
    live: "#",
    repo: "#",
  },
  {
    id: "03",
    title: "MedAssist API",
    cat: "Healthcare Backend",
    color: "#ff6b35",
    featured: false,
    year: "2023",
    tech: ["Node.js", "Express", "PostgreSQL", "Docker", "AWS", "Twilio"],
    desc: "HIPAA-compliant REST API for a telemedicine startup. Handles patient records, appointment scheduling, and secure video consultation sessions at scale.",
    live: "#",
    repo: "#",
  },
  {
    id: "04",
    title: "CryptoTracker",
    cat: "Data Dashboard",
    color: "#a855f7",
    featured: false,
    year: "2023",
    tech: ["React", "TypeScript", "WebSocket", "Chart.js", "Tailwind", "Vite"],
    desc: "Real-time cryptocurrency portfolio tracker with live price feeds, custom price alerts, and deep analytics powered by WebSocket and the CoinGecko API.",
    live: "#",
    repo: "#",
  },
  {
    id: "05",
    title: "BlogForge",
    cat: "CMS Platform",
    color: "#22c55e",
    featured: false,
    year: "2023",
    tech: ["Next.js", "Contentlayer", "MDX", "Algolia", "Vercel", "Prisma"],
    desc: "Headless CMS with MDX support, full-text Algolia search, and built-in SEO optimization. Features a Notion-like editor and multi-author workflow management.",
    live: "#",
    repo: "#",
  },
  {
    id: "06",
    title: "DevConnect",
    cat: "Social Platform",
    color: "#f59e0b",
    featured: false,
    year: "2022",
    tech: ["Next.js", "GraphQL", "PostgreSQL", "Prisma", "NextAuth", "AWS"],
    desc: "Professional network for developers with live code sharing, peer code reviews, and an integrated job board. GitHub OAuth with contribution graph integration.",
    live: "#",
    repo: "#",
  },
];

export default function Projects() {
  const [filter, setFilter] = useState<"all" | "featured">("all");
  const [hovered, setHovered] = useState<string | null>(null);

  const displayed = filter === "featured"
    ? projects.filter((p) => p.featured)
    : projects;

  return (
    <section
      id="projects"
      style={{ position: "relative", padding: "8rem 0", background: "#0a0a0a", overflow: "hidden" }}
    >
      {/* Big BG number */}
      <div style={{
        position: "absolute", top: "3rem", right: "2rem",
        fontFamily: "var(--font-syne), sans-serif", fontWeight: 800,
        fontSize: "clamp(4rem, 12vw, 8rem)", color: "#1a1a1a",
        lineHeight: 1, pointerEvents: "none", userSelect: "none",
      }}>03</div>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem", position: "relative", zIndex: 1 }}>

        {/* ── Section label ── */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "3.5rem" }}>
          <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: "0.7rem", color: "#caff33", textTransform: "uppercase", letterSpacing: "0.15em" }}> // 03</span>
          <span style={{ height: "1px", background: "#242424", width: "60px", display: "block" }} />
          <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "#888" }}>Projects</span>
        </div>

        {/* ── Header + filter ── */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "3rem", flexWrap: "wrap", gap: "1rem" }}>
          <h2 style={{ fontFamily: "var(--font-syne), sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#f0ede6", lineHeight: 1.1 }}>
            Selected <span style={{ color: "#caff33" }}>work</span>
          </h2>

          <div style={{ display: "flex", gap: "0.5rem" }}>
            {(["all", "featured"] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                style={{
                  fontFamily: "var(--font-dm-mono), monospace",
                  fontSize: "0.65rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  padding: "0.4rem 1rem",
                  border: "1px solid",
                  cursor: "none",
                  transition: "all 0.3s",
                  borderColor: filter === f ? "#caff33" : "#242424",
                  background:  filter === f ? "#caff33" : "transparent",
                  color:       filter === f ? "#0a0a0a" : "#888",
                }}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* ── Projects grid ── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
          gap: "1px",
          background: "#1a1a1a",
          border: "1px solid #1a1a1a",
        }}>
          {displayed.map((p) => {
            const isHovered = hovered === p.id;
            return (
              <div
                key={p.id}
                onMouseEnter={() => setHovered(p.id)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  position: "relative",
                  background: isHovered ? "#0f0f0f" : "#0a0a0a",
                  padding: "2rem",
                  overflow: "hidden",
                  transition: "background 0.3s",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  cursor: "default",
                }}
              >
                {/* Top row: number + category */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: "0.65rem", color: "#555" }}>
                    {p.id}
                  </span>
                  <span style={{
                    fontFamily: "var(--font-dm-mono), monospace",
                    fontSize: "0.58rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    padding: "0.2rem 0.6rem",
                    border: "1px solid",
                    transition: "all 0.3s",
                    borderColor: isHovered ? p.color : "transparent",
                    color:       isHovered ? p.color : "#555",
                  }}>
                    {p.cat}
                  </span>
                </div>

                {/* Title */}
                <div style={{
                  fontFamily: "var(--font-syne), sans-serif",
                  fontWeight: 800,
                  fontSize: "1.4rem",
                  color: isHovered ? p.color : "#f0ede6",
                  transition: "color 0.3s",
                  lineHeight: 1.1,
                }}>
                  {p.title}
                </div>

                {/* Description */}
                <p style={{
                  fontFamily: "var(--font-dm-mono), monospace",
                  fontSize: "0.75rem",
                  color: "#888",
                  lineHeight: 1.75,
                  flex: 1,
                  display: "-webkit-box",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}>
                  {p.desc}
                </p>

                {/* Tech tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
                  {p.tech.map((t) => (
                    <span key={t} style={{
                      fontFamily: "var(--font-dm-mono), monospace",
                      fontSize: "0.6rem",
                      color: "#555",
                      border: "1px solid #1a1a1a",
                      padding: "0.15rem 0.5rem",
                      background: "#111",
                    }}>
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links — slide up on hover */}
                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderTop: "1px solid #1a1a1a",
                  paddingTop: "1rem",
                  marginTop: "0.25rem",
                  opacity: isHovered ? 1 : 0,
                  transform: isHovered ? "translateY(0)" : "translateY(8px)",
                  transition: "all 0.35s ease",
                }}>
                  <a
                    href={p.live}
                    style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#caff33", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#f0ede6")}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#caff33")}
                  >
                    Live Demo ↗
                  </a>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: "0.6rem", color: "#555" }}>{p.year}</span>
                    <span style={{ width: "1px", height: "12px", background: "#242424" }} />
                    <a
                      href={p.repo}
                      style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#888", textDecoration: "none", transition: "color 0.2s" }}
                      onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#f0ede6")}
                      onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#888")}
                    >
                      GitHub →
                    </a>
                  </div>
                </div>

                {/* Accent bar — grows on hover */}
                <div style={{
                  position: "absolute",
                  bottom: 0, left: 0,
                  height: "2px",
                  background: p.color,
                  width: isHovered ? "100%" : "0%",
                  transition: "width 0.5s ease",
                }} />

                {/* Subtle corner glow on hover */}
                <div style={{
                  position: "absolute",
                  top: 0, right: 0,
                  width: "120px", height: "120px",
                  background: `radial-gradient(circle at top right, ${p.color}12, transparent 70%)`,
                  opacity: isHovered ? 1 : 0,
                  transition: "opacity 0.4s",
                  pointerEvents: "none",
                }} />
              </div>
            );
          })}
        </div>

        {/* ── "View all" link ── */}
        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <a
            href="https://github.com/wajji01"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: "0.75rem",
              fontFamily: "var(--font-dm-mono), monospace", fontSize: "0.75rem",
              textTransform: "uppercase", letterSpacing: "0.12em",
              color: "#888", textDecoration: "none", transition: "color 0.3s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#caff33")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#888")}
          >
            <span style={{ width: "24px", height: "1px", background: "currentColor", display: "inline-block" }} />
            View all projects on GitHub
            <span style={{ width: "24px", height: "1px", background: "currentColor", display: "inline-block" }} />
          </a>
        </div>

      </div>
    </section>
  );
}