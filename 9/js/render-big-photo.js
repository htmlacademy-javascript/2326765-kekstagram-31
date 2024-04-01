import {openModal} from './modal.js';
import {removeComments, renderComments} from './render-comments.js';

const usersPhotosContainer = document.querySelector('.pictures');
const modalBigPicture = document.querySelector('.big-picture');
const totalComments = modalBigPicture.querySelector('.social__comment-total-count');

const renderBigPhoto = (array) => {

  usersPhotosContainer.addEventListener('click', (evt) => {

    const targetPicture = evt.target.closest('.picture');

    if (!targetPicture) {
      return;
    }

    const pictureId = targetPicture.dataset.pictureId;

    evt.preventDefault();

    const currentPhoto = array.find((el) => el.id === Number(pictureId));

    modalBigPicture.querySelector('.big-picture__img img').src = currentPhoto.url;
    modalBigPicture.querySelector('.likes-count').textContent = currentPhoto.likes;
    modalBigPicture.querySelector('.social__caption').textContent = currentPhoto.description;

    removeComments();
    totalComments.textContent = currentPhoto.comments.length;
    renderComments(currentPhoto.comments);

    openModal();
  });
};

export {renderBigPhoto};
