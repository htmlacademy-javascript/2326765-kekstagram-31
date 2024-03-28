import {isEscapeKey} from './util.js';

const DESCRIPTION_LENGTH = 140;
const HASHTAGS_LENGTH = 5;

const HASHTAG_PATTERN = /^#[a-zа-яё0-9]{1,19}$/i;

const uploadForm = document.querySelector('.img-upload__form');
const hashtagText = uploadForm.querySelector('.text__hashtags');
const descriptionText = uploadForm.querySelector('.text__description');

const submitButton = uploadForm.querySelector('.img-upload__submit');

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  // errorClass: 'has-danger',
  // successClass: 'has-success',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'div',
  errorTextClass: 'img-upload__field-wrapper--error'
});


const validateDescription = (value) => value.length <= DESCRIPTION_LENGTH;

pristine.addValidator(descriptionText, validateDescription, `Не больше ${DESCRIPTION_LENGTH} символов`);


const checkHashtagPattern = (value) => {
  value.split(' ').every((el) => HASHTAG_PATTERN.test(el));
  if (value === '') {
    return true;
  }
};

pristine.addValidator(hashtagText, checkHashtagPattern, 'Хэштег должен начинаться с # и состоять только из букв или цифр');


const checkDuplicateHashtag = (value) => {
  value.toLowerCase().trim().split(' ').filter((el, i, arr) => arr.indexOf(el) === i);
  // new Set(value.toLowerCase().trim().split(' ').size === value.split(' ').length);
  if (value === '') {
    return true;
  }
};

pristine.addValidator(hashtagText, checkDuplicateHashtag, 'Хэштеги не должны повторятся');


function checkHashtagLength (value) {
  return value.toLowerCase().trim().split(' ').length <= HASHTAGS_LENGTH;
}

pristine.addValidator(hashtagText, checkHashtagLength, `Не больше ${HASHTAGS_LENGTH} хэштегов`);


const validateForm = () => {

  uploadForm.addEventListener('submit', (evt) => {
    pristine.validate();
    evt.preventDefault();

    if (!pristine.validate()) {
      submitButton.setAttribute('disabled', 'true');
    }
  });
};

validateForm();

const onField = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    if (document.activeElement === hashtagText || document.activeElement === descriptionText) {
      evt.stopPropagation();
    }
  }
};

descriptionText.addEventListener('keydown', onField);

hashtagText.addEventListener('keydown', onField);
