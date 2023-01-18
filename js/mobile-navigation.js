const mobileNav = document.querySelector(".modal-box");
const body = document.body;
const btnOpen = document.querySelector("[data-action = open]");
const btnClose = document.querySelector("[data-action = close]");

/* Mobile menu functional */

btnOpen.addEventListener("click", function () {
  showModal();
  disableScroll();
});

btnClose.addEventListener("click", function () {
  hideModal();
  enableScroll();
});

function showModal() {
  const btnOpenCoords = btnOpen.getBoundingClientRect();
  btnClose.style.position = "fixed";
  btnClose.style.left = btnOpenCoords.left + "px";
  mobileNav.classList.remove("none");
}

function hideModal() {
  mobileNav.classList.add("none");
}

function disableScroll() {
  let pagePosition = window.scrollY;
  document.body.classList.add("disable-scroll");
  document.body.dataset.position = pagePosition;
  document.body.style.top = -pagePosition + "px";
}

function enableScroll() {
  let pagePosition = parseInt(document.body.dataset.position, 10);
  document.body.style.top = "auto";
  document.body.classList.remove("disable-scroll");
  window.scroll({ top: pagePosition, left: 0 });
  document.body.removeAttribute("data-position");
}

/* Mobile menu navi*/

mobileNav.addEventListener("click", function (event) {
  if (event.target.dataset.location == "cafeMenu") {
    hideModal();
    enableScroll();
    cafeMenu.scrollIntoView({ block: "start", behavior: "smooth" });
  } else if (event.target.dataset.location == "download") {
    hideModal();
    enableScroll();
    download.scrollIntoView({ block: "center", behavior: "smooth" });
  } else if (event.target.dataset.location == "reviews") {
    hideModal();
    enableScroll();
    reviews.scrollIntoView({ block: "center", behavior: "smooth" });
  } else if (event.target.dataset.location == "contacts") {
    hideModal();
    enableScroll();
    contacts.scrollIntoView({ block: "start", behavior: "smooth" });
  }
});
