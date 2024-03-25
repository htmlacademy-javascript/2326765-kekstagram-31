import {isEscapeKey} from './util.js';

const body = document.querySelector('body');
const modalBigPicture = body.querySelector('.big-picture');

const modalCloseButton = modalBigPicture.querySelector('.big-picture__cancel');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModal();
  }
};

function openModal () {
  // 1. Показать окно
  // 2. Добавить обработчики для закрытия

  modalBigPicture.classList.remove('hidden');

  body.classList.add('modal-open');

  document.addEventListener('keydown', onDocumentKeydown);
}

function closeModal () {
  // 1. Скрыть окно
  // 2. Удалить обработчики для закрытия

  modalBigPicture.classList.add('hidden');
  body.classList.remove('modal-open');

  document.removeEventListener('keydown', onDocumentKeydown);
}

modalCloseButton.addEventListener('click', () => {
  closeModal();
});

export {openModal};
