import { getCoords } from './line';

export let menu_top = document.querySelector('.header__menu');
export let menu_items = document.querySelectorAll('.header__link');
export let menu_dot = document.querySelector('.header__dot');

export function menuFloating() {
  menu_items = Array.prototype.slice.call(menu_items);
  menu_items.forEach((el) => {
    el.addEventListener('mouseover', (e) => {
        let menu_top_coord = menu_top.getBoundingClientRect();
        menu_dot.classList.add('header__dot_active');
        menu_dot.style.left = el.clientWidth*0.5 + (el.getBoundingClientRect().left - menu_top_coord.left) - 3 + 'px';
    });
    el.addEventListener('click', (e) => {
      let menu_top_coord = menu_top.getBoundingClientRect();
      menu_dot.classList.add('header__dot_active');
      menu_dot.style.left = el.clientWidth*0.5 + (el.getBoundingClientRect().left - menu_top_coord.left) - 3 + 'px';
  });
    let cor = el.getAttribute('href');
    let section = document.querySelector(cor);
    let topSection = getCoords(section).top;
    let heightSection = section.clientHeight;
    window.addEventListener('scroll', (e) => {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      let window_height = document.documentElement.clientHeight;
      if (scrollTop + 70 >= topSection && scrollTop - 70 < topSection + heightSection) {
        menu_items.forEach((el) => {
          el.classList.remove('header__link_active');
        });
        el.classList.add('header__link_active');
        menu_dot.classList.add('header__dot_active');
      } else {
        el.classList.remove('header__link_active');
        menu_dot.classList.remove('header__dot_active');
      }
      let activeMenu = document.querySelector('.header__link_active');
      if (activeMenu) {
        menu_dot.classList.add('header__dot_active');
        let menu_top_coord = menu_top.getBoundingClientRect();
        menu_dot.style.left = activeMenu.clientWidth*0.5 + (activeMenu.getBoundingClientRect().left - menu_top_coord.left) - 3 + 'px';
      }
      
    });
  });
  menu_top.addEventListener('mouseout', (e) => {
    let active_menu = document.querySelector('.header__link_active');
    let menu_top_coord = menu_top.getBoundingClientRect();
    if (!active_menu) {
      menu_dot.classList.remove('header__dot_active');
    } else {
      menu_dot.style.left = active_menu.clientWidth*0.5 + (active_menu.getBoundingClientRect().left - menu_top_coord.left) - 3 + 'px';
    }
  });
  
}


