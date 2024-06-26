// Swiper JS Code
var swiper = new Swiper(".hero", {
  spaceBetween: 0,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Screen Width
var screenWidth = document.body.clientWidth;
var slidesNo;
if (screenWidth < 1100) {
  slidesNo = 1;
} else {
  slidesNo = 3;
}

var psSwiper = new Swiper(".mySwiper", {
  slidesPerView: slidesNo,
  spaceBetween: 20,
  slideToClickedSlide: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
