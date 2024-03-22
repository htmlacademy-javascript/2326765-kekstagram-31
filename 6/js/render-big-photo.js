import {openModal} from './modal.js';
import {addCommentsList} from './render-comments.js';

const usersPhotosContainer = document.querySelector('.pictures');
const modalBigPicture = document.querySelector('.big-picture');

// создаёт большие модальные картинки
const renderBigPhoto = (array) => {
  usersPhotosContainer.addEventListener('click', (evt) => {
    evt.preventDefault();
    const targetPicture = evt.target.closest('.picture');
    const pictureId = targetPicture.dataset.pictureId;

    const currentPhoto = array.find((el) => el.id === Number(pictureId));

    modalBigPicture.querySelector('.big-picture__img img').src = currentPhoto.url;
    modalBigPicture.querySelector('.likes-count').textContent = currentPhoto.likes;
    modalBigPicture.querySelector('.social__caption').textContent = currentPhoto.description;

    modalBigPicture.querySelector('.social__comment-shown-count').textContent = currentPhoto.comments.length;
    modalBigPicture.querySelector('.social__comment-total-count').textContent = currentPhoto.comments.length;

    addCommentsList(array, pictureId);

    openModal();
  });
};

export {renderBigPhoto};
