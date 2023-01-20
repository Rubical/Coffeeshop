const productsContainer = document.querySelector("#products-container");

getProducts();

async function getProducts() {
  const respone = await fetch("./js/basket/products.json");

  productsArray = await respone.json();
  renderProducts(productsArray);
}

function renderProducts(productsArray) {
  productsArray.forEach(function (item) {
    const productHTML = `
    <div class="product-card" data-id="${item.id}">
        <img
        src="./image/section-best-selling/${item.imgSrc}"
        alt="Double
        Espresso"
        />
        <small>#1 Selling</small>
        <h3 class="item-title">${item.title}</h3>
        <p>
                Amet minim mollit non deserunt dolor ullamco est sit aliqua
                dolor do amet sint. Velit officia consequat duis.
              </p>
              <div class="details-wrapper">
                <div class="items counter-wrapper">
                    <button class="items__control" data-action="minus">-</button>
                    <div class="items__current" data-counter="">1</div>
                    <button class="items__control" data-action="plus">+</button>
                </div>

                <div class="price">
                    <div class="price__weight">${item.quantity} ml.</div>
                    <div class="price__currency">${item.price} $</div>
                </div>
            </div>
            <button data-cart="" type="button" class="btn">Add to cart</button>
            </div>
        `;
    productsContainer.insertAdjacentHTML("beforeend", productHTML);
  });
}
