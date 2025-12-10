export default function loadHome() {
  const content = document.getElementById("content");
  const title = document.createElement("h1");
  title.textContent = "La Lumiere Royale";

  const slogan = document.createElement("p");
  slogan.textContent = "Where elegance meets flavor";

  const description = document.createElement("p");
  description.textContent =
    "Nestled in the heart of the city, La Lumiere Royale blends luxury dining with innovative culinary arts Every dish is crafted with precision, passion and the finest of ingredients.";

  const image = document.createElement("img");
  image.src =
    "https://images.unsplash.com/photo-1512132411229-c30391241dd8?q=80&w=2500&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  content.appendChild(title);
  content.appendChild(slogan);
  content.appendChild(description);
  content.appendChild(image);
}
