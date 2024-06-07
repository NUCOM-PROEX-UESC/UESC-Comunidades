let currentIndex = 0;
let autoSlideInterval;

function updateCarousel() {
    const container = document.querySelector('.numbers-container');
    container.style.transform = `translateX(-${currentIndex * 100 / 3}%)`;
}

function updateIndicators() {
    const indicators = document.querySelectorAll('.indicator');
    indicators.forEach((indicator, index) => {
        if (index === Math.floor(currentIndex / 3)) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

function nextSet() {
    currentIndex = (currentIndex + 3) % 9;
    updateCarousel();
    updateIndicators();
}

function prevSet() {
    currentIndex = (currentIndex - 3 + 9) % 9;
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
        currentIndex = index * 3;
        updateCarousel();
        updateIndicators();
        resetAutoSlide();
    });
});

function startAutoSlide() {
    autoSlideInterval = setInterval(nextSet, 10000);
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
}

startAutoSlide();
updateCarousel();
updateIndicators();  // Initialize with first set of data
