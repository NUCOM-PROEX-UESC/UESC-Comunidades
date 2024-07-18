document.addEventListener('DOMContentLoaded', () => {
    initializeCarousels();
});

function initializeCarousels() {
    const carousels = document.querySelectorAll('.carousel-interno');
    carousels.forEach((carousel, index) => {
        carousel.id = `carousel-${index}`;
        const inner = carousel.querySelector('.carousel-interno-inner');
        const items = carousel.querySelectorAll('.carousel-interno-item');
        const indicatorsContainer = carousel.querySelector('.carousel-interno-indicators');

        // Generate indicators dynamically
        indicatorsContainer.innerHTML = '';
        items.forEach((_, i) => {
            const indicator = document.createElement('span');
            indicator.classList.add('indicador-carousel-interno');
            if (i === 0) {
                indicator.classList.add('carousel-interno-active');
            }
            indicator.addEventListener('click', () => setSlide(index, i));
            indicatorsContainer.appendChild(indicator);
        });

        const prevButton = carousel.querySelector('.carousel-interno-prev');
        const nextButton = carousel.querySelector('.carousel-interno-next');

        prevButton.addEventListener('click', () => prevSlide(index));
        nextButton.addEventListener('click', () => nextSlide(index));

        showSlide(index, 0);
    });
}

let currentSlides = [];
let isThrottled = false;

function showSlide(carouselIndex, slideIndex) {
    const carousel = document.getElementById(`carousel-${carouselIndex}`);
    const slides = carousel.querySelectorAll('.carousel-interno-item');
    const indicators = carousel.querySelectorAll('.indicador-carousel-interno');

    currentSlides[carouselIndex] = slideIndex;

    const offset = -slideIndex * 100;
    carousel.querySelector('.carousel-interno-inner').style.transform = `translateX(${offset}%)`;

    slides.forEach((slide, i) => {
        slide.classList.toggle('carousel-interno-active', i === slideIndex);
    });

    indicators.forEach((indicator, i) => {
        indicator.classList.toggle('carousel-interno-active', i === slideIndex);
    });
}

function nextSlide(carouselIndex) {
    const slides = document.querySelector(`#carousel-${carouselIndex} .carousel-interno-inner`).children;
    const nextIndex = (currentSlides[carouselIndex] + 1) % slides.length;

    if (!isThrottled) {
        showSlide(carouselIndex, nextIndex);
        isThrottled = true;
        setTimeout(() => { isThrottled = false; }, 500);
    }
}

function prevSlide(carouselIndex) {
    const slides = document.querySelector(`#carousel-${carouselIndex} .carousel-interno-inner`).children;
    const prevIndex = (currentSlides[carouselIndex] - 1 + slides.length) % slides.length;

    if (!isThrottled) {
        showSlide(carouselIndex, prevIndex);
        isThrottled = true;
        setTimeout(() => { isThrottled = false; }, 500);
    }
}

function setSlide(carouselIndex, slideIndex) {
    if (!isThrottled) {
        showSlide(carouselIndex, slideIndex);
        isThrottled = true;
        setTimeout(() => { isThrottled = false; }, 500);
    }
}

function adjustCarouselImageSizes() {
    const carousels = document.querySelectorAll('.carousel-interno');
    carousels.forEach(carousel => {
        const width = carousel.clientWidth;
        const height = (4.5 / 8.5) * width;
        const images = carousel.querySelectorAll('.carousel-interno-item img');
        images.forEach(img => {
            img.style.height = `${height}px`;
        });
    });
}

