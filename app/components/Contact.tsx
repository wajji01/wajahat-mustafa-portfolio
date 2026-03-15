"use client";

import { useState, FormEvent, useRef } from "react";
import emailjs from "@emailjs/browser";

// ─── Replace these 3 values after EmailJS setup ───────────────────────────
const EMAILJS_SERVICE_ID  = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const EMAILJS_PUBLIC_KEY  = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;
// ──────────────────────────────────────────────────────────────────────────

const socials = [
  { icon: "GH", label: "GitHub",   handle: "@wajahat-dev",    href: "https://github.com/wajji01"   },
  { icon: "LI", label: "LinkedIn", handle: "Wajahat Mustafa", href: "https://www.linkedin.com/in/wajahat-mustafa-894a50162/" },
  { icon: "TW", label: "Twitter",  handle: "@wajahat_dev",    href: "https://twitter.com"  },
];

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [form,    setForm]    = useState({ name: "", email: "", message: "" });
  const [status,  setStatus]  = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [focused, setFocused] = useState<string | null>(null);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("sending");

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus("sent");
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  const inputStyle = (field: string): React.CSSProperties => ({
    width: "100%",
    background: "transparent",
    border: "none",
    borderBottom: `1px solid ${focused === field ? "#caff33" : "#242424"}`,
    padding: "0.75rem 0",
    fontFamily: "var(--font-dm-mono), monospace",
    fontSize: "0.82rem",
    color: "#f0ede6",
    outline: "none",
    transition: "border-color 0.3s",
  });

  return (
    <section
      id="contact"
      style={{ position: "relative", padding: "8rem 0", background: "#0d0d0d", overflow: "hidden" }}
    >
      {/* Big BG number */}
      <div style={{
        position: "absolute", top: "3rem", right: "2rem",
        fontFamily: "var(--font-syne), sans-serif", fontWeight: 800,
        fontSize: "clamp(4rem, 12vw, 8rem)", color: "#1a1a1a",
        lineHeight: 1, pointerEvents: "none", userSelect: "none",
      }}>04</div>

      {/* Glow */}
      <div style={{ position: "absolute", top: "50%", right: 0, width: "320px", height: "320px", background: "rgba(202,255,51,0.04)", filter: "blur(80px)", borderRadius: "50%", transform: "translateY(-50%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem", position: "relative", zIndex: 1 }}>

        {/* Section label */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "3.5rem" }}>
          <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: "0.7rem", color: "#caff33", textTransform: "uppercase", letterSpacing: "0.15em" }}> // 04</span>
          <span style={{ height: "1px", background: "#242424", width: "60px", display: "block" }} />
          <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "#888" }}>Contact</span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "5rem", alignItems: "start" }}>

          {/* ── Left: Info ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h2 style={{ fontFamily: "var(--font-syne), sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#f0ede6", lineHeight: 1.2 }}>
              Let&apos;s build something{" "}
              <span style={{ color: "#caff33" }}>great together</span>
            </h2>

            <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: "0.82rem", color: "#888", lineHeight: 1.85, maxWidth: "400px" }}>
              Have a project in mind? Looking for a developer to join your team? Or just want to say hello? My inbox is always open.
            </p>

            <a
              href="mailto:wajahatmustafa1234@gmail.com"
              style={{ display: "inline-flex", alignItems: "center", gap: "1rem", fontFamily: "var(--font-dm-mono), monospace", fontSize: "0.82rem", color: "#f0ede6", textDecoration: "none", transition: "color 0.3s" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#caff33")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#f0ede6")}
            >
              <span style={{ width: "32px", height: "1px", background: "#caff33", display: "inline-block", flexShrink: 0 }} />
              wajahatmustafa1234@gmail.com
            </a>

            {/* Socials */}
            <div>
              <div style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: "0.6rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "#555", marginBottom: "1rem" }}>
                Find me on
              </div>
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "0.75rem 0", borderBottom: "1px solid #1a1a1a", textDecoration: "none", transition: "border-color 0.3s", cursor: "none" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderBottomColor = "rgba(202,255,51,0.4)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderBottomColor = "#1a1a1a")}
                >
                  <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: "0.7rem", color: "#caff33", width: "2rem", flexShrink: 0 }}>{s.icon}</span>
                  <div>
                    <div style={{ fontFamily: "var(--font-syne), sans-serif", fontWeight: 600, fontSize: "0.85rem", color: "#f0ede6" }}>{s.label}</div>
                    <div style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: "0.65rem", color: "#555" }}>{s.handle}</div>
                  </div>
                  <span style={{ marginLeft: "auto", color: "#555" }}>→</span>
                </a>
              ))}
            </div>
          </div>

          {/* ── Right: Form ── */}
          <div>
            {status === "sent" ? (
              <div style={{ textAlign: "center", padding: "3rem 2rem", border: "1px solid rgba(202,255,51,0.3)", background: "rgba(202,255,51,0.04)" }}>
                <div style={{ fontSize: "2.5rem", color: "#caff33", marginBottom: "1rem" }}>✓</div>
                <h3 style={{ fontFamily: "var(--font-syne), sans-serif", fontWeight: 700, fontSize: "1.5rem", color: "#f0ede6", marginBottom: "0.5rem" }}>Message Sent!</h3>
                <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: "0.78rem", color: "#888", marginBottom: "1.5rem" }}>
                  I'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setStatus("idle"); setForm({ name: "", email: "", message: "" }); }}
                  style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.1em", border: "1px solid #caff33", color: "#caff33", padding: "0.5rem 1.2rem", background: "transparent", cursor: "none", transition: "all 0.3s" }}
                  onMouseEnter={(e) => { const el = e.currentTarget; el.style.background = "#caff33"; el.style.color = "#0a0a0a"; }}
                  onMouseLeave={(e) => { const el = e.currentTarget; el.style.background = "transparent"; el.style.color = "#caff33"; }}
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>

                {/* Name */}
                <div>
                  <label style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: "0.6rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "#555", display: "block", marginBottom: "0.5rem" }}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="from_name"
                    required
                    placeholder="John Doe"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused(null)}
                    style={{ ...inputStyle("name") }}
                  />
                </div>

                {/* Email */}
                <div>
                  <label style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: "0.6rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "#555", display: "block", marginBottom: "0.5rem" }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="from_email"
                    required
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                    style={{ ...inputStyle("email") }}
                  />
                </div>

                {/* Message */}
                <div>
                  <label style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: "0.6rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "#555", display: "block", marginBottom: "0.5rem" }}>
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                    style={{ ...inputStyle("message"), resize: "none" }}
                  />
                </div>

                {/* Error message */}
                {status === "error" && (
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: "0.72rem", color: "#ff6b6b", padding: "0.75rem 1rem", border: "1px solid rgba(255,107,107,0.3)", background: "rgba(255,107,107,0.05)" }}>
                    ✕ Something went wrong. Please try again or email me directly.
                  </p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  style={{
                    width: "100%",
                    background: "#caff33",
                    color: "#0a0a0a",
                    border: "none",
                    fontFamily: "var(--font-dm-mono), monospace",
                    fontSize: "0.75rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    padding: "1rem",
                    cursor: status === "sending" ? "not-allowed" : "none",
                    fontWeight: 500,
                    transition: "all 0.3s",
                    opacity: status === "sending" ? 0.6 : 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                  }}
                  onMouseEnter={(e) => { if (status !== "sending") (e.currentTarget as HTMLElement).style.background = "#f0ede6"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "#caff33"; }}
                >
                  {status === "sending" ? (
                    <>
                      <span style={{
                        width: "14px", height: "14px",
                        border: "2px solid #0a0a0a",
                        borderTopColor: "transparent",
                        borderRadius: "50%",
                        display: "inline-block",
                        animation: "spin 0.7s linear infinite",
                      }} />
                      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
                      Sending...
                    </>
                  ) : (
                    "Send Message →"
                  )}
                </button>

                <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: "0.65rem", color: "#555", textAlign: "center" }}>
                  * I typically respond within 24 hours
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}