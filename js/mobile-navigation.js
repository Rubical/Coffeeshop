const overflowWrapper = document.querySelector(".overflow-wrapper");
const mobileNav = document.querySelector(".modal-box");
const body = document.querySelector("body");
const mobileNavOpenBtn = document.querySelector(".nav-open-svg");


body.addEventListener("click", function (event) {
  if (event.target.dataset.action === 'open' ||  event.target.dataset.action === 'close') {
  overflowWrapper.classList.toggle("blur");
  } 
    overflowWrapper.classList.contains("blur") 
    ?
      (mobileNavOpenBtn.src = "./image/icons/nav-close.svg",
      mobileNav.classList.remove("none"))
      
    : mobileNavOpenBtn.innerHTML = `img src="./image/icons/nav-close.svg" alt="" class="nav-open-svg`;
      mobileNav.classList.add("none");
    }
  );
