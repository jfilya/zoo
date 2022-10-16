
class ChooseAnimal {
  animal: Animal[];
  constructor() {
    this.animal = cards;
  }
  buildCards(array: Animal[]): void {
    const items = document.querySelector('.cards__items') as HTMLDivElement;
    if (items) {
      items.innerHTML = ``;
      for (const a of array) {
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
  pagination(): void {
    let btnPrev = document.querySelector('.cards__arrow_left') as HTMLButtonElement;
    let btnNext = document.querySelector('.cards__arrow_right') as HTMLButtonElement;
    let tablePagination = document.querySelector('.cards__items') as HTMLDivElement;
    let pagination = document.querySelector('.cards__pagination') as HTMLUListElement;
    let notesOnPage: number = 6;
    const countOfItem: number = Math.ceil(this.animal.length / notesOnPage);
    for (let i = 1; i <= countOfItem; i++) {
      const li = document.createElement('li') as HTMLElement;
      li.innerText = String(i);
      pagination.append(li);
    }
    let items = document.querySelectorAll('.cards__pagination li') as unknown as HTMLLIElement[];
    const showPage = (item: HTMLElement) => {
      let pageNum = +item.innerHTML;
      let start = (pageNum - 1) * notesOnPage;
      let end = start + notesOnPage;
      let notes = this.animal.slice(start, end);
      tablePagination.innerHTML = '';
      this.buildCards(notes);
    }
    showPage(items[0]);
    let i = 0;

    const disableBtn = (i: number) => {
      if (i === countOfItem - 1) {
        btnNext.disabled = true;
      } else  btnNext.disabled = false;
      if (i === 0) {
        btnPrev.disabled = true;
      } else btnPrev.disabled = false;
    };

    btnNext.addEventListener('click', () => {
      i++;
      disableBtn(i);
      showPage(items[i]);
    })
    btnPrev.addEventListener('click', () => {
      i--;
      disableBtn(i);
      showPage(items[i]);
    });
  }
}
const animal = new ChooseAnimal();
animal.pagination();