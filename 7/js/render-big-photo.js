import {openModal} from './modal.js';
import {removeComments, renderComments} from './render-comments.js';

const usersPhotosContainer = document.querySelector('.pictures');
const modalBigPicture = document.querySelector('.big-picture');
const totalComments = modalBigPicture.querySelector('.social__comment-total-count');

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

    // удаляет все комменты, в т.ч. предыдущих фото:
    removeComments();
    // комментарии:
    // shownComments.textContent = currentPhoto.comments.length;
    // с этим здесь проблема:
    totalComments.textContent = currentPhoto.comments.length;

    // addCommentsList(array, pictureId);
    renderComments(currentPhoto.comments);

    openModal();
  });
};

export {renderBigPhoto};
