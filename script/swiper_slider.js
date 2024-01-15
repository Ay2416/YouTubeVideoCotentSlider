const swiper1 = new Swiper('.js-swiper2', {
    // Optional parameters
    direction: 'horizontal',

    // Navigation arrows
    navigation: {
        nextEl: '.js-swiper-button-next2',
        prevEl: '.js-swiper-button-prev2',
    },

    spaceBetween: 50,
    initialSlide: 0,
    slidesPerView: 6, //スライドを1枚表示
    breakpoints: { //小さい順に設定する
    // 0px以上の場合
    0: {
        slidesPerView: 1, //スライドを2枚表示
    },
    // 599px以上の場合
    599: {
        slidesPerView: 2, //スライドを2枚表示
    },
    // 1024px以上の場合
    1024: {
        slidesPerView: 3, //スライドを3枚表示
    },
    },
});