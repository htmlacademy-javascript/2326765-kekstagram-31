const imgUploadWrapper = document.querySelector('.img-upload__wrapper');
const scaleControlSmaller = imgUploadWrapper.querySelector('.scale__control--smaller');
const scaleControlBigger = imgUploadWrapper.querySelector('.scale__control--bigger');
const scaleControlValue = imgUploadWrapper.querySelector('.scale__control--value');
const imgPreview = imgUploadWrapper.querySelector('.img-upload__preview');
const MIN_SCALE = 25;
const MAX_SCALE = 100;
const STEP = 25;

let scaleValue = parseInt(scaleControlValue.value, 10);

const changeScale = () => {

  scaleControlSmaller.addEventListener('click', () => {

    if (scaleValue > MIN_SCALE) {
      scaleValue -= STEP;
      scaleControlValue.value = `${scaleValue}%`;

      imgPreview.querySelector('img').style.transform = `scale(${scaleValue / 100})`;
    }
  });

  scaleControlBigger.addEventListener('click', () => {

    if (scaleValue < MAX_SCALE) {
      scaleValue += STEP;
      scaleControlValue.value = `${scaleValue}%`;

      imgPreview.querySelector('img').style.transform = `scale(${scaleValue / 100})`;
    }
  });
};

const resetScale = () => {
  scaleControlValue.value = MAX_SCALE;
  scaleValue = MAX_SCALE;
  imgPreview.style.transform = `scale(${scaleValue / 100})`;
};

export {changeScale};
export {resetScale};
