const cafeMenu = document.querySelector("#cafeMenu");
const download = document.querySelector("#download");
const reviews = document.querySelector("#reviews");
const contacts = document.querySelector("#contacts");

const navBar = document.querySelector(".navbar-nav");

navBar.addEventListener("click", function (event) {
  if (event.target.dataset.location == "cafeMenu") {
    cafeMenu.scrollIntoView({ block: "start", behavior: "smooth" });
  } else if (event.target.dataset.location == "download") {
    download.scrollIntoView({ block: "end", behavior: "smooth" });
  } else if (event.target.dataset.location == "reviews") {
    reviews.scrollIntoView({ block: "start", behavior: "smooth" });
  } else if (event.target.dataset.location == "contacts") {
    contacts.scrollIntoView({ block: "start", behavior: "smooth" });
  }
});
