export default function loadHome() {
  const container = document.createElement("div");
  container.classList.add("home");

  container.innerHTML = `<h1>La Lumiere Royale</h1>
  <p id="slogan"><i>Where elegance meets flavor</i></p>`;

  return container;
}
