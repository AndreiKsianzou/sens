import { getCoords } from './line';

export function numberStart() {
  let number_lists = document.querySelectorAll('.number-list');
  window.addEventListener('scroll', (e) => {
    let window_height = document.documentElement.clientHeight;
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    number_lists.forEach((list) => {
      let top_list = getCoords(list).top;
      let number_items = list.querySelectorAll('.number-list__item');
      if (scrollTop + 0.7*window_height >= top_list) {
        let i = 1;
        number_items.forEach((item) => {
          if (!item.classList.contains('number-list__item_active') /*&& (scrollTop - el_top + 0.7*window_height) >= getCoords(elem).top - el_top + 10*/) {
            setTimeout(() => {
              item.classList.add('number-list__item_active');
            }, 400*i);
            i++;
          }
        });
      }
    });
  });
}