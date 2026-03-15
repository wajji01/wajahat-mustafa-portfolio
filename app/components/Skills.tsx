"use client";
import { useEffect, useRef } from "react";

const cats = [
  { title: "Frontend", icon: "◈", skills: [{ n: "React / Next.js", p: 92 }, { n: "TypeScript", p: 88 }, { n: "Tailwind CSS", p: 95 }, { n: "HTML / CSS", p: 96 }] },
  { title: "Backend",  icon: "◎", skills: [{ n: "Node.js / Express", p: 87 }, { n: "REST APIs", p: 90 }, { n: "GraphQL", p: 75 }, { n: "Python / FastAPI", p: 70 }] },
  { title: "Database", icon: "◆", skills: [{ n: "PostgreSQL", p: 83 }, { n: "MongoDB", p: 85 }, { n: "Redis", p: 72 }, { n: "Prisma ORM", p: 80 }] },
];
const tags = ["Next.js","React","TypeScript","Node.js","Express","PostgreSQL","MongoDB","Redis","Docker","AWS","Vercel","Git","GraphQL","Tailwind","Prisma","JWT","CI/CD","REST API","Linux","Figma"];

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.querySelectorAll<HTMLElement>(".sbar").forEach((b) => { b.style.width = b.dataset.w ?? "0%"; });
        }
      });
    }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" ref={ref} style={{ position: "relative", padding: "8rem 0", background: "#0d0d0d", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "3rem", right: "2rem", fontFamily: "var(--font-syne),sans-serif", fontWeight: 800, fontSize: "clamp(4rem,12vw,8rem)", color: "#1a1a1a", lineHeight: 1, pointerEvents: "none", userSelect: "none" }}>02</div>

      <div className="section-inner">
        <div className="sec-label">
          <span style={{ fontFamily: "var(--font-dm-mono),monospace", fontSize: "0.7rem", color: "#caff33", textTransform: "uppercase", letterSpacing: "0.15em" }}> // 02</span>
          <span style={{ height: "1px", background: "#242424", width: "60px", display: "block" }} />
          <span style={{ fontFamily: "var(--font-dm-mono),monospace", fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "#888" }}>Skills</span>
        </div>

        <h2 style={{ fontFamily: "var(--font-syne),sans-serif", fontWeight: 800, fontSize: "clamp(1.8rem,4vw,3.5rem)", color: "#f0ede6", marginBottom: "0.75rem" }}>
          Technologies I <span style={{ color: "#caff33" }}>master</span>
        </h2>
        <p style={{ fontFamily: "var(--font-dm-mono),monospace", fontSize: "0.82rem", color: "#888", maxWidth: "460px", marginBottom: "3rem" }}>
          A curated stack built through real-world projects and continuous learning.
        </p>

        <div className="skills-grid">
          {cats.map((cat) => (
            <div key={cat.title}
              style={{ background: "#111", border: "1px solid #242424", padding: "1.5rem", transition: "border-color 0.3s" }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(202,255,51,0.3)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#242424")}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
                <span style={{ fontFamily: "var(--font-dm-mono),monospace", fontSize: "1.1rem", color: "#caff33" }}>{cat.icon}</span>
                <span style={{ fontFamily: "var(--font-syne),sans-serif", fontWeight: 700, color: "#f0ede6", fontSize: "1rem" }}>{cat.title}</span>
              </div>
              {cat.skills.map((s) => (
                <div key={s.n} style={{ marginBottom: "1.2rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.4rem" }}>
                    <span style={{ fontFamily: "var(--font-dm-mono),monospace", fontSize: "0.72rem", color: "#888" }}>{s.n}</span>
                    <span style={{ fontFamily: "var(--font-dm-mono),monospace", fontSize: "0.72rem", color: "#caff33" }}>{s.p}%</span>
                  </div>
                  <div style={{ height: "1px", background: "#242424", position: "relative", overflow: "hidden" }}>
                    <div className="sbar" data-w={`${s.p}%`}
                      style={{ position: "absolute", left: 0, top: 0, height: "100%", background: "#caff33", width: "0%", transition: "width 1.2s cubic-bezier(0.16,1,0.3,1)" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div>
          <div style={{ fontFamily: "var(--font-dm-mono),monospace", fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "#555", marginBottom: "1rem" }}>Full Tech Stack</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {tags.map((t) => (
              <span key={t}
                style={{ fontFamily: "var(--font-dm-mono),monospace", fontSize: "0.65rem", border: "1px solid #242424", color: "#888", padding: "0.35rem 0.65rem", transition: "all 0.2s", cursor: "default" }}
                onMouseEnter={(e) => { const el = e.currentTarget; el.style.borderColor = "#caff33"; el.style.color = "#caff33"; el.style.background = "rgba(202,255,51,0.05)"; }}
                onMouseLeave={(e) => { const el = e.currentTarget; el.style.borderColor = "#242424"; el.style.color = "#888"; el.style.background = "transparent"; }}
              >{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}