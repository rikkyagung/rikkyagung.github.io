const menu = document.querySelector('.hamburger-menu');
const nav = document.querySelector('.menu ul')

menu.addEventListener('click', () => {
    menu.classList.toggle('active')
});

menu.addEventListener('click', () => {
    nav.classList.toggle('slide')
});



const navbar = document.querySelector('.menu');

function scrollTop() {
    const scroll = window.scrollY;
    if (scroll > 70) {
        navbar.classList.add('sticky')
    } else {
        navbar.classList.remove('sticky')
    }
}
window.addEventListener('scroll', scrollTop);