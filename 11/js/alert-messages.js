import {isEscapeKey} from './util.js';

const ALERT_SHOW_TIME = 5000;

let addField = null;

const showSomeAlert = (type) => {

  const alertContainer = document.querySelector(`#${type}`).content;
  const content = alertContainer.querySelector(`.${type}`);
  const clone = content.cloneNode(true);
  const fragment = document.createDocumentFragment();
  addField = fragment.appendChild(clone);

  document.body.appendChild(addField);

  return addField;
};

const showDataAlert = () => {

  addField = showSomeAlert('data-error');

  document.body.appendChild(addField);

  const alert = addField;

  setTimeout(() => {
    alert.remove();
  }, ALERT_SHOW_TIME);

};

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    close();
  }
};

const onDocumentClick = (evt) => {
  if (!evt.target.classList.contains('succes__inner, error__inner')) {
    close();
  }
};

function close () {
  const alertMessage = document.querySelector('.success, .error');
  alertMessage.classList.add('hidden');
  document.removeEventListener('keydown', onDocumentKeydown);
  document.removeEventListener('keydown', onDocumentClick);
}

const showSuccess = () => {

  addField = showSomeAlert('success');

  document.body.appendChild(addField);

  document.addEventListener('keydown', onDocumentKeydown);
  document.querySelector('.success__button').addEventListener('click', close);
  document.addEventListener('click', onDocumentClick);
};

const showAlert = () => {

  addField = showSomeAlert('error');

  document.body.appendChild(addField);

  document.addEventListener('keydown', onDocumentKeydown);
  document.querySelector('.error__button').addEventListener('click', close);
  document.addEventListener('click', onDocumentClick);
};

const showFileError = (errMessage) => {

  addField = showSomeAlert('data-error');

  document.body.appendChild(addField);

  if (errMessage) {
    addField.textContent = errMessage;
  }
  const alert = addField;

  setTimeout(() => {
    alert.remove();
  }, ALERT_SHOW_TIME);

};

export {showDataAlert, showSuccess, showAlert, showFileError};
