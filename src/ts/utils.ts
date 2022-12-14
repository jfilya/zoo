const menuBurger = () => {
    const menu = document.querySelector(".header__burger") as HTMLDivElement;
    const nav = document.querySelector(".header__list") as HTMLDivElement;
    const copyright = document.querySelector(".header__copyright") as HTMLDivElement;
    const header = document.querySelector(".header") as HTMLDivElement;
    const overlayMenu = document.querySelector(".overlay") as HTMLDivElement;
    const nemuList = document.querySelectorAll(".header__element") as unknown as HTMLLIElement[];
    const openMenu = () => {
        nav.classList.toggle("active-menu");
        copyright.classList.toggle("active-menu");
        menu.classList.toggle("active-burger");
        header.classList.toggle("active-header");
        overlayMenu.classList.toggle("overlayActive");
        if (header.classList.contains("active-header")) {
            (document.querySelector('#bamboo') as HTMLImageElement).src = 'images/svg/bamboo-active.svg';
        }
        else {
            (document.querySelector('#bamboo') as HTMLImageElement).src = 'images/svg/bamboo.svg';
        }
    }
    menu.addEventListener("click", () => {
        openMenu();
    })
    nemuList.forEach(el => {
        el.onclick = () => {
            openMenu();
        }
    })
}

menuBurger();

const range = () => {
    const rangeDots = document.querySelectorAll('.donate-info__range-line li') as unknown as HTMLLIElement[];
    const circle = document.querySelector("#active-range-line") as HTMLDivElement;
    const donateSum = document.querySelectorAll(".donate-info__range-sum li") as unknown as HTMLLIElement[];
    const inputValue = document.querySelector('.donate-info__currency') as HTMLInputElement;

    const clickValue = (array: HTMLLIElement[]) => {
        array.forEach((dot, i) => {
            dot.onclick = () => {
                circle.className = '';
                const visiable = () => {
                    circle.style.display = "block";
                }
                circle.classList.add(`transforms-${i}`);
                donateSum.forEach(d => d.classList.remove('active-range-text'));
                donateSum[i].classList.add('active-range-text');
                inputValue.value = donateSum[i].innerHTML + '.00';
                setTimeout(visiable, 50);
            }
        });
        inputValue.oninput = () => {
            inputValue.value = inputValue.value.replace(/[^0-9\.]/g, "");
            circle.style.display = "none";
            circle.className = '';
            donateSum.forEach(d => d.classList.remove('active-range-text'));
        }
    }
    if (rangeDots.length || donateSum.length) {
        clickValue(rangeDots);
        clickValue(donateSum);
    }
}
range();