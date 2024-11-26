const toggle = document.getElementById("toggle-menu");
const menu = document.getElementById("mobile-menu");
toggle.addEventListener("click", () => {
  menu.classList.toggle("show");
});
