import './functions.js';
import {createUsersPhotosThumbnails} from './users-photos.js';
import {renderBigPhoto} from './render-big-photo.js';
import './modal-upload-form.js';
import './validate-form.js';
import './effects-control.js';
import {getData} from './api.js';
import {showDataAlert} from './alert-messages.js';
import './user-choosen-photo-preview.js';
import {changeFilter} from './filter.js';

getData(
  (usersPhotos) => {
    createUsersPhotosThumbnails(usersPhotos);
    renderBigPhoto(usersPhotos);
    changeFilter(usersPhotos);
  },
  () => {
    showDataAlert();
  }
);
