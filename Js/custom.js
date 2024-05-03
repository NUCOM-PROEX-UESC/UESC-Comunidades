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

$(document).ready(function () {
    // Carrossel de Notícias
    var noticiasSwiper = new Swiper("#noticias-slider", {
        slidesPerView: 3,
        spaceBetween: 25,
        loop: true,
        centerSlide: true,
        fade: true,
        grabCursor: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            dynamicBullets: true,
        },
        navigation: {
            nextEl: ".swiper-navBtnoticiaNext",
            prevEl: ".swiper-navBtnoticiaPrev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            520: {
                slidesPerView: 2,
            },
            950: {
                slidesPerView: 3,
            },
        },
    });

    // Carrossel de Vídeos
    var videosSwiper = new Swiper("#videos-slider", {
        slidesPerView: 3,
        spaceBetween: 25,
        loop: true,
        centerSlide: true,
        fade: true,
        grabCursor: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            dynamicBullets: true,
        },
        navigation: {
            nextEl: ".swiper-navBtnVideosNext", 
            prevEl: ".swiper-navBtnVideosPrev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            520: {
                slidesPerView: 2,
            },
        },
    });

    // Restante do seu código JavaScript...
});