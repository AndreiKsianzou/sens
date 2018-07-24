let step_line = document.querySelectorAll('.step-line__wrapper');

export function getCoords(elem) {
  var box = elem.getBoundingClientRect();

  var body = document.body;
  var docEl = document.documentElement;

  var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
  var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

  var clientTop = docEl.clientTop || body.clientTop || 0;
  var clientLeft = docEl.clientLeft || body.clientLeft || 0;

  var top = box.top + scrollTop - clientTop;
  var left = box.left + scrollLeft - clientLeft;

  return {
    top: top,
    left: left
  };
}

export function drawLines() {
  window.addEventListener('scroll', (e) => {
    let window_height = document.documentElement.clientHeight;
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    step_line.forEach((el) => {
      let el_top = getCoords(el).top;
      let el_height = el.clientHeight - 55;
      let el_line = el.querySelector('.step-line__points');
      let el_title = el.querySelector('.step-line__title');
      let el_items = el.querySelectorAll('.step-line__item');
      if (scrollTop + 0.7*window_height >= el_top && scrollTop + 0.7*window_height < el_top + el_height) {
        if (!el_title.classList.contains('step-line__title_active')) {
          el_title.classList.add('step-line__title_active');
        }
        let i = 1;
        el_items.forEach((elem) => {
          if (!elem.classList.contains('step-line__item_active') /*&& (scrollTop - el_top + 0.7*window_height) >= getCoords(elem).top - el_top + 10*/) {
            setTimeout(() => {
              elem.classList.add('step-line__item_active');
              el_line.style.height = getCoords(elem).top - el_top + 10 + 'px';
            }, 700*i);
            i++;
          }
        });
      }
    });
  });
}
