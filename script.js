const hamburger = document.querySelector("#hamburger");
const navLinks = document.querySelector("#navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("open");
});

// ========== BOUTON REMONTER ==========
const backToTop = document.querySelector(".back-to-top");

// Afficher le bouton quand on scrolle (dès 100px)
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    // ← Apparait plus tôt (100px au lieu de 300px)
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

// Scroll fluide vers le haut (déjà géré par CSS scroll-behavior: smooth)
backToTop.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
