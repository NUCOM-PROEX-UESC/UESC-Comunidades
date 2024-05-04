$(document).ready(function () {
    $window = $(window);
    $('section[data-type="background"]').each(function () {
        var $scroll = $(this);
        $(window).scroll(function () {
            var yPos = -($window.scrollTop() / $scroll.data('speed'));
            var coords = '50% ' + yPos + 'px';
            $scroll.css({ backgroundPosition: coords });
        });
    });
});

var swiper = new Swiper(".slide-content-slider", {
    slidesPerView: 5,
    slidesPerGroup: 5, // Defina slidesPerGroup para 5 para avançar 5 slides de cada vez
    spaceBetween: 25,
    loop: false,
    centerSlide: true, // Não use aspas ao redor de 'true'
    fade: true, // Não use aspas ao redor de 'true'
    grabCursor: true, // Não use aspas ao redor de 'true'
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            slidesPerGroup: 1, // Avança 1 slide de cada vez em telas menores
        },
        520: {
            slidesPerView: 2,
            slidesPerGroup: 2, // Avança 2 slides de cada vez em telas médias
        },
        950: {
            slidesPerView: 3,
            slidesPerGroup: 3, // Avança 3 slides de cada vez em telas maiores
        },
        1200: {
            slidesPerView: 4,
            slidesPerGroup: 4, // Avança 4 slides de cada vez em telas maiores
        },
        1400: {
            slidesPerView: 5,
            slidesPerGroup: 5, // Avança 5 slides de cada vez em telas maiores
        },
    },
});

//var currentURL = window.location.href;

//if (currentURL.endsWith('.html')) {
//    var novaURL = currentURL.slice(0, -5); // Remove os últimos 5 caracteres (.html)
//    history.replaceState({}, document.title, novaURL);
//}