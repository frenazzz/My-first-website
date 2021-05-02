//nav
const burgerBtn = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const navItems = document.querySelectorAll('.nav__item');
//animations
const headerImg = document.querySelector('.header__img');
const headerText = document.querySelector('.header__text-text');


const footerYear = document.querySelector('.footer__year');

//nav
const openNav = () => {
    burgerBtn.classList.toggle('is-active');
    nav.classList.toggle('nav-active');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            nav.classList.remove('nav-active')
            burgerBtn.classList.remove('is-active')
        });
    })
    navItemsAnimation();
};
const navItemsAnimation = () => {
    let delayTime = 0;
    navItems.forEach(item => {
        item.classList.toggle('nav-items-animation')
        item.style.animationDelay = '.' + delayTime + 's';
        delayTime++;
    });
};
//animations
gsap.fromTo(headerImg, 2, {opacity:0}, {opacity:1});
gsap.fromTo(headerText, 2, {opacity:0, }, {opacity:1, delay:1});


//footer
const curretYear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerText = year;
}
curretYear();

burgerBtn.addEventListener('click', openNav);
