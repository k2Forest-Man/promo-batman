const swiper = new Swiper('.main-slider', { // контейнер в котором находится наш слайдер
  loop: true,                       // <--- зацикленность
  slidesPerView : 2,                 // Добавляем количество отображаемых слайдов
  spaceBetween: 30,
  navigation: {                     // Navigation arrows
    nextEl: '.switch-slider',  // Кнопка управления слайдером, только вперед!!!
  },
});