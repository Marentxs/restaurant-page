export default function loadAbout() {
  const container = document.createElement("div");
  container.classList.add("about");

  container.innerHTML = `
  <p><strong>Phone:</strong> 321 3691626</p>
  <p><strong>Address:</strong> La Lumiere Royale, Rachel, Nevada, off State Route 375</p>
  <p><strong>Email:</strong> Lumiere@business.com`;

  return container;
}
