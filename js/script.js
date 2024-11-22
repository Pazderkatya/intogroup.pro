const swiper = new Swiper('.stage', {
    slidesPerView: 3,
    loop: true, // Бесконечная прокрутка
    pagination: {
        el: '.swiper-pagination',
        clickable: true, // Делает пагинацию кликабельной
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});