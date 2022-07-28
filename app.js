const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");
const mobileMenu = document.getElementById("mobile-menu");

menuIcon.addEventListener("click", (e) => {
  mobileMenu.classList.toggle("hidden");
});

mobileMenu.addEventListener("click", (e) => {
  mobileMenu.classList.add("hidden");
});
