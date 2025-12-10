export default function loadMenu() {
  const container = document.createElement("div");
  container.classList.add("menu");

  container.innerHTML = `
    <ul>
      <li>Truffle Lobster Risotto</li>
      <p>Creamy Arborio rice infused with white truffle and topped with tender butter-poached lobster.</p>
      <li>Wagyu Medallions</li>
      <p>Wagyu beef seared to perfection and served with a rich red wine reduction.</p>
      <li>Citrus Blossom Sea Bass</li>
      <p>Pan-roasted sea bass finished with a fragrant citrus-blossom glaze and fresh herb accents.</p>
      <li>Velvet Chocolate Mousse</li>
      <p>Silky dark chocolate mousse layered with whipped crema and notes of vanilla bean.</p>
    </ul>`;

  return container;
}
