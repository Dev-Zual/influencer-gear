const toggle = document.getElementById("toggle-menu");
const menu = document.getElementById("mobile-menu");
toggle.addEventListener("click", (e) => {
  menu.classList.toggle("show");
  e.stopPropagation();
});
document.addEventListener("click", (event) => {
  if (
    menu.classList.contains("show") &&
    !menu.contains(event.target) &&
    event.target !== toggle
  ) {
    menu.classList.remove("show");
  }
});
