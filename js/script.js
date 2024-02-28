/*
<div class="header__burger burger ">
  <span class="burger__line"></span>
</div>;
*/

"use scrict";
const burger = document.querySelector(".burger");
const headerUser = document.querySelector(".header__user");
const openMenu = document.querySelector(".header__bottom");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  openMenu.classList.toggle("open-menu");
  headerUser.classList.toggle("open-menu");
});
