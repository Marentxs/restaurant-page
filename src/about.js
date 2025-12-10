export default function loadAbout() {
  const container = document.createElement("div");
  container.classList.add("about");

  container.innerHTML = ` <h1>About Us</h1>
  <p>Phone: 321 3691626</p>
  <p>Address: La Lumiere Royale, Rachel, Nevada, off State Route 375</p>`;

  return container;
}
