var menu = document.querySelector(".header__burger");
var nav = document.querySelector(".header__list");
var copyright = document.querySelector(".header__copyright");
var header = document.querySelector(".header");
menu.addEventListener("click", function () {
    nav.classList.toggle("active-menu");
    copyright.classList.toggle("active-menu");
    menu.classList.toggle("active-burger");
    header.classList.toggle("active-header");
});
