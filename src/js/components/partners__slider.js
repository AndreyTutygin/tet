import Swiper from 'swiper/bundle';

const partnersSlider = new Swiper('.partners__swiper', {
    navigation: {
        nextEl: '.partners__arrow_next',
        prevEl: '.partners__arrow_prev',
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
