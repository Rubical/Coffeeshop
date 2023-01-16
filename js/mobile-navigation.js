const mobileNavBtn = document.querySelector("#navOpen");
const body = document.querySelector("body");
const mobileNav = document.querySelector(".modal-box");

mobileNavBtn.addEventListener("click", function () {
  const mobileNavOpenBtn = mobileNavBtn.querySelector("img");

  body.classList.toggle("blur");

  if (body.classList.contains("blur")) {
    mobileNavOpenBtn.src = "./image/icons/nav-close.svg";
    mobileNav.classList.remove("none");
  } else {
    mobileNavOpenBtn.src = "./image/icons/nav-open.svg";
    mobileNav.classList.add("none");
  }
});
