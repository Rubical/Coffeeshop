function calcCartPrice() {
  const cartWrapper = document.querySelector(".cart-wrapper");
  const priceElements = cartWrapper.querySelectorAll(".price__currency");
  const totalPriceEl = document.querySelector(".total-price");
  const deliveryCost = document.querySelector(".delivery-cost");
  const cartDelivery = document.querySelector("[data-cart-delivery]");
  console.log(deliveryCost)

  let priceTotal = 0;

  priceElements.forEach(function (item) {
    const amountEl = item.closest(".cart-item").querySelector("[data-counter]");
    priceTotal += parseInt(item.innerText) * parseInt(amountEl.innerText);
  });

  totalPriceEl.innerText = priceTotal;

  if (priceTotal > 0) {
    cartDelivery.classList.remove("none");
  } else {
    cartDelivery.classList.add("none");
  }

  if (priceTotal >= 20) {
    deliveryCost.classList.add("free");
    deliveryCost.innerText = "free";
  } else {
    deliveryCost.classList.remove("free");
    deliveryCost.innerText = "10 $";
  }
}
