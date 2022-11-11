const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        nextEl: '.testimonials__cards-prev-btn',
        prevEl: '.testimonials__cards-next-btn',
    },

    breakpoints:{
        520: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        750: {
            slidesPerView: 3,
            spaceBetween: 30,
        }
    },
});
