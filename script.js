const container = document.querySelector('.container');
const hamburgerMenu = document.querySelector('.hamburger-menu');

hamburgerMenu.addEventListener('click', () => {
    container.classList.toggle('change');
});