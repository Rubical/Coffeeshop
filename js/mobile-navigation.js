const mobileNav = document.querySelector(".modal-box");
const body = document.body;
const btnOpen = document.querySelector("[data-action = open]");
const btnClose = document.querySelector("[data-action = close]");

body.addEventListener("click", function (event) {
  if (event.target == btnOpen ) {
    const btnOpenCoords = btnOpen.getBoundingClientRect();
    btnClose.style.position = "fixed";
    btnClose.style.left = btnOpenCoords.left + "px";
    mobileNav.classList.remove("none");
    disableScroll();
  }


  else if (event.target == btnClose ) {
    mobileNav.classList.add("none");
    enableScroll();
  }
  
});

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
