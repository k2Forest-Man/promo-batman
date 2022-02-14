const swiper = new Swiper('.main-slider', { // контейнер в котором находится наш слайдер
  loop: true,                       // <--- зацикленность
  spaceBetween: 30,                  // Отступ между слайдами
  navigation: {                     // Navigation arrows
    nextEl: '.switch-slider',  // Кнопка управления слайдером, только вперед!!!
  },
  breakpoints: {
    320: {
      slidesPerView : 1,
    },
    768: {
      slidesPerView : 2,      // Добавляем количество отображаемых слайдов
    },
  }
});

let burger = document.querySelector ('.menu-burger');
let closeMenu = document.querySelector ('.button-close');
let menuMobile = document.querySelector ('.main-header');


burger.addEventListener('click', () => {
  menuMobile.style.display = 'block';
})

closeMenu.addEventListener('click', () => {
  menuMobile.style.display = 'none';
})

const modalWindow = document.querySelector('.modal');
const buttonModal = document.querySelector('.button-play');

buttonModal.addEventListener ('click', (e) =>{
  modalWindow.classList.add ('active');
});

modalWindow.addEventListener ('click', (e) =>{
  const isModal = e.target.closest ('.modal-inner') // ловим modal-inner, чтобы закрыть видео

  if(!isModal) {      //Если НЕ ИЗ Modal
    modalWindow.classList.remove('active');
  }
});