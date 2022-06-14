/* Прелоадер */
window.onload = function() {
  let preloader = document.getElementById('preloader');
  preloader.classList.add('hide-preloader');
}
/* ---------------------------------------------------------------------------------------------------------------- */
/* слайдер в блоке home-image */
var myCarousel = document.querySelector('#carouselExampleSlidesOnly')
var carousel = new bootstrap.Carousel(myCarousel, { 
  interval: 4000,
  // wrap: false
  touch: true,
})

/* слайдер в блоке photo */
const swiper = new Swiper('.swiper', {
  // бесконечная прокрутка
  loop: true,
  //автоматическая прокрутка при загрузке страници
    autoplay:{ 
        delay: 2500,
        stopOnLastSlider: true, 
        disableOninteraction: false
    },
  // базавая пагинация
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.mini-slaider__previous',
    prevEl: '.mini-slaider__next',
  },
  // базовый скролл
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  // Количество слайдев для показа
  slidesPerView: 3.5,
   // Отступ между слайдами
   spaceBetween: 50,
   // Активный слайд по центру
   centeredSlides: true,
   // Стартовый слайд
   initialSlide: 0,
    // Паралакс
   parallax: true,
   // Упарвление клавиатурой
   keyboard: {
     enabled: true,
     onlyInViewport: true,
     pageUpDown: true,
   },
  // Отключение функционала, если слайдов меньше чем нужно
  watchOverflow: true,
  // Обновить свайпер при изменении элементов свайпера
  observer: true,
  // Обновить свайпер при изменении дочерних элементов свайпера
  observeSlideChildren: true,
  // Обновить свайпер при изменении родительских элементов свайпера
  observeParents: true,
  // Увеличение центральной картинки
  effect: 'coverflow',
  coverflowEffect: {
    rotate: 0,
    stretch: -0.5,
    depth: 1,
    modifier: 100,
    slideShadows: false,
  },
   // Адаптив
  breakpoints: {
    320: {
      slidesPerView: 1.5,
      spaceBetween: 15,
      coverflowEffect: {
      stretch: -0.3,
      }
    },
    480: {
      slidesPerView: 2.5,
      spaceBetween: 25,
    },
    992: {
      slidesPerView: 4.5,
      spaceBetween: 35, 
    }
  },
});

/* слайдеры в блоке - Наши маршруты */
const OneSwiper = new Swiper('.swiper1', {
  // бесконечная прокрутка
  loop: true,
  //автоматическая прокрутка при загрузке страници
    autoplay:{ 
        delay: 2500,
        stopOnLastSlider: true, 
        disableOninteraction: false
    },

    rtl: true,
  // базавая пагинация
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.mini-slader__previous',
    prevEl: '.mini-slaider__next',
  },

  // базовый скролл
  scrollbar: {
    el: '.swiper-scrollbar',
  },

  // Количество слайдев для показа
  slidesPerView: 2.4,

   // Отступ между слайдами
  //  spaceBetween: 22,

   // Стартовый слайд
   initialSlide: 0,

    // Паралакс
   parallax: true,

   // Упарвление клавиатурой
    keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
   },

    // Отключение функционала, если слайдов меньше чем нужно
    watchOverflow: true,
    
    // Обновить свайпер при изменении элементов свайпера
    observer: true,

    // Обновить свайпер при изменении дочерних элементов свайпера
    observeSlideChildren: true,

    // Обновить свайпер при изменении родительских элементов свайпера
    observeParents: true,

    breakpoints: {
      320: {
        spaceBetween: -7,
      },
      360: {
        spaceBetween: 5,
      },
      400: {
        slidesPerView: 2.9,
      },
    },
});

const TwoSwiper = new Swiper('.swiper2', {
  // бесконечная прокрутка
  loop: true,
  //автоматическая прокрутка при загрузке страници
    autoplay:{ 
        delay: 2500,
        stopOnLastSlider: true, 
        disableOninteraction: false
    },

    rtl: true,
  // базавая пагинация
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.mini-slader__previous',
    prevEl: '.mini-slaider__next',
  },

  // базовый скролл
  scrollbar: {
    el: '.swiper-scrollbar',
  },

  // Количество слайдев для показа
  slidesPerView: 2.4,

   // Отступ между слайдами
  //  spaceBetween: 22,

   // Стартовый слайд
   initialSlide: 1,

    // Паралакс
   parallax: true,

   // Упарвление клавиатурой
    keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
   },

    // Отключение функционала, если слайдов меньше чем нужно
    watchOverflow: true,
    
    // Обновить свайпер при изменении элементов свайпера
    observer: true,

    // Обновить свайпер при изменении дочерних элементов свайпера
    observeSlideChildren: true,

    // Обновить свайпер при изменении родительских элементов свайпера
    observeParents: true,

    breakpoints: {
      320: {
        spaceBetween: -7,
      },
      360: {
        spaceBetween: 5,
      },
      400: {
        slidesPerView: 2.9,
      },
    },
});

