"use scrict";
const burger = document.querySelector(".burger");
const headerUser = document.querySelector(".header__user");
const openMenu = document.querySelector(".header__bottom");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  openMenu.classList.toggle("open-menu");
  headerUser.classList.toggle("open-menu");
});

// Slider
/*
const sliderLine = document.querySelector(".slider__line");
const slide = document.querySelectorAll(".slider__slide");

const nextBtn = document.querySelector("#next");
const prevBtn = document.querySelector("#prev");

let counter = 0;
let slideWidth = slide[0].clientWidth;
sliderLine.style.width = 3 * slideWidth   + "px";
console.log('sliderLine: ', sliderLine);


nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

function nextSlide() {
  if (counter >= slide.length - 1) {
    counter = -1;
  }
  counter++;
  console.log("counter: ", counter);
  line();
}
function prevSlide() {
  if (counter <= 0) {
    counter = 1;
  }
  counter--;
  console.log("counter: ", counter);
  line();
}

function line() {
  sliderLine.style.transform = `translateX(${-counter * slideWidth}px)`;
}
*/
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 5000,
  },
  speed: 1000,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button_next",
    prevEl: ".swiper-button_prev",
  },
});
