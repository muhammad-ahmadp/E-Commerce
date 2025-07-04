const hamburger = document.getElementById('menu');
const closeBtn = document.getElementById('close');
const menu = document.querySelector('.header__menu');
const links = document.querySelectorAll('.header__link');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
    hamburger.style.display = 'none'; // hide hamburger
    closeBtn.style.display = 'block'; // show close button
});

closeBtn.addEventListener('click', () => {
    menu.classList.remove('active');
    hamburger.style.display = 'block'; // show hamburger
    closeBtn.style.display = 'none'; // hide close button
});

links.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
        hamburger.style.display = 'block'; // show hamburger again
        closeBtn.style.display = 'none'; // hide close button
    });
});