const ThreeSwiper = new Swiper('.swiper3', {
  // бесконечная прокрутка
  loop: true,
  //автоматическая прокрутка при загрузке страници
    autoplay:{ 
        delay: 2500,
        stopOnLastSlider: true, 
        disableOninteraction: false
    },
  // базавая пагинация
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.mini-slader__previous',
    prevEl: '.mini-slaider__next',
  },

  // базовый скролл
  scrollbar: {
    el: '.swiper-scrollbar',
  },

  // Количество слайдев для показа
  slidesPerView: 2.4,

   // Отступ между слайдами
  //  spaceBetween: 22,

   // Стартовый слайд
   initialSlide: 2,

    // Паралакс
   parallax: true,

   // Упарвление клавиатурой
    keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
   },

    // Отключение функционала, если слайдов меньше чем нужно
    watchOverflow: true,
    
    // Обновить свайпер при изменении элементов свайпера
    observer: true,

    // Обновить свайпер при изменении дочерних элементов свайпера
    observeSlideChildren: true,

    // Обновить свайпер при изменении родительских элементов свайпера
    observeParents: true,

    breakpoints: {
      320: {
        spaceBetween: -7,
      },
      360: {
        spaceBetween: 5,
      },
      400: {
        slidesPerView: 2.9,
      },
    },
});
/* ---------------------------------------------------------------------------------------------------------------- */
/* исчезание шапки при скроле */
let lastScroll = 0;
const defaultOffset = 150;//через сколько px при прокрутке вниз исчезает блок
const header = document.querySelector('.header');

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('hide');
window.addEventListener('scroll', () => {
  if(scrollPosition() > lastScroll && !containHide() &&scrollPosition() > defaultOffset) {
    header.classList.add('hide');
  }
  else if(scrollPosition() < lastScroll && containHide()){
    header.classList.remove('hide');
  }
  lastScroll = scrollPosition();
})

/* бургер-меню */
const iconMenu = document.querySelector('.header__burger-icon');
const headerMenu = document.querySelector('.header__menu');
if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active-burger-menu');
    headerMenu.classList.toggle('_active-burger-menu');
  })
}

/* плавное перемещение по документу при клике по ссылке */
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if(menuLinks.length > 0) {
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });

  function onMenuLinkClick(e) {
    const menuLink = e.target;
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;

      if (iconMenu.classList.contains('_active-burger-menu')) {
        document.body.classList.remove('_lock');
        iconMenu.classList.remove('_active-burger-menu');
        headerMenu.classList.remove('_active-burger-menu');
      }

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth"
      });
      e.preventDefault();
    }
  }
}

/* открытие блока по клику в - questions-answers */
let windowQuestionTitle = document.querySelectorAll('.window-question__title');
for (let i = 0; i < windowQuestionTitle.length; i++) {
  windowQuestionTitle[i].addEventListener('click', open_click);
}

function open_click(e) {
  e.preventDefault();
  let windowQuestionBody = this.closest('.window-question').querySelector('.window-question__body');
  setTimeout(function() {
  windowQuestionBody.style.display = window.getComputedStyle(windowQuestionBody).display === 'block' ? 'none' : 'block';
  e.target.classList.toggle('icon-vector-right_active');
  }, 120);
}

/* PopUp-base */
let btn = document.getElementById('btnPriсe');
let popUpWindowBase = document.getElementById('popUpWindowBase');
let btnClose = document.getElementById('btnClose');
let scrollWidth = getScrollWidth();


btn.onclick = function () {
    openPricePopup();
}

btnClose.onclick = function () {
    closePricePopup();
}
window.onclick = function(event) {
    if (event.target == popUpWindowBase) {
        closePricePopup();
    }
}

function getScrollWidth() {
    let div = document.createElement('div');
    div.style.overflowY = 'scroll';
    div.style.width = '50px';
    div.style.height = '50px';
    document.body.append(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();
    return scrollWidth;
}

function openPricePopup() {
    document.body.classList.add('_lock');
    document.body.style.paddingRight = scrollWidth + 'px';
    popUpWindowBase.style.display = "block";
    setTimeout(function() {
        popUpWindowBase.classList.add('show');
    }, 100);
}

function closePricePopup() {
    popUpWindowBase.classList.remove('show');
    setTimeout(function() {
        popUpWindowBase.style.display = "none";
        document.body.style.paddingRight = '';
        document.body.classList.remove('_lock');
    }, 100);
}

/* input + - в popUp */
jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity input');
jQuery('.quantity').each(function() {
  var spinner = jQuery(this),
    input = spinner.find('input[type="number"]'),
    btnUp = spinner.find('.quantity-up'),
    btnDown = spinner.find('.quantity-down'),
    min = input.attr('min'),
    max = input.attr('max');

  btnUp.click(function() {
    var oldValue = parseFloat(input.val());
    if (oldValue >= max) {
      var newVal = oldValue;
    } else {
      var newVal = oldValue + 1;
    }
    spinner.find("input").val(newVal);
    spinner.find("input").trigger("change");
  });

  btnDown.click(function() {
    var oldValue = parseFloat(input.val());
    if (oldValue <= min) {
      var newVal = oldValue;
    } else {
      var newVal = oldValue - 1;
    }
    spinner.find("input").val(newVal);
    spinner.find("input").trigger("change");
  });

});

/* плавное появление теста на главной странице */
$.fn.animate_Text = function() {
  var string = this.text();
  return this.each(function(){
    var $this = $(this);
    $this.html(string.replace(/./g, '<span class="new">$&</span>'));
    $this.find('span.new').each(function(i, el){
    setTimeout(function(){ $(el).addClass('div_opacity'); }, 70 * i);
    });
  });
  };
  $('#example').show();
  $('#example').animate_Text();

/* анимация */  
const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll() {
      for (let index = 0; index < animItems.length; index++) {
          const animItem = animItems[index]; 
          const animItemHeight = animItem.offsetHeight;
          const animItemOffset = offset(animItem).top;
          const animStart = 4;

          let animItemPoint = window.innerHeight - animItemHeight / animStart;
          if (animItemHeight > window.innerHeight) {
              animItemPoint = window.innerHeight - window.innerHeight / animStart;
          }

          if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
              animItem.classList.add('_active');
          } else {
              if (!animItem.classList.contains('_anim-no-hide')) {
                  animItem.classList.remove('_active');
              }
          }
      }
  }
  function offset(el) {
      const rect = el.getBoundingClientRect(),
          scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
          scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
  }

  setTimeout(() => {
      animOnScroll();
  }, 3000); 
}
