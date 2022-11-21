class SliderTestimonials {
  testimonials: Testimonials[];
  constructor() {
    this.testimonials = testimonials;
  }
  generate(elements: Testimonials): string {
    return `<div class="testimonials__border">
    <div class="testimonials__item">
    <div class="testimonials__head">
      <img class="testimonials__img" src="${elements.img}" alt="icon">
      <div class="testimonials__people">
        <p class="testimonials__name">${elements.name}</p>
        <div class="testimonials__info">
          <span>${elements.local}</span>
          <div class="testimonials__dot"></div>
          <span>${elements.day}</span>
        </div>
      </div>
    </div>
    <p class="testimonials__text">${elements.info}</p>
  </div>
  </div>`
  }
  buildPgination(): string {
    return `
    <ul class="testimonials__scrollbar">
      <li class="testimonials__scrollbar_active"></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>`
  }
  buildTestimonial(): void {
    const testimonialsSlider = document.querySelector('.testimonials__slider') as HTMLDivElement;
    const testimonialsScroll = document.querySelector('.testimonials__scroll') as HTMLDivElement;
    if (testimonialsSlider) {
      testimonialsSlider.innerHTML = ``;
      for (const test of this.testimonials) {
        testimonialsSlider.innerHTML += this.generate(test);
        testimonialsScroll.innerHTML = this.buildPgination();
      }
    }
  }
  modalWindowOpen(): void {
    const testimonialsElements = document.querySelectorAll('.testimonials__border') as unknown as HTMLDivElement[];
    if (testimonialsElements.length) {
      testimonialsElements.forEach((t, i) => {
        t.onclick = () => {
          this.modalWindow(i);
          (document.querySelector('.modal') as HTMLDivElement).classList.add('activeModal');
        }
      })
    }
  }
  modalWindow(index: number): void {
    const overlay = document.querySelector('.overlay') as HTMLDivElement;
    overlay.classList.add('overlayActive');
    const modal = document.querySelector('.modal') as HTMLDivElement;
    const test = this.testimonials[index];
    modal.innerHTML = `
      <img src="images/svg/cross-modal.svg" alt="cross" class="modal__cross">
      ${this.generate(test)}
    `;
    const deleteModal = (btn: HTMLDivElement | HTMLImageElement) => {
      btn.onclick = () => {
        overlay.classList.remove('overlayActive');
        modal.classList.remove('activeModal');
        modal.innerHTML = "";
      }
    }
    deleteModal(overlay);
    deleteModal(document.querySelector('.modal__cross') as HTMLImageElement);
  }
  slider(): void {
    if (window.innerWidth >= 1000) {
      let switchDot: number;
      if (window.innerWidth >= 1600) {
        switchDot = -298;
      }
      if (window.innerWidth >= 1000 && window.innerWidth < 1600) {
        switchDot = -323;
      }

      const sliderDots = document.querySelectorAll('.testimonials__scrollbar li') as unknown as HTMLDivElement[];
      sliderDots.forEach((s, i, array) => {
        const changeLocation = () => {
          array.forEach(el => {
            el.classList.remove('testimonials__scrollbar_active')
          })
          s.classList.add('testimonials__scrollbar_active');
          (document.querySelector('.testimonials__slider') as HTMLDivElement).style.marginLeft = `${switchDot * i}px`
        }
        s.onclick = () => {
          changeLocation();
        }

      })
    }
  }
}
const t = new SliderTestimonials();
const go = () => {
  t.buildTestimonial();
  t.slider();
  (document.querySelector('.testimonials__slider') as HTMLDivElement).style.marginLeft = '0px';
}
go();
window.addEventListener("resize", go);
t.modalWindowOpen();
t.buildPgination();