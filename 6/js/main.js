import './functions.js';
import {similarPhotosDescription} from './mock-data.js';
import {createUsersPhotosThumbnails} from './users-photos.js';
import {renderBigPhoto} from './render-big-photo.js';

const usersPhotos = similarPhotosDescription();
createUsersPhotosThumbnails(usersPhotos);
renderBigPhoto(usersPhotos);
