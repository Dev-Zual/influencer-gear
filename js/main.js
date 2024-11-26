const toggle = document.getElementById("toggle-menu");
const menu = document.getElementById("mobile-menu");
toggle.addEventListener("click", (e) => {
  menu.classList.toggle("show");
  if (menu.classList.contains("show")) {
    toggle.innerHTML = `<p style="font-size: 1.5rem;">✖</p>`; // Change to "exit" icon
  } else {
    toggle.innerHTML = ` <span></span><span></span>
            <span></span>`; // Change back to "menu" icon
  }

  e.stopPropagation();
});
document.addEventListener("click", (event) => {
  if (
    menu.classList.contains("show") &&
    !menu.contains(event.target) &&
    event.target !== toggle
  ) {
    menu.classList.remove("show");
    toggle.innerHTML = `<span></span>
            <span></span><span></span>`;
  }
});
