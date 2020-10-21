
/* Initialize Swiper */
var swiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    spaceBetween: 10,
    effect: 'fade',
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 40,
        stretch: 0,
        depth: 150,
        modifier: 1,
        slideShadows : true,
    },
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
    },
});