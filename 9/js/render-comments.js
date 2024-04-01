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

  const commentsToRender = comments.slice(currentCount, currentCount + COMMENTS_COUNT);
  const renderedCommentsLength = commentsToRender.length + currentCount;

  commentsToRender.forEach((comment) => {
    const commentItem = commentTemplate.cloneNode(true);

    const authorOfComment = commentItem.querySelector('.social__picture');

    authorOfComment.src = comment.avatar;
    authorOfComment.alt = comment.name;
    commentItem.querySelector('.social__text').textContent = comment.message;

    commentsContainer.appendChild(commentItem);
  });

  shownComments.textContent = renderedCommentsLength;

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
