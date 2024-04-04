import {isEscapeKey} from './util.js';

const ALERT_SHOW_TIME = 5000;

const BASE_URL = 'https://31.javascript.htmlacademy.pro/kekstagram';

const ROUTE = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};

const showDataAlert = () => {
  const alertContainer = document.querySelector('#data-error').content;
  const content = alertContainer.querySelector('.data-error');
  const clone = content.cloneNode(true);
  const fragment = document.createDocumentFragment();
  const addField = fragment.appendChild(clone);

  document.body.appendChild(addField);

  setTimeout(() => addField.remove(), ALERT_SHOW_TIME);
};


const showSuccess = () => {
  const successContainer = document.querySelector('#success').content;
  const content = successContainer.querySelector('.success');
  const clone = content.cloneNode(true);
  const fragment = document.createDocumentFragment();
  const addField = fragment.appendChild(clone);

  document.body.appendChild(addField);

  const onDocumentKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      close();
    }
  };
  document.addEventListener('keydown', onDocumentKeydown);

  function close () {
    document.removeEventListener('keydown', onDocumentKeydown);
    addField.classList.add('hidden');

  }

  const button = document.querySelector('.success__button');
  button.addEventListener('click', close);
};

const showAlert = () => {
  const alertContainer = document.querySelector('#error').content;
  const content = alertContainer.querySelector('.error');
  const clone = content.cloneNode(true);
  const fragment = document.createDocumentFragment();
  const addField = fragment.appendChild(clone);

  document.body.appendChild(addField);

  const onDocumentKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      close();
    }
  };
  document.addEventListener('keydown', onDocumentKeydown);
  function close () {
    document.removeEventListener('keydown', onDocumentKeydown);
    addField.classList.add('hidden');

  }

  const button = document.querySelector('.error__button');
  button.addEventListener('click', close);
};


const getData = (onSuccess, onFail) => {
  fetch(`${BASE_URL}${ROUTE.GET_DATA}`)
    .then((response) => {
      if (!response.ok) {
        onFail(showDataAlert());
      }
      return response.json();
    })
    .then((data) => {
      onSuccess(data);
    })
    .catch(() => {
      onFail(showDataAlert());
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch(`${BASE_URL}${ROUTE.SEND_DATA}`,
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (!response.ok) {
        onFail(showAlert());
      }
      onSuccess(showSuccess());
    })
    .catch(() => {
      onFail(showAlert());
    })
    .finally();
};

export {getData, sendData};
