// Hamburger Menu
const menu = document.querySelector('.hamburger-menu');
const nav = document.querySelector('.menu ul')

menu.addEventListener('click', () => {
    menu.classList.toggle('active')
});

menu.addEventListener('click', () => {
    nav.classList.toggle('slide')
});


// Animate Fixed Navbar
const navbar = document.querySelector('.menu');

function scrollTop() {
    const scroll = window.scrollY;
    if (scroll > 70) {
        navbar.classList.add('fixed')
    } else {
        navbar.classList.remove('fixed')
    }
}
window.addEventListener('scroll', scrollTop);


// Animate Skills Icons Card AOS
const card = document.querySelectorAll('.icon-card');

card.forEach((icon, i) => {
    icon.dataset.aos = 'fade-up';
    icon.dataset.aosDelay = i * 100;
});


// AOS
AOS.init({
    once: true,
    duration: 1000
});