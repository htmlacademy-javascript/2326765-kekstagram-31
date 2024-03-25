const COMMENTS_COUNT = 5;
let currentCount = 0;
let comments = [];

const modalBigPicture = document.querySelector('.big-picture');

const commentsContainer = modalBigPicture.querySelector('.social__comments');
const commentTemplate = modalBigPicture.querySelector('.social__comment');

const shownComments = modalBigPicture.querySelector('.social__comment-shown-count');
const commentsLoaderButton = modalBigPicture.querySelector('.comments-loader');

commentsContainer.innerHTML = '';

const addCommentsList = () => {
  // const currentComment = array.find((el) => el.id === Number(id));
  // это удаляются комменты, которые были до:
  // commentsContainer.innerHTML = '';

  const renderedComments = comments.slice(currentCount, currentCount + COMMENTS_COUNT);
  const renderedCommentsLength = renderedComments.length + currentCount;

  renderedComments.forEach((comment) => {
    const commentItem = commentTemplate.cloneNode(true);

    const nick = commentItem.querySelector('.social__picture');

    nick.src = comment.avatar;
    nick.alt = comment.name;
    commentItem.querySelector('.social__text').textContent = comment.message;

    commentsContainer.appendChild(commentItem);
  });

  shownComments.textContent = renderedCommentsLength;
  // totalComments.textContent = renderedComments.length;
  // totalComments.textContent = commentsContainer.children.length;

  if (renderedCommentsLength >= comments.length) {
    commentsLoaderButton.classList.add('hidden');
  }

  currentCount += COMMENTS_COUNT;
};


const removeComments = () => {
  currentCount = 0;
  commentsContainer.innerHTML = '';
  commentsLoaderButton.classList.remove('hidden');
  commentsLoaderButton.removeEventListener('click', addCommentsList);
};

const renderComments = (currentPhotoComments) => {
  comments = currentPhotoComments;
  addCommentsList();

  commentsLoaderButton.addEventListener('click', addCommentsList);
};

export {removeComments, renderComments};
