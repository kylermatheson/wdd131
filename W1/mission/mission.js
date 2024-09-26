const themeSelector = document.querySelector("select");
const logoImage = document.querySelector("img");
function changeTheme() {

  if (themeSelector.value === "Dark") {
    document.body.classList.add("dark");
    logoImage.setAttribute("src", "byui-logo_white.png");
  } else {
    document.body.classList.remove("dark");
    logoImage.setAttribute("src", "byui-logo_blue.webp");
  }
}
themeSelector.addEventListener('change', changeTheme);
