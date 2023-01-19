const form = document.querySelector("footer form");
const footer = document.querySelector("footer");
const modalFooter = document.querySelector(".modal-footer");

console.log(footer.getBoundingClientRect());

form.addEventListener("submit", function () {
  const footerCoords = footer.getBoundingClientRect();
  modalFooter.style.top = footerCoords.top - footerCoords.height / 2 + "px";
  modalFooter.classList.remove("none");

  setTimeout(() => modalFooter.classList.add("none"), 5000);
});
