const mainHeader = document.getElementById("header");
const toggleMenuButton = document.getElementById("open-menu");
const hamburgerIcon = document.querySelector("#open-menu svg");
const closeIcon = document.querySelector("#open-menu p");
const topScrollButton = document.getElementById("scroll-top");

toggleMenuButton.addEventListener("click", (e) => {
  e.preventDefault();

  document.body.classList.toggle("no-scroll");
  mainHeader.classList.toggle("active-menu");
  hamburgerIcon.classList.toggle("hide");
  closeIcon.classList.toggle("hide");
});

topScrollButton.addEventListener("click", (e) => {
  e.preventDefault();

  window.scrollTo({ top: 0, behavior: "smooth" });
});

let popupForm = document.getElementById("form-popup");

if (popupForm) {
  const openFormButton = document.getElementById("form-button");
  const closeFormButtons = document.querySelectorAll(".form-close");
  const heroScrollDown = document.getElementById("hero-scroll");
  const nextSection = document.querySelector("section.jobs");

  // let scrollPosition = 0;

  function openForm() {
    // scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    document.body.classList.add("no-scroll");
    // document.body.style.top = `-${scrollPosition}px`;
    popupForm.style.transform = "scale(1)";
    popupForm.classList.add("popup-form--show");
  }

  function closeForm() {
    if (!mainHeader.classList.contains("active-menu")) {
      document.body.classList.remove("no-scroll");
    }

    // window.scrollTo(0, scrollPosition);
    popupForm.style.transform = "scale(0)";
    setTimeout(() => {
      popupForm.classList.remove("popup-form--show");
    }, 500);
  }

  setTimeout(openForm, 3000);

  openFormButton.addEventListener("click", (e) => {
    e.preventDefault();

    openForm();
  });

  closeFormButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();

      closeForm();
    });
  });

  popupForm.addEventListener("click", (e) => {
    e.preventDefault();

    if (e.target === popupForm) {
      closeForm();
    }
  });

  heroScrollDown.addEventListener("click", (e) => {
    e.preventDefault();

    nextSection.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  });
}

let swiperElement = document.querySelector(".swiper");

if (swiperElement) {
  const swiper = new Swiper(".swiper", {
    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}
