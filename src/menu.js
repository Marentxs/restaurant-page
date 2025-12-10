export default function loadMenu() {
  const container = document.createElement("div");
  container.classList.add("menu");

  container.innerHTML = `<h1>Menu</h1>
    <ul>
      <li>Truffle Lobster Risotto</li>
      <li>Wagyu Medallions</li>
      <li>Citrus Blossom Sea Bass</li>
      <li>Velvet Chocolate Mousse</li>
    </ul>`;

  return container;
}
