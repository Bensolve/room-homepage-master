// Slider
const slides = document.querySelectorAll('.slide');
let current = 0;

const showSlide = (n) => {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[n].classList.add('active');
    current = n;
};

document.querySelector('.next').addEventListener('click', () => {
    showSlide((current + 1) % slides.length);
});

document.querySelector('.prev').addEventListener('click', () => {
    showSlide((current - 1 + slides.length) % slides.length);
});

// Hamburger & Close Menu
const hamburger = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.close-menu');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    navMenu.classList.remove('active');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Initialize
showSlide(0);