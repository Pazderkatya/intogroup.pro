const swiper = new Swiper('.optimization', {
    slidesPerView: 2.7,
    spaceBetween: 10,
    loop: true, // Бесконечная прокрутка
    pagination: {
        el: '.swiper-pagination',
        clickable: true, // Делает пагинацию кликабельной
    },
    navigation: {
        nextEl: '.swiper-button-next',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        480: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 10,
        }
    }
});

$('.faq__case').on('click', function() {
    $('.faq__button[aria-expanded="true"]').click()
   
});

$('.close').on('click', function() {
    $('.card-basic').removeClass('active')
});