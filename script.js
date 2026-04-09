const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");
const navLinks = document.querySelectorAll(".main-nav a");
const brandLink = document.querySelector(".brand");
const year = document.getElementById("year");
const whatsappForm = document.getElementById("whatsappForm");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

if (brandLink) {
  brandLink.addEventListener("click", (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (nav) {
      nav.classList.remove("open");
    }
    if (toggle) {
      toggle.setAttribute("aria-expanded", "false");
    }
  });
}

if (whatsappForm) {
  whatsappForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(whatsappForm);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const service = String(data.get("service") || "").trim();
    const message = String(data.get("message") || "").trim();

    const text = [
      "Hello TPF Contractor LLC, I would like a consultation.",
      "",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Service: ${service}`,
      "Project details:",
      message,
    ].join("\n");

    const whatsappUrl = `https://wa.me/19393414199?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  });
}

const revealTargets = document.querySelectorAll(
  ".trust-grid article, .card, .project-card, .process-step, .faq-item, .contact-box, .contact-form, .gallery-grid img, .media-video-card"
);

if ("IntersectionObserver" in window && revealTargets.length) {
  revealTargets.forEach((item) => item.classList.add("reveal"));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  revealTargets.forEach((item) => observer.observe(item));
}
