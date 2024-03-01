"use scrict";
const burger = document.querySelector(".burger");
const headerUser = document.querySelector(".header__user");
const openMenu = document.querySelector(".header__bottom");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  openMenu.classList.toggle("open-menu");
  headerUser.classList.toggle("open-menu");
});
document.addEventListener("click", (e) => {
  const targetElement = e.target;
  console.log("targetElement: ", targetElement);
  if (openMenu && openMenu.classList.contains("open-menu")) {
    console.log("targetElement: ", targetElement);
  }
});

const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  autoplay: {
    delay: 5000,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
