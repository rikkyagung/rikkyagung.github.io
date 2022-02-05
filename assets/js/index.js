// Hamburger Menu
const menu = document.querySelector('.hamburger-menu');
const nav = document.querySelector('.menu ul');

menu.addEventListener('click', () => {
    menu.classList.toggle('active');
    nav.classList.toggle('slide');
});


// Animate Fixed Navbar
const navbar = document.querySelector('.menu');

window.addEventListener('scroll', function() {
    const scrolling = window.scrollY;
    scrolling > 70 ? navbar.classList.add('fixed') : navbar.classList.remove('fixed');
})


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


// getYear
const year = document.querySelector('.year');

let getYear = new Date().getFullYear();
year.innerText = getYear;