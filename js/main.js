/*
 * LIST — configuración del sitio.
 * Reemplazá el número de ejemplo por tu WhatsApp internacional:
 * Argentina: código 54 + característica + número, sin +, espacios ni guiones.
 * Ejemplo de formato: 5493511234567
 */
const LIST_CONFIG = {
  whatsapp: "5493585628276",
  whatsappMessage: "Hola, quiero conocer la aplicación List y hacer una consulta."
};

document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuButton && navLinks) {
    menuButton.addEventListener("click", () => {
      const isOpen = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!isOpen));
      menuButton.setAttribute("aria-label", isOpen ? "Abrir menú" : "Cerrar menú");
      navLinks.classList.toggle("open", !isOpen);
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Abrir menú");
      });
    });
  }

  // Conecta todos los botones de contacto con el WhatsApp configurado arriba.
  document.querySelectorAll(".contact-link").forEach((link) => {
    if (/^\d{10,15}$/.test(LIST_CONFIG.whatsapp)) {
      const url = new URL(`https://wa.me/${LIST_CONFIG.whatsapp}`);
      url.searchParams.set("text", LIST_CONFIG.whatsappMessage);
      link.href = url.toString();
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    } else {
      link.href = "#contacto";
      link.addEventListener("click", (event) => {
        event.preventDefault();
        alert("Para activar WhatsApp, editá LIST_CONFIG.whatsapp en js/main.js y colocá tu número con código de país, sin espacios ni signos.");
      });
    }
  });

  // Año automático en el pie de página.
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Aparición progresiva de elementos al desplazarse.
  const revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }
});
