import {getRandomInteger} from './util.js';
import {getRandomNumberFromRange} from './util.js';
import {getRandomArrayElement} from './util.js';
import {NAMES, DESCRIPTION_LIST, MESSAGE_LIST} from './data.js';

const getRandomCommentId = getRandomNumberFromRange(0, 999);
const getRandomPhotoId = getRandomNumberFromRange(1, 25);
const getRandomUrlIndex = getRandomNumberFromRange(1, 25);
const getRandomLikes = getRandomNumberFromRange(15, 200);

const createObjectComment = () => ({
  id: getRandomCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: getRandomArrayElement(MESSAGE_LIST),
  name: getRandomArrayElement(NAMES)
});

const createPhotoDescription = () => ({
  id: getRandomPhotoId(),
  url: `photos/${getRandomUrlIndex()}.jpg`,
  description: getRandomArrayElement(DESCRIPTION_LIST),
  likes: getRandomLikes(),
  comments: Array.from({length: getRandomInteger(0, 30)}, createObjectComment)
});

const createSimilarPhotosDescription = () => Array.from({length: 25}, createPhotoDescription);

export {createSimilarPhotosDescription};
