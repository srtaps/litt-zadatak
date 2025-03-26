const mainHeader = document.getElementById("header");
const toggleMenuButton = document.getElementById("open-menu");
const hamburgerIcon = document.querySelector("#open-menu svg");
const closeIcon = document.querySelector("#open-menu p");
const openFormButton = document.getElementById("form-button");
const popupForm = document.getElementById("form-popup");
const topScrollButton = document.getElementById("scroll-top");

toggleMenuButton.addEventListener("click", (e) => {
  e.preventDefault();

  mainHeader.classList.toggle("active-menu");
  hamburgerIcon.classList.toggle("hide");
  closeIcon.classList.toggle("hide");
});

openFormButton.addEventListener("click", (e) => {
  e.preventDefault();

  // let scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  // document.body.classList.toggle("no-scroll");
  // document.body.style.top = `-${scrollPosition}px`;

  popupForm.classList.toggle("popup-form--show");
});

topScrollButton.addEventListener("click", (e) => {
  e.preventDefault();

  window.scrollTo({ top: 0, behavior: "smooth" });
});
