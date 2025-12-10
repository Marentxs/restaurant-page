export default function loadHome() {
  const container = document.createElement("div");
  container.classList.add("home");

  const title = document.createElement("h1");
  title.textContent = "La Lumiere Royale";

  const slogan = document.createElement("p");
  slogan.textContent = "Where elegance meets flavor";

  const description = document.createElement("p");
  description.textContent =
    "Nestled in the heart of the city, La Lumiere Royale blends luxury dining with innovative culinary arts Every dish is crafted with precision, passion and the finest of ingredients.";

  container.appendChild(title);
  container.appendChild(slogan);
  container.appendChild(description);

  return container;
}
