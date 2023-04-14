const HTML = document.getElementById("1");
const buttonSun = document.querySelector("#sun");
const buttonMoon = document.querySelector("#moon");

function changePageModeOnDark() {
  HTML.classList.remove("light");
  HTML.classList.add("dark");
}

function changePageModeOnLight() {
  HTML.classList.remove("dark");
  HTML.classList.add("light");
}

buttonMoon.addEventListener("click", changePageModeOnDark);
buttonSun.addEventListener("click", changePageModeOnLight);
