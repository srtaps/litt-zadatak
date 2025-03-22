const mainHeader = document.getElementById("header");
const toggleMenuButton = document.getElementById("open-menu");
const hamburgerIcon = document.querySelector("#open-menu svg");
const closeIcon = document.querySelector("#open-menu p");

toggleMenuButton.addEventListener("click", (e) => {
  e.preventDefault();

  mainHeader.classList.toggle("active-menu");
  hamburgerIcon.classList.toggle("hide");
  closeIcon.classList.toggle("hide");
});
