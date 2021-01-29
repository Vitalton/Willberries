const swiper = new Swiper('.swiper-container', {
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.slider-button-next',
    prevEl: '.slider-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
function animateToTop(event) {
    event.preventDefault();
    let scrollToTop = window.setInterval(function() {
        let pos = window.pageYOffset;
        if ( pos > 0 && pageYOffset >= 10) {
            window.scrollTo(0, pos - 20);
        } else {
            window.clearInterval(scrollToTop);
        }
    }, 9)
};