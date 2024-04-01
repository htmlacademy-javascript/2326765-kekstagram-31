import {isEscapeKey} from './util.js';
import {resetScale} from './scale-control.js';

const body = document.querySelector('body');
const modalBigPicture = body.querySelector('.big-picture');
const commentsContainer = modalBigPicture.querySelector('.social__comments');
const modalCloseButton = modalBigPicture.querySelector('.big-picture__cancel');

const uploadForm = body.querySelector('.img-upload__form');
const uploadInput = uploadForm.querySelector('.img-upload__input');
const uploadFormEdit = uploadForm.querySelector('.img-upload__overlay');
const hashtagText = uploadForm.querySelector('.text__hashtags');
const descriptionText = uploadForm.querySelector('.text__description');

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

  uploadFormEdit.classList.add('hidden');
  uploadInput.value = '';
  hashtagText.value = '';
  descriptionText.value = '';
  resetScale();
}

modalCloseButton.addEventListener('click', closeModal);

export {openModal};
export {closeModal};
export {onDocumentKeydown};
