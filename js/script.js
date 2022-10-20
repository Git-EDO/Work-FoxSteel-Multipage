// Управление селектом выбора языка

const select = document.querySelector('.lang-select-body');
const selectImg = document.querySelector('.lang-select-body img')
const dropDown = document.querySelector('.lang-select-options');

select.addEventListener('click', function(e){
  e.stopPropagation();
  dropDown.classList.toggle('active');
  select.classList.toggle('active');
});

dropDown.addEventListener('click', function(e){
  selectImg.src = e.target.src;
  select.classList.remove('active');
  dropDown.classList.remove('active');
})

document.addEventListener('click', function(e){
  if(e.target !== document.querySelector('.select')) {
    dropDown.classList.remove('active');
    select.classList.remove('active');
  }
})

// Бургер

const burger = document.querySelector('.header-burger')
const mobileMenu = document.querySelector('.second-row')

burger.addEventListener('click', () => {
  burger.classList.toggle('active')
  mobileMenu.classList.toggle('active')
})

// Слайдер на главной

let mainSwiper =new Swiper('.swiper', {

  // Optional parameters
  slidesPerView: 1,

    // Navigation arrows
    navigation: {
      nextEl: '.pagination-arrow-right',
      prevEl: '.pagination-arrow-left',
    },
    pagination: {
      el: '.slider-counter',
      type: 'fraction'
    }
});