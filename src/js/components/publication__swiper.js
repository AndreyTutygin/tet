import Swiper from 'swiper/bundle';

const publicationSwiper = new Swiper('.publication__swiper', {
    navigation: {
        nextEl: '.publication__arrow_next',
        prevEl: '.publication__arrow_prev',
    },
    slidesPerView: "auto",
    spaceBetween: 20,
    breakpoints: {
        1180: {
            spaceBetween: 30
        },
    },
});
