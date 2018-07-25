import { menuFloating } from './menu';
import { drawLines } from './line';
import { efStart, erStart } from './ef';
import { numberStart } from './number';

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


window.addEventListener('resize', (e) => {
  closeTitle();
});

document.addEventListener('DOMContentLoaded', (e) => {
  closeTitle();
});