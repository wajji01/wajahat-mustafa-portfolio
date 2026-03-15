export default function Footer() {
  const year = new Date().getFullYear();
  const nav = ["About", "Skills", "Projects", "Contact"];
  const scroll = (id: string) => document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer style={{ borderTop: "1px solid #1a1a1a", background: "#111" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "3rem 2rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1.5rem" }}>
        {/* Brand */}
        <div>
          <div style={{ fontFamily: "var(--font-syne),sans-serif", fontWeight: 800, fontSize: "1.5rem", color: "#f0ede6" }}>
            WM<span style={{ color: "#caff33" }}>.</span>
          </div>
          <div style={{ fontFamily: "var(--font-dm-mono),monospace", fontSize: "0.65rem", color: "#555", marginTop: "0.2rem" }}>Full Stack Web Developer</div>
        </div>

        {/* Nav */}
        <nav style={{ display: "flex", gap: "1.5rem" }}>
          {nav.map((item) => (
            <button key={item} onClick={() => scroll(item)}
              style={{ fontFamily: "var(--font-dm-mono),monospace", fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#888", background: "none", border: "none", cursor: "none", transition: "color 0.3s" }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#caff33")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#888")}
            >{item}</button>
          ))}
        </nav>

        {/* Socials */}
        <div style={{ display: "flex", gap: "0.5rem" }}>
          {["GH", "LI", "TW"].map((s) => (
            <a key={s} href="#"
              style={{ width: "36px", height: "36px", border: "1px solid #242424", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-dm-mono),monospace", fontSize: "0.65rem", color: "#888", textDecoration: "none", transition: "all 0.3s", cursor: "none" }}
              onMouseEnter={(e) => { const el = e.currentTarget; el.style.borderColor = "#caff33"; el.style.color = "#caff33"; el.style.background = "rgba(202,255,51,0.05)"; }}
              onMouseLeave={(e) => { const el = e.currentTarget; el.style.borderColor = "#242424"; el.style.color = "#888"; el.style.background = "transparent"; }}
            >{s}</a>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid #1a1a1a" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "1rem 2rem", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem" }}>
          <p style={{ fontFamily: "var(--font-dm-mono),monospace", fontSize: "0.65rem", color: "#555" }}>
            © {year} Wajahat Mustafa. Crafted with <span style={{ color: "#caff33" }}>♥</span> in Karachi, PK.
          </p>
          <p style={{ fontFamily: "var(--font-dm-mono),monospace", fontSize: "0.65rem", color: "#555" }}>
            Built with <span style={{ color: "rgba(240,237,230,0.5)" }}>Next.js</span> & <span style={{ color: "rgba(240,237,230,0.5)" }}>Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}