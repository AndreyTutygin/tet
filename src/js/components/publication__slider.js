import Swiper from 'swiper/bundle';

const publicationSlider = new Swiper('.publication__swiper', {
    navigation: {
        nextEl: '.publication__arrow_next',
        prevEl: '.publication__arrow_prev',
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
