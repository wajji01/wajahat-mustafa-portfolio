"use client";

export default function About() {
  return (
    <section id="about" style={{ position: "relative", padding: "8rem 0", overflow: "hidden", background: "#0a0a0a" }}>
      <div style={{ position: "absolute", top: "3rem", right: "2rem", fontFamily: "var(--font-syne),sans-serif", fontWeight: 800, fontSize: "clamp(4rem,12vw,8rem)", color: "#1a1a1a", lineHeight: 1, pointerEvents: "none", userSelect: "none" }}>01</div>

      <div className="section-inner">
        <div className="sec-label">
          <span style={{ fontFamily: "var(--font-dm-mono),monospace", fontSize: "0.7rem", color: "#caff33", textTransform: "uppercase", letterSpacing: "0.15em" }}> // 01</span>
          <span style={{ height: "1px", background: "#242424", width: "60px", display: "block" }} />
          <span style={{ fontFamily: "var(--font-dm-mono),monospace", fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "#888" }}>About</span>
        </div>

        <div className="two-col">

          {/* Left: Photo */}
          <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", top: -10, left: -10, right: 10, bottom: 10, border: "1px solid rgba(202,255,51,0.18)", pointerEvents: "none", zIndex: 0 }} />
            <div style={{ position: "absolute", top: -20, left: -20, right: 20, bottom: 20, border: "1px solid rgba(202,255,51,0.08)", pointerEvents: "none", zIndex: 0 }} />

            <div style={{ position: "relative", background: "#111", aspectRatio: "4/5", overflow: "hidden", zIndex: 1 }}>
              <img
                src="/wajahat.png"
                alt="Wajahat Mustafa"
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block", transition: "transform 0.6s ease" }}
                onMouseEnter={(e) => { (e.target as HTMLImageElement).style.transform = "scale(1.04)"; }}
                onMouseLeave={(e) => { (e.target as HTMLImageElement).style.transform = "scale(1)"; }}
              />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "40%", background: "linear-gradient(to top,rgba(10,10,10,0.95),transparent)", zIndex: 2, pointerEvents: "none" }} />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 3, borderTop: "1px solid rgba(202,255,51,0.2)", padding: "1rem 1.5rem" }}>
                <div style={{ fontFamily: "var(--font-syne),sans-serif", fontWeight: 700, color: "#f0ede6", fontSize: "1.1rem" }}>Wajahat Mustafa</div>
                <div style={{ fontFamily: "var(--font-dm-mono),monospace", fontSize: "0.7rem", color: "#caff33", marginTop: "0.25rem" }}>Full Stack Web Developer</div>
              </div>
            </div>

            <div className="facts-grid">
              {[
                { label: "Location",   value: "Karachi, PK",  lime: false },
                { label: "Experience", value: "3+ Years",      lime: false },
                { label: "Focus",      value: "Web Apps",      lime: false },
                { label: "Status",     value: "Open to Work",  lime: true  },
              ].map((f) => (
                <div key={f.label}
                  style={{ background: "#111", border: "1px solid #242424", padding: "0.75rem 1rem", transition: "border-color 0.3s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(202,255,51,0.3)")}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#242424")}
                >
                  <div style={{ fontFamily: "var(--font-dm-mono),monospace", fontSize: "0.6rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "#555", marginBottom: "0.3rem" }}>{f.label}</div>
                  <div style={{ fontFamily: "var(--font-dm-mono),monospace", fontSize: "0.75rem", color: f.lime ? "#caff33" : "#f0ede6" }}>{f.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Text */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <h2 style={{ fontFamily: "var(--font-syne),sans-serif", fontWeight: 800, fontSize: "clamp(1.8rem,4vw,3.5rem)", color: "#f0ede6", lineHeight: 1.15 }}>
              Turning ideas into <span style={{ color: "#caff33" }}>digital reality</span>
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
              {[
                <>Hey — I&apos;m Wajahat. A passionate full stack developer with 3+ years of experience building web applications that don&apos;t just work — they <span style={{ color: "#f0ede6" }}>perform</span>.</>,
                <>I specialize in: <span style={{ color: "#caff33" }}>React</span>, <span style={{ color: "#caff33" }}>Next.js</span>, <span style={{ color: "#caff33" }}>Node.js</span>, and <span style={{ color: "#caff33" }}>TypeScript</span>. I care deeply about clean architecture and shipping products users love.</>,
                <>When not coding, I&apos;m exploring new technologies, contributing to open source, or thinking about how design and engineering intersect.</>,
              ].map((text, i) => (
                <p key={i} style={{ fontFamily: "var(--font-dm-mono),monospace", fontSize: "clamp(0.78rem,1.5vw,0.82rem)", color: "#888", lineHeight: 1.9 }}>{text}</p>
              ))}
            </div>

            <div className="values-grid">
              {[
                { icon: "◈", title: "Clean Code",  desc: "Readable, maintainable, scalable" },
                { icon: "◎", title: "Performance", desc: "Optimized for speed & UX"         },
                { icon: "◆", title: "Delivery",    desc: "On time, every time"              },
              ].map((v) => (
                <div key={v.title}
                  style={{ border: "1px solid #242424", padding: "1rem", transition: "all 0.3s", cursor: "default" }}
                  onMouseEnter={(e) => { const el = e.currentTarget; el.style.borderColor = "rgba(202,255,51,0.4)"; el.style.background = "rgba(202,255,51,0.02)"; }}
                  onMouseLeave={(e) => { const el = e.currentTarget; el.style.borderColor = "#242424"; el.style.background = "transparent"; }}
                >
                  <div style={{ fontFamily: "var(--font-dm-mono),monospace", fontSize: "1.1rem", color: "#caff33", marginBottom: "0.5rem" }}>{v.icon}</div>
                  <div style={{ fontFamily: "var(--font-syne),sans-serif", fontWeight: 600, fontSize: "0.85rem", color: "#f0ede6", marginBottom: "0.25rem" }}>{v.title}</div>
                  <div style={{ fontFamily: "var(--font-dm-mono),monospace", fontSize: "0.65rem", color: "#555", lineHeight: 1.5 }}>{v.desc}</div>
                </div>
              ))}
            </div>

            <a href="mailto:wajahatmustafa1234@gmail.com"
              style={{ fontFamily: "var(--font-dm-mono),monospace", fontSize: "0.82rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#caff33", textDecoration: "none", transition: "color 0.3s", paddingTop: "0.5rem" }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#f0ede6")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#caff33")}
            >wajahatmustafa1234@gmail.com</a>
          </div>
        </div>
      </div>
    </section>
  );
}