document.addEventListener("DOMContentLoaded", () => {
  const burger = document.getElementById("burger");
  const navLinks = document.getElementById("nav-links");

  if (burger && navLinks) {
    burger.addEventListener("click", () => {
      navLinks.classList.toggle("hidden");
      burger.classList.toggle("active");
    });
  }

  burger.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
