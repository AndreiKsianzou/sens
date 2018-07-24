let menu_top = document.querySelector('.header__menu');
let menu_items = document.querySelectorAll('.header__link');
let menu_dot = document.querySelector('.header__dot');
menu_items.forEach((el) => {
    el.addEventListener('mouseover', (e) => {
        let menu_top_coord = menu_top.getBoundingClientRect();
        menu_dot.classList.add('header__dot_active');
        menu_dot.style.left = el.clientWidth*0.5 + (el.getBoundingClientRect().left - menu_top_coord.left) - 3 + 'px';
    });
});
menu_top.addEventListener('mouseout', (e) => {
    menu_dot.classList.remove('header__dot_active');
});