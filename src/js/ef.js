import { getCoords } from './line';

export function efStart() {
  let ef_items = document.querySelectorAll('.ef');
  window.addEventListener('scroll', (e) => {
    let window_height = document.documentElement.clientHeight;
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let winPart = 0.7*window_height;
    let topPart = 0.7*window_height;
    ef_items.forEach((element) => {
      let ef_val = element.getAttribute('data-x');
      let ef_top = getCoords(element).top;
      let ef_move = ef_val*(scrollTop - ef_top + topPart)/winPart;
      if (scrollTop + topPart >= ef_top && scrollTop + topPart - winPart < ef_top) {
        if (element.classList.contains('ef_left')) {
          element.style.transform = 'translateX('+ ef_move +'px)';
        } else if (element.classList.contains('ef_right')) {
          element.style.transform = 'translateX(-'+ ef_move +'px)';
        }
      }
    });
  });
}

export function erStart() {
  let er_items = document.querySelectorAll('.er');
  window.addEventListener('scroll', (e) => {
    let window_height = document.documentElement.clientHeight;
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let topPart = 0.7*window_height;
    er_items.forEach((element) => {
      let er_top = getCoords(element).top;
      if (scrollTop + topPart >= er_top) {
        element.classList.add('er_active');
      }
    });
  });
}