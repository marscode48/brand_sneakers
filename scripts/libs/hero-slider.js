class HeroSlider {
  constructor(el) {
    this.el = el;
    this.swiper = this._initSwiper();
    console.log(this.swiper)
  }

  _initSwiper () {
    return new Swiper(this.el, {
      initialSlide: 3.5,
      slidesPerView: 1.3,
      spaceBetween: 20,
      centeredSlides: true,
      grabCursor: true,
      
      breakpoints: {
        768: {
          slidesPerView: 4,
          spaceBetween: 30,
          centeredSlides: true,
        }
      },
    });
  }
}