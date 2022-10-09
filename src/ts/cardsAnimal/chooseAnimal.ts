
class ChooseAnimal {
    animal: Animal[];
    constructor() {
        this.animal = cards;
    }
    buildCards(): void {
        const items = document.querySelector('.cards__items') as HTMLDivElement;
        items.innerHTML = ``;
        for (const a of this.animal) {
            items.innerHTML += `<div class="cards__item">
            <img class="cards__img" src="${a.img}" alt="${a.title}">
            <div class="cards__bottom">
              <div class="cards__text">
                <h5 class="cards__title">${a.title}</h5>
                <p class="cards__country">${a.text}</p>
              </div>
              <img class="cards__icon cards__icon_${a.category}" src="${a.icon}" alt="icon">
            </div>
          </div>`;
        }
    }

}
const animal = new ChooseAnimal();
animal.buildCards();