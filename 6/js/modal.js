import {isEscapeKey} from './util.js';

const body = document.querySelector('body');
const modalBigPicture = body.querySelector('.big-picture');

const socialCommentsCount = modalBigPicture.querySelector('.social__comment-count');
const commentsLoader = modalBigPicture.querySelector('.comments-loader');
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

  // это скрыто до след задания:
  socialCommentsCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');

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
