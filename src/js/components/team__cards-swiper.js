import Swiper from 'swiper/bundle';

const teamSwiper = new Swiper('.team-slider', {
    navigation: {
        nextEl: '.team-slider__arrow_next',
        prevEl: '.team-slider__arrow_prev',
    },
    slidesPerView: "auto",
    spaceBetween: 20,
    grabCursor: true,
    breakpoints: {
        1180: {
            spaceBetween: 30
        },
    },
});
