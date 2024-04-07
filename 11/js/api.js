const BASE_URL = 'https://31.javascript.htmlacademy.pro/kekstagram';

const ROUTE = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};

const getData = (onSuccess, onFail) => {
  fetch(`${BASE_URL}${ROUTE.GET_DATA}`)
    .then((response) => {
      if (!response.ok) {
        onFail();
      }
      return response.json();
    })
    .then((data) => {
      onSuccess(data);
    })
    .catch(() => onFail());
};

const sendData = (body, onFail, onSuccess, onFinally) => {
  fetch(`${BASE_URL}${ROUTE.SEND_DATA}`,
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (!response.ok) {
        onFail();
      } else {
        onSuccess();
      }
    })
    .catch(() => onFail())
    .finally(() => onFinally());
};

export {getData, sendData};
