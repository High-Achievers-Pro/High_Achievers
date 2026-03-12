function init() {
  document.documentElement.classList.add("js");

  // Reveal on scroll
  const els = Array.from(document.querySelectorAll(".reveal"));
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12 }
    );
    for (const el of els) io.observe(el);
  } else {
    for (const el of els) el.classList.add("is-visible");
  }

  // Active nav link based on section in view
  const navLinks = Array.from(document.querySelectorAll(".nav a"));
  const sections = navLinks
    .map((a) => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);

  if (sections.length && "IntersectionObserver" in window) {
    const ioNav = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const id = `#${visible.target.id}`;
        for (const a of navLinks) {
          a.classList.toggle("is-active", a.getAttribute("href") === id);
        }
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: [0.1, 0.2, 0.35] }
    );
    for (const s of sections) ioNav.observe(s);
  }
}

// The page markup is injected into DOM after load. Wait for the custom event.
window.addEventListener("ha:ready", init, { once: true });

// Fallback: if markup is already present (no injection), run on DOM ready.
if (!document.querySelector("#app")) {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
}

