window.addEventListener("click", function (event) {
  if (event.target.dataset.action == "minus") {
    const parentNode = event.target.closest(".counter-wrapper");
    let counter = parentNode.querySelector("div[data-counter]");
    if (Number(counter.textContent) > 1) {
      counter.textContent = --counter.textContent;
    } else if (
      event.target.closest(".cart-wrapper") &&
      Number(counter.textContent) === 1
    ) {
      event.target.closest(".cart-item").remove();
    }
    toggleCartStatus();
    calcCartPrice();
  }

  if (event.target.dataset.action == "plus") {
    const parentNode = event.target.closest(".counter-wrapper");
    let counter = parentNode.querySelector("div[data-counter]");
    counter.textContent = ++counter.textContent;
    calcCartPrice();
  }
});
