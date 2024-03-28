import {isEscapeKey} from './util.js';

const body = document.querySelector('body');
const modalBigPicture = body.querySelector('.big-picture');
const commentsContainer = modalBigPicture.querySelector('.social__comments');
const modalCloseButton = modalBigPicture.querySelector('.big-picture__cancel');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModal();
  }
};

function openModal () {

  modalBigPicture.classList.remove('hidden');
  body.classList.add('modal-open');

  document.addEventListener('keydown', onDocumentKeydown);
}

function closeModal () {

  modalBigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  commentsContainer.innerHTML = '';

  document.removeEventListener('keydown', onDocumentKeydown);
}

modalCloseButton.addEventListener('click', closeModal);

export {openModal};
