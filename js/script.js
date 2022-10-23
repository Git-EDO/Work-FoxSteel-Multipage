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
const body = document.querySelector('body')
const lockPaddingEls = document.querySelectorAll('.lock-padding')

burger.addEventListener('click', () => {
  body.classList.toggle('lock')
  burger.classList.toggle('active')
  mobileMenu.classList.toggle('active')
})

// Body lock

function bodyLock() {
  const lockPaddingValue = window.innerWidth - document.querySelector('body').offsetWidth + 'px';

  lockPaddingEls.forEach(element => {
    element.style.paddingRight = lockPaddingValue;
  });

  body.classList.add('lock');
}

function bodyUnlock() {
  lockPaddingEls.forEach(element => {
    element.style.paddingRight = 0;
  })

  body.classList.remove('lock')
}

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

// Селекты выбора масла

// Управление select
let oilSelects = document.querySelectorAll('.oil-select-body');
let oilDropDowns = document.querySelectorAll('.oil-select-options');
let hiddenInput = document.querySelector('.oil-selection-select select-hidden');

oilSelects.forEach(btn => {
  btn.addEventListener('click', function(e){
    e.preventDefault();
    e.stopPropagation();
    let thisDropDown = btn.closest('.oil-selection-select').querySelector('.oil-select-options');
    thisDropDown.classList.toggle('active');
  })
})

  // Присваиваем значение выбранной опции в селект

  oilDropDowns.forEach(dropdown => {
    dropdown.addEventListener('click', function(e){
      let thisSelect = dropdown.closest('.oil-selection-select')
      thisSelect.querySelector('.oil-select-body').innerText = e.target.innerText
      thisSelect.classList.remove('active');
      dropdown.classList.remove('active');
    })
  })

// Закрываем селект при клике не по нему

document.addEventListener('click', function(e){
  if(!e.target.closest('.oil-selection-select')) {
    oilSelects.forEach(select => select.classList.remove('active'))
    oilDropDowns.forEach(dropdown => dropdown.classList.remove('active'))
  }
})

// Скролл из footer


const footerScrollLink = document.querySelector('.scroll-link')

footerScrollLink.addEventListener ('click', function(e) {
  e.preventDefault();
  const header = document.querySelector('.header')
  header.scrollIntoView({block: "start", behavior: "smooth"});
})

// Инпут цены

const priceUp = document.querySelectorAll('.quantity-arrow-plus')
const priceDown = document.querySelectorAll('.quantity-arrow-minus')

priceUp.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault()
    const thisInput = btn.closest('.goods-filter-price-input')
    thisInput.querySelector('input[type=number]').value++
  })
})

priceDown.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault()
    const thisInput = btn.closest('.goods-filter-price-input')
    if(thisInput.querySelector('input[type=number]').value > 1) {
      thisInput.querySelector('input[type=number]').value--
    }
  })
})

// Открытие наименований

const expandBtns = document.querySelectorAll('.goods-filter-show-btn')

expandBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault()
    btn.closest('.goods-filter-options').classList.add('active')
    btn.style.display = 'none'
  })
})

// Открытие aside

const aside = document.querySelector('.goods-aside')
const showAside = document.querySelector('.mobile-filters a')
const closeFilters = document.querySelector('.goods-aside-close')

if(showAside) {
  showAside.addEventListener('click', (e) => {
    e.preventDefault()
    aside.classList.toggle('active')
  })
}

if(aside) {
  document.addEventListener('click', (e) => {
    if(!e.target.closest('.goods-aside') && !e.target.closest('.mobile-filters')) {
      aside.classList.remove('active')
    }
  })
}

if(closeFilters) {
  closeFilters.addEventListener('click', () => {
    aside.classList.remove('active')
  })
}

// Открытие попап-формы

const buyBtn = document.querySelector('.product-btn')
const closePopup = document.querySelectorAll('.popup-close')
const formPopup = document.querySelector('.form-popup')
const thanksPopup = document.querySelector('.thanks-popup')

if(buyBtn) {
  buyBtn.addEventListener('click', (e) => {
    e.preventDefault()
    bodyLock()
    formPopup.classList.add('active')
  })
}

if(closePopup) {
  closePopup.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault()
      bodyUnlock()
      e.target.closest('.popup').classList.remove('active')
    })
  })
}

if(closePopup) {
  document.addEventListener('click', (e) => {
    if(!e.target.closest('.popup-body') && !e.target.closest('.product-btn')) {
      if(formPopup) {
        formPopup.classList.remove('active')
      }
    }
  })
}

const greatBtn = document.querySelector('.great-btn')

if(greatBtn) {
  greatBtn.addEventListener('click', (e) => {
    e.preventDefault()
    bodyUnlock()
    thisPopup = e.target.closest('.popup')
    thisPopup.classList.remove('active')
  })
}

// Маска для телефона

const phones = document.querySelector('.phone');

const maskOptions = {
  mask: '+{7}(000)000-00-00'
};

const mask = IMask(phones, maskOptions);

// Управление увеличением изображения

const zoomImgs = document.querySelectorAll('.product-zoom-img')

if (zoomImgs.length > 0) {
  zoomImgs.forEach(img => {
    let x,y,width, height;
  
    img.onmouseenter = () => {
      const size = img.getBoundingClientRect();
  
      x = size.x;
      y = size.y;
      width = size.width;
      height = size.height;
    };
  
    img.onmousemove = e => {
      const horizontal = (e.clientX - x) / width*100
      const vertical = (e.clientY - y) / height*100
  
      img.style.setProperty('--x', horizontal + '%');
      img.style.setProperty('--y', vertical + '%');
    };
  })
}

