let currentIndex = 0;
let autoSlideInterval;

function updateCarousel() {
    const container = document.querySelector('.numbers-container');
    const isMobile = window.innerWidth <= 767;
    const itemsPerView = isMobile ? 1 : 3;
    container.style.transform = `translateX(-${currentIndex * 100 / itemsPerView}%)`;
}

function updateIndicators() {
    const indicators = document.querySelectorAll('.indicator');
    const isMobile = window.innerWidth <= 767;
    const itemsPerView = isMobile ? 1 : 3;
    const indicatorIndex = Math.floor(currentIndex / itemsPerView);

    indicators.forEach((indicator, index) => {
        if (index === indicatorIndex) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

function nextSet() {
    const isMobile = window.innerWidth <= 767;
    const itemsPerView = isMobile ? 1 : 3;
    const totalItems = document.querySelectorAll('.number-item').length;

    currentIndex = (currentIndex + itemsPerView) % totalItems;
    updateCarousel();
    updateIndicators();
}

function prevSet() {
    const isMobile = window.innerWidth <= 767;
    const itemsPerView = isMobile ? 1 : 3;
    const totalItems = document.querySelectorAll('.number-item').length;

    currentIndex = (currentIndex - itemsPerView + totalItems) % totalItems;
    updateCarousel();
    updateIndicators();
}

document.querySelector('.next').addEventListener('click', () => {
    nextSet();
    resetAutoSlide();
});

document.querySelector('.prev').addEventListener('click', () => {
    prevSet();
    resetAutoSlide();
});

document.querySelectorAll('.indicator').forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        const isMobile = window.innerWidth <= 767;
        const itemsPerView = isMobile ? 1 : 3;

        currentIndex = index * itemsPerView;
        updateCarousel();
        updateIndicators();
        resetAutoSlide();
    });
});

function startAutoSlide() {
    autoSlideInterval = setInterval(nextSet, 5000);
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
}

startAutoSlide();
updateCarousel();
updateIndicators();  // Initialize with first set of data
