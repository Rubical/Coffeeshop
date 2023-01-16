const overflowWrapper = document.querySelector(".overflow-wrapper");
const mobileNav = document.querySelector(".modal-box");
const body = document.querySelector("body");

body.addEventListener("click", function (event) {
  if (event.target == document.querySelectorAll("#navOpen")) {
    const mobileNavOpenBtn = document.querySelector(".nav-open-svg");

    overflowWrapper.classList.toggle("blur");

    if (overflowWrapper.classList.contains("blur")) {
      mobileNavOpenBtn.src = "./image/icons/nav-close.svg";
      mobileNav.classList.remove("none");
    } else {
      mobileNavOpenBtn.src = "./image/icons/nav-open.svg";
      mobileNav.classList.add("none");
    }
  }
});
