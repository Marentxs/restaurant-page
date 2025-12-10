export default function loadHome() {
  const container = document.createElement("div");
  container.classList.add("home");

  container.innerHTML = `<h1>La Lumiere Royale</h1>
  <p>Where elegance meets flavor</p>
  <p>Nestled in the heart of the city, La Lumiere Royale blends luxury dining with innovative culinary arts Every dish is crafted with precision, passion and the finest of ingredients.;
  </p>`;

  return container;
}
