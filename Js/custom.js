$(document).ready(function () {
    // Parallax de fundo
    $window = $(window);
    $('section[data-type="background"]').each(function () {
        var $scroll = $(this);
        $(window).scroll(function () {
            var yPos = -($window.scrollTop() / $scroll.data('speed'));
            var coords = '50% ' + yPos + 'px';
            $scroll.css({ backgroundPosition: coords });
        });
    });

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

    // Carrossel de Banner
    var bannerSwiper = new Swiper("#banner-slider", {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        fade: true,
        grabCursor: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-navBtnBannerNext", // Definindo o botão Next para o banner
            prevEl: ".swiper-navBtnBannerPrev", // Definindo o botão Prev para o banner
        },
    });

    // Restante do seu código JavaScript...
});
