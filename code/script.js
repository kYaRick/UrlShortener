/* Menu */

const hamburgerMenu = document.querySelector(".hamburger_menu");
const navigation = document.querySelector("nav");

hamburgerMenu.addEventListener("click", () => {
  navigation.classList.toggle("open");
  hamburgerMenu.classList.toggle("cross");
});
