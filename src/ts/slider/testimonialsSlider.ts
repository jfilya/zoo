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
}
const t = new SliderTestimonials();
t.buildTestimonial();