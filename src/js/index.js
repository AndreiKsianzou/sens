import { menuFloating } from './menu';
import { drawLines, getCoords } from './line';
import { efStart, erStart } from './ef';
import { numberStart } from './number';
import { submitForm } from './form';

menuFloating();
drawLines();
efStart();
erStart();
numberStart();

function closeTitle() {
  let window_width = document.documentElement.clientWidth;
  if (window_width <= 600) {
    let part_items = document.querySelectorAll('.box__wrapper_part');
    part_items.forEach((part) => {
      let part_title = part.querySelector('.box__title-wrap');
      let part_title_clone = part_title.cloneNode(true);
      let part_title_mob = part.querySelector('.box__mob-title');
      if (!part_title_mob.classList.contains('box__mob-title_active')) {
        part_title_mob.classList.add('box__mob-title_active');
        part_title_mob.appendChild(part_title_clone);
      }
    });
  } 
}

function fixMenu() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  let navMenu = document.querySelector('.header__navigation');
  let navTop = 85;
  if (scrollTop >= navTop && !navMenu.classList.contains('header__navigation_fixed')) {
    navMenu.classList.add('header__navigation_fixed');
    menuFloating();
  } else if (scrollTop < navTop && navMenu.classList.contains('header__navigation_fixed')) {
    navMenu.classList.remove('header__navigation_fixed');
    menuFloating();
  }
}


window.addEventListener('resize', (e) => {
  closeTitle();
  
});

document.addEventListener('DOMContentLoaded', (e) => {
  closeTitle();
  fixMenu();
});

window.addEventListener('scroll', (e) => {
  fixMenu();
});

let form = document.querySelector('.form__form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  submitForm(e.target);
});

let formItems = form.querySelectorAll('.form__item_req');
formItems.forEach((item) => {
  let input = item.querySelector('.form__req');
  let inputValue = input.value;
  let errorBox = item.querySelector('.form__error');
  input.addEventListener('focus', (e) => {
    item.classList.remove('form__item_error');
    errorBox.classList.remove('form__error_active');
    errorBox.innerHTML = '';
  });
});