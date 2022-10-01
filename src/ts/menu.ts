const menu = document.querySelector(".header__burger") as HTMLDivElement;
const nav = document.querySelector(".header__list") as HTMLDivElement;
const copyright = document.querySelector(".header__copyright") as HTMLDivElement;
const header = document.querySelector(".header") as HTMLDivElement;
menu.addEventListener("click", () => {
    nav.classList.toggle("active-menu");
    copyright.classList.toggle("active-menu"); 
    menu.classList.toggle("active-burger"); 
    header.classList.toggle("active-header");  
})
