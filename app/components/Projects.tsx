"use client";
import { useState } from "react";

const projects = [
  { id: "01", title: "NexaShop",      cat: "E-Commerce",       color: "#caff33", featured: true,  year: "2024", tech: ["Next.js","TypeScript","PostgreSQL","Stripe","Prisma","Redis"],   desc: "Full-featured e-commerce platform with real-time inventory, Stripe payments, and admin dashboard. Built for scale with 10k+ products and multi-vendor support." },
  { id: "02", title: "TaskFlow",      cat: "SaaS Tool",        color: "#33caff", featured: true,  year: "2024", tech: ["React","Node.js","Socket.io","MongoDB","JWT","AWS S3"],           desc: "Collaborative project management with real-time Kanban boards, team analytics, and WebSocket-powered live collaboration." },
  { id: "03", title: "MedAssist API", cat: "Healthcare",       color: "#ff6b35", featured: false, year: "2023", tech: ["Node.js","Express","PostgreSQL","Docker","AWS","Twilio"],         desc: "HIPAA-compliant REST API for a telemedicine startup. Handles patient records, appointments, and secure video consultation sessions." },
  { id: "04", title: "CryptoTracker", cat: "Dashboard",        color: "#a855f7", featured: false, year: "2023", tech: ["React","TypeScript","WebSocket","Chart.js","Tailwind","Vite"],   desc: "Real-time crypto portfolio tracker with live price feeds, custom alerts, and analytics using WebSocket and CoinGecko API." },
  { id: "05", title: "BlogForge",     cat: "CMS Platform",     color: "#22c55e", featured: false, year: "2023", tech: ["Next.js","Contentlayer","MDX","Algolia","Vercel","Prisma"],      desc: "Headless CMS with MDX support, full-text search, and SEO optimization. Notion-like editor with multi-author workflow." },
  { id: "06", title: "DevConnect",    cat: "Social Platform",  color: "#f59e0b", featured: false, year: "2022", tech: ["Next.js","GraphQL","PostgreSQL","Prisma","NextAuth","AWS"],      desc: "Professional network for developers with live code sharing, peer reviews, and integrated job board with GitHub OAuth." },
];

export default function Projects() {
  const [filter,  setFilter]  = useState<"all" | "featured">("all");
  const [hovered, setHovered] = useState<string | null>(null);
  const displayed = filter === "featured" ? projects.filter(p => p.featured) : projects;

  return (
    <section id="projects" style={{ position: "relative", padding: "8rem 0", background: "#0a0a0a", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "3rem", right: "2rem", fontFamily: "var(--font-syne),sans-serif", fontWeight: 800, fontSize: "clamp(4rem,12vw,8rem)", color: "#1a1a1a", lineHeight: 1, pointerEvents: "none", userSelect: "none" }}>03</div>

      <div className="section-inner">
        <div className="sec-label">
          <span style={{ fontFamily: "var(--font-dm-mono),monospace", fontSize: "0.7rem", color: "#caff33", textTransform: "uppercase", letterSpacing: "0.15em" }}> // 03</span>
          <span style={{ height: "1px", background: "#242424", width: "60px", display: "block" }} />
          <span style={{ fontFamily: "var(--font-dm-mono),monospace", fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "#888" }}>Projects</span>
        </div>

        <div className="proj-header">
          <h2 style={{ fontFamily: "var(--font-syne),sans-serif", fontWeight: 800, fontSize: "clamp(1.8rem,4vw,3.5rem)", color: "#f0ede6" }}>
            Selected <span style={{ color: "#caff33" }}>work</span>
          </h2>
          <div style={{ display: "flex", gap: "0.5rem" }}>
            {(["all","featured"] as const).map(f => (
              <button key={f} onClick={() => setFilter(f)}
                style={{ fontFamily: "var(--font-dm-mono),monospace", fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.1em", padding: "0.4rem 1rem", border: "1px solid", cursor: "none", transition: "all 0.3s", borderColor: filter === f ? "#caff33" : "#242424", background: filter === f ? "#caff33" : "transparent", color: filter === f ? "#0a0a0a" : "#888" }}
              >{f}</button>
            ))}
          </div>
        </div>

        <div className="projects-grid">
          {displayed.map((p) => {
            const h = hovered === p.id;
            return (
              <div key={p.id}
                onMouseEnter={() => setHovered(p.id)}
                onMouseLeave={() => setHovered(null)}
                style={{ position: "relative", background: h ? "#0f0f0f" : "#0a0a0a", padding: "2rem", overflow: "hidden", transition: "background 0.3s", display: "flex", flexDirection: "column", gap: "1rem", cursor: "default" }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontFamily: "var(--font-dm-mono),monospace", fontSize: "0.65rem", color: "#555" }}>{p.id}</span>
                  <span style={{ fontFamily: "var(--font-dm-mono),monospace", fontSize: "0.58rem", textTransform: "uppercase", letterSpacing: "0.1em", padding: "0.2rem 0.6rem", border: "1px solid", transition: "all 0.3s", borderColor: h ? p.color : "transparent", color: h ? p.color : "#555" }}>{p.cat}</span>
                </div>
                <div style={{ fontFamily: "var(--font-syne),sans-serif", fontWeight: 800, fontSize: "clamp(1.1rem,2vw,1.4rem)", color: h ? p.color : "#f0ede6", transition: "color 0.3s", lineHeight: 1.1 }}>{p.title}</div>
                <p style={{ fontFamily: "var(--font-dm-mono),monospace", fontSize: "0.73rem", color: "#888", lineHeight: 1.75, flex: 1, display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{p.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
                  {p.tech.map(t => <span key={t} style={{ fontFamily: "var(--font-dm-mono),monospace", fontSize: "0.6rem", color: "#555", border: "1px solid #1a1a1a", padding: "0.15rem 0.5rem", background: "#111" }}>{t}</span>)}
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #1a1a1a", paddingTop: "1rem", opacity: h ? 1 : 0, transform: h ? "translateY(0)" : "translateY(8px)", transition: "all 0.35s ease" }}>
                  <a href={p.title} style={{ fontFamily: "var(--font-dm-mono),monospace", fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#caff33", textDecoration: "none" }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#f0ede6")} onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#caff33")}>Live ↗</a>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <span style={{ fontFamily: "var(--font-dm-mono),monospace", fontSize: "0.6rem", color: "#555" }}>{p.year}</span>
                    <span style={{ width: "1px", height: "12px", background: "#242424" }} />
                    <a href="#" style={{ fontFamily: "var(--font-dm-mono),monospace", fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#888", textDecoration: "none" }}
                      onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#f0ede6")} onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#888")}>GitHub →</a>
                  </div>
                </div>
                <div style={{ position: "absolute", bottom: 0, left: 0, height: "2px", background: p.color, width: h ? "100%" : "0%", transition: "width 0.5s ease" }} />
                <div style={{ position: "absolute", top: 0, right: 0, width: "120px", height: "120px", background: `radial-gradient(circle at top right,${p.color}12,transparent 70%)`, opacity: h ? 1 : 0, transition: "opacity 0.4s", pointerEvents: "none" }} />
              </div>
            );
          })}
        </div>

        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <a href="https://github.com/wajji01" target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", fontFamily: "var(--font-dm-mono),monospace", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.12em", color: "#888", textDecoration: "none", transition: "color 0.3s" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#caff33")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#888")}
          >
            <span style={{ width: "24px", height: "1px", background: "currentColor", display: "inline-block" }} />
            View all on GitHub
            <span style={{ width: "24px", height: "1px", background: "currentColor", display: "inline-block" }} />
          </a>
        </div>
      </div>
    </section>
  );
}