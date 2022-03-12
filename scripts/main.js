/*=======================================
/*=================================================
JavaScript
===================================================*/
document.addEventListener('DOMContentLoaded', function () {
  const main = new Main();
});

class Main {
  constructor() {
    this._init();
    this._scrollInit();
  }

  _init() {
    new MenuOpen();
    new SmoothScroll(80);
    new HeroSlider('.swiper');
  }

  _inviewAnimation(el, inview) {
    console.log(el)
    console.log(inview)
    if(inview) {
      el.classList.add('inview');
    }
  }

  _scrollInit() {
    new ScrollObserver('.feature__img', this._inviewAnimation);
  }
}
