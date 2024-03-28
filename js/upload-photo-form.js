import {isEscapeKey} from './util.js';

const body = document.querySelector('body');

const uploadForm = body.querySelector('.img-upload__form');
const uploadInput = uploadForm.querySelector('.img-upload__input');
const uploadFormEdit = uploadForm.querySelector('.img-upload__overlay');
const uploadCloseButton = uploadForm.querySelector('.img-upload__cancel');

const onDocumentKeydownForm = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeFormModal();
  }
};

function openFormModal () {
  uploadFormEdit.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydownForm);
}

function closeFormModal () {
  uploadFormEdit.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydownForm);
  uploadInput.value = '';
}

uploadInput.addEventListener('click', openFormModal);

uploadCloseButton.addEventListener('click', closeFormModal);

export {openFormModal};
