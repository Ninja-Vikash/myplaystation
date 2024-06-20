// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.container'),
//     smooth: true
// });

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
