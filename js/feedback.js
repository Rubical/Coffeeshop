const form = document.querySelector("footer form");
const footer = document.querySelector("footer");
const modalFooter = document.querySelector(".modal-footer");
const modalFooterContainer = modalFooter.querySelector('.container')


form.addEventListener("submit", function (event) {
  event.preventDefault()
  modalFooter.classList.remove("none");
  modalFooterContainer.style.left = ((window.innerWidth - modalFooterContainer.offsetWidth)/2) + 'px'

  setTimeout(() => modalFooter.classList.add("none"), 4000);
});
