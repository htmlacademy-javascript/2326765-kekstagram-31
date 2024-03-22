const modalBigPicture = document.querySelector('.big-picture');

const commentsContainer = modalBigPicture.querySelector('.social__comments');
const commentTemplate = modalBigPicture.querySelector('.social__comment');

const addCommentsList = (array, id) => {
  const currentComment = array.find((el) => el.id === Number(id));
  commentsContainer.innerHTML = '';

  currentComment.comments.forEach(({avatar, name, message}) => {
    const commentItem = commentTemplate.cloneNode(true);

    const nick = commentItem.querySelector('.social__picture');

    nick.src = avatar;
    nick.alt = name;
    commentItem.querySelector('.social__text').textContent = message;

    commentsContainer.appendChild(commentItem);
  });
};

export {addCommentsList};
