import {closeModal, onDocumentKeydown} from './modal.js';
import {changeScale} from './scale-control.js';

const body = document.querySelector('body');

const uploadForm = body.querySelector('.img-upload__form');
const uploadInput = uploadForm.querySelector('.img-upload__input');
const uploadFormEdit = uploadForm.querySelector('.img-upload__overlay');
const uploadCloseButton = uploadForm.querySelector('.img-upload__cancel');


function openForm () {
  uploadFormEdit.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
}

uploadInput.addEventListener('change', openForm);

uploadCloseButton.addEventListener('click', closeModal);

changeScale();
