
class ChooseAnimal {
    animal: Animal[];
    constructor() {
        this.animal = cards;
    }
    buildCards(): void {
        const items = document.querySelector('.cards__items') as HTMLDivElement;
        console.log(items);
        items.innerHTML = ``;
        for (const card of cards) {
            items.innerHTML += `<div class="cards__item">
            <img class="cards__img" src="${card.img}" alt="${card.title}">
            <div class="cards__bottom">
              <div class="cards__text">
                <h5 class="cards__title">${card.title}</h5>
                <p class="cards__country">${card.text}</p>
              </div>
              <img class="cards__icon cards__icon_${card.category}" src="${card.icon}" alt="icon">
            </div>
          </div>`;
        }
    }

}
const animal = new ChooseAnimal();
animal.buildCards();