const swiper = new Swiper('.optimization', {
    slidesPerView: 3,
    spaceBetween: 10,
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