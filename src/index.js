import "./styles.css";
import loadHome from "./home.js";
import loadMenu from "./menu";
import loadAbout from "./about";

const content = document.getElementById("content");

function setPage(loader) {
  content.innerHTML = "";
  content.appendChild(loader());
}

setPage(loadHome);

document.querySelector("nav").addEventListener("click", (e) => {
  if (e.target.tagName !== "BUTTON") return;

  switch (e.target.textContent) {
    case "Home":
      setPage(loadHome);
      break;
    case "Menu":
      setPage(loadMenu);
      break;
    case "About":
      setPage(loadAbout);
      break;
  }
});
