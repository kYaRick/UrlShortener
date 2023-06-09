/* menu */

const hamburgerMenu = document.querySelector(".hamburger_menu");
const navigation = document.querySelector("nav");

hamburgerMenu.addEventListener("click", () => {
  navigation.classList.toggle("open");
  hamburgerMenu.classList.toggle("cross");
});

/* button write to support */

let writeToSupport = document.querySelector(
  'button[data-lang="write_to_support"]'
);

let supportPageUrl = "";

if (window.location.pathname === "/index.html") {
  supportPageUrl = "./support_page/index.html";
} else if (window.location.pathname === "../index.html") {
  supportPageUrl = "./support_page/index.html";
} else {
  supportPageUrl = "../support_page/index.html";
}

writeToSupport.addEventListener("click", function () {
  window.location.href = supportPageUrl;
});
