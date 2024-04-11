const HeaderNav = document.querySelector(".Header_nav");
const toggleMenu = document.querySelector(".toggle_menu");

toggleMenu.addEventListener("click", () => {
    HeaderNav.classList.toggle("open");
    toggleMenu.classList.toggle("open");
})