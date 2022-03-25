import Swiper from 'swiper/bundle';

const teamSwiper = new Swiper('.team__cards', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 1,
    breakpoints: {
        768: {
            slidesPerView: 4,
        },
    },
});
