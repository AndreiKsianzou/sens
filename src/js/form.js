function validationForm(form) {
  let formInputs = form.querySelectorAll('.form__item_req');
  formInputs.forEach((item) => {
    let input = item.querySelector('.form__req');
    let inputName = input.getAttribute('name');
    let inputValue = input.value;
    let errorBox = item.querySelector('.form__error');
    if (inputName == 'email') {
      if (!validEmail(inputValue)) {
        item.classList.add('form__item_error');
        item.classList.remove('form__item_no-error');
        errorBox.classList.add('form__error_active');
        errorBox.innerHTML = "Fill this field";
      } else {
        item.classList.remove('.form__item_error');
        item.classList.add('form__item_no-error');
        errorBox.classList.remove('form__error_active');
        errorBox.innerHTML = "";
      }
    } else {
      if (!validText(inputValue)) {
        item.classList.add('form__item_error');
        item.classList.remove('form__item_no-error');
        errorBox.classList.add('form__error_active');
        errorBox.innerHTML = "Fill this field";
      } else {
        item.classList.remove('form__item_error');
        item.classList.add('form__item_no-error');
        errorBox.classList.remove('form__error_active');
        errorBox.innerHTML = "";
      }
    }
  });
}

export function submitForm(form) {
  validationForm(form);
  let allFormInputs = form.querySelectorAll('.form__item_req');
  let noErrorInputs = form.querySelectorAll('.form__item_no-error');
  let formInputs = form.querySelectorAll('.form__req');
  if (allFormInputs.length <= noErrorInputs.length) {
    sendMessage(form);
    formInputs.forEach((input) => {
      input.value = '';
    });
  }
}

function sendMessage(form) {
  let thanks = 'Your message has been sent';
  let body = document.querySelector('body');
  let popup = document.createElement('div');
  let popup_wrap = document.createElement('div');
  let popup_box = document.createElement('div');
  let popup_span = document.createElement('span');
  popup_span.innerHTML = thanks;
  popup.className = 'popup';
  popup_wrap.className = 'popup__wrapper';
  popup_box.className = 'popup__box';
  popup_box.appendChild(popup_span);
  popup_wrap.appendChild(popup_box);
  popup.appendChild(popup_wrap);
  body.appendChild(popup);
  setTimeout(() => {
    body.removeChild(popup);
  }, 3500);
}

function validText(value) {
  let rv_name = /^[a-zA-Zа-яА-Я]+$/;
  if (value.length > 2 && value != '' && rv_name.test(value)) {
    return true;
  } else {
    return false;
  }
}

function validEmail(value) {
  let rv_email = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
  if (value != '' && rv_email.test(value)) {
    return true;
  } else {
    return false;
  }
}