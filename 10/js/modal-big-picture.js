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
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);

  modalBigPicture.classList.remove('hidden');
}

function closeModal () {
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);

  modalBigPicture.classList.add('hidden');
  commentsContainer.innerHTML = '';
}

modalCloseButton.addEventListener('click', closeModal);

export {openModal};
export {closeModal};
