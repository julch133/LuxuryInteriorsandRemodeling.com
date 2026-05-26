const menuToggle = document.getElementById("menuToggle");
const drawer = document.getElementById("drawer");

if (menuToggle && drawer) {
  menuToggle.addEventListener("click", () => {
    const isOpen = drawer.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  drawer.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      drawer.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}
