import {isEscapeKey} from './util.js';
import {resetScale, changeScale} from './scale-control.js';
import {hideSlider, clearFilter} from './effects-control.js';
import {resetValidator} from './validate-form.js';

const body = document.querySelector('body');

const uploadForm = body.querySelector('.img-upload__form');
const uploadInput = uploadForm.querySelector('.img-upload__input');
const uploadFormEdit = uploadForm.querySelector('.img-upload__overlay');
const uploadCloseButton = uploadForm.querySelector('.img-upload__cancel');
const hashtagText = uploadForm.querySelector('.text__hashtags');
const descriptionText = uploadForm.querySelector('.text__description');

const isAlertShown = () => Boolean(document.querySelector('.error'));

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt) && !(document.activeElement === hashtagText || document.activeElement === descriptionText) && !isAlertShown()) {
    evt.preventDefault();
    closeForm();
  }
};

function openForm () {
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);

  uploadFormEdit.classList.remove('hidden');
  hideSlider();
}

function closeForm () {
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);

  uploadFormEdit.classList.add('hidden');
  uploadInput.value = '';
  hashtagText.value = '';
  descriptionText.value = '';
  resetScale();
  clearFilter();
  resetValidator();
}

changeScale();

uploadInput.addEventListener('change', openForm);

uploadCloseButton.addEventListener('click', closeForm);

const onFocusFieldKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.stopPropagation();
    evt.target.blur();
  }
};

descriptionText.addEventListener('keydown', onFocusFieldKeydown);
hashtagText.addEventListener('keydown', onFocusFieldKeydown);

export {onDocumentKeydown, closeForm};
