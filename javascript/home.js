let currentSlide = 0;
const slides = document.querySelectorAll('.home-sliders');
const sliderContainer = document.querySelector('.slider-contant');

// Function to slide the container
function sliderFunction(index) {
    // Check boundaries
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    // Move the slider container
    sliderContainer.style.transform = `translateX(-${currentSlide * 105}%)`;
}

// Initialize the first slide
sliderFunction(currentSlide);

// Event listeners for buttons
document.querySelector('.right').addEventListener('click', () => {
    sliderFunction(currentSlide - 1);
});
document.querySelector('.left').addEventListener('click', () => {
    sliderFunction(currentSlide + 1);
});




// Function to start the loop
function startLoop() {
    const displayElement = document.querySelector('.lop');
    for (let i = 250; i <= 300; i++) {
        setTimeout(() => {
            displayElement.innerHTML = `${i} +`;
        }, (i - 250) * 50); // Adjust the delay as needed
    }
}

function startLoopto() {
    const displayElementto = document.querySelector('.lop-to');
    for (let i = 280; i <= 310; i++) {
        setTimeout(() => {
            displayElementto.innerHTML = `${i} +`;
        }, (i - 280) * 50); // Adjust the delay as needed
    }
}


// Intersection Observer to trigger the loop when in view
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            startLoop();
            startLoopto()
            observer.unobserve(entry.target); // Stop observing once triggered
        }
    });
});

// Start observing the section
observer.observe(document.querySelector('.section-to-observe'));
export const nav = document.querySelector('.nav');
