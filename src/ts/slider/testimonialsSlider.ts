class SliderTestimonials {
  testimonials: Testimonials[];
  constructor() {
    this.testimonials = testimonials;
  }
  buildTestimonial(): void {
    const testimonialsSlider = document.querySelector('.testimonials__slider') as HTMLDivElement;
    if (testimonialsSlider) {
      testimonialsSlider.innerHTML = ``;
      for (const test of this.testimonials) {
        testimonialsSlider.innerHTML += `<div class="testimonials__border">
            <div class="testimonials__item">
            <div class="testimonials__head">
              <img class="testimonials__img" src="${test.img}" alt="icon">
              <div class="testimonials__people">
                <p class="testimonials__name">${test.name}</p>
                <div class="testimonials__info">
                  <span>${test.local}</span>
                  <div class="testimonials__dot"></div>
                  <span>${test.day}</span>
                </div>
              </div>
            </div>
            <p class="testimonials__text">${test.info}</p>
          </div>
          </div>`;
      }
    }
  }
  modalWindowOpen(): void {
    const testimonialsElements = document.querySelectorAll('.testimonials__border') as unknown as HTMLDivElement[];
    if(testimonialsElements.length){
      testimonialsElements.forEach((t, i) => {
        t.onclick = () => {
          this.modalWindow(i);
        }
    })
    }
  }

  modalWindow(index: number): void {
    const overlay = document.querySelector('.overlay') as HTMLDivElement;
    overlay.classList.add('overlayActive');
    const test = this.testimonials[index];
    overlay.innerHTML = '';
    overlay.innerHTML = `
      <div class="modal">
      <div class="testimonials__border modal__border">
          <div class="testimonials__item modal__item">
          <div class="testimonials__head">
            <img class="testimonials__img" src="${test.img}" alt="icon">
            <div class="testimonials__people">
              <p class="testimonials__name">${test.name}</p>
              <div class="testimonials__info">
                <span>${test.local}</span>
                <div class="testimonials__dot"></div>
                <span>${test.day}</span>
              </div>
            </div>
          </div>
          <p class="testimonials__text  modal__text">${test.info}</p>
        </div>
        </div>
      </div>
    `;
    overlay.onclick = () => {
      overlay.classList.remove('overlayActive');
    }
  }
  slider(): void {
    if (window.innerWidth >=1000) {
    let switchDot: number;
    const go = () => {
    if (window.innerWidth >=1600){
      switchDot = -298;
    }
    if (window.innerWidth >=1000 && window.innerWidth < 1600){
      switchDot = -323;
    }

    const sliderDots = document.querySelectorAll('.testimonials__scrollbar li') as unknown as HTMLDivElement[];
    sliderDots.forEach((s, i, array) => {
      s.onclick = () => {
        array.forEach(el => {
          el.classList.remove('testimonials__scrollbar_active')
        })
        s.classList.add('testimonials__scrollbar_active');
        (document.querySelector('.testimonials__slider')as HTMLDivElement).style.marginLeft = `${switchDot * i}px`
      }
      })
    }
    go();
    window.addEventListener("resize", go);
   }
  }
}
const t = new SliderTestimonials();
t.buildTestimonial();
t.modalWindowOpen();
t.slider();