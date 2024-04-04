import './functions.js';
import {createUsersPhotosThumbnails} from './users-photos.js';
import {renderBigPhoto} from './render-big-photo.js';
import './upload-photo-form.js';
import {closeForm} from './upload-photo-form.js';
import {setUserFormSubmit} from './validate-form.js';
import './validate-form.js';
import './effects-control.js';
import {getData} from './api.js';

getData((usersPhotos) => {
  createUsersPhotosThumbnails(usersPhotos);
  renderBigPhoto(usersPhotos);
});

setUserFormSubmit(closeForm);
