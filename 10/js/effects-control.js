const uploadWrapper = document.querySelector('.img-upload__wrapper');
const sliderElement = uploadWrapper.querySelector('.effect-level__slider');
const effectValueElement = uploadWrapper.querySelector('.effect-level__value');
const sliderElementContainer = uploadWrapper.querySelector('.img-upload__effect-level');
const imgPreview = uploadWrapper.querySelector('.img-upload__preview > img');

const effectsList = uploadWrapper.querySelector('.effects__list');

const EFFECTS = {
  origin: {},

  chrome: {
    range: {min: 0, max: 1,},
    step: 0.1,
    start: 1,
  },

  sepia: {
    range: {min: 0, max: 1,},
    step: 0.1,
    start: 1,
  },

  marvin: {
    range: {min: 0, max: 100,},
    step: 1,
    start: 100,
  },

  phobos: {
    range: {min: 0, max: 3,},
    step: 0.1,
    start: 3,
  },

  heat: {
    range: {min: 0, max: 3,},
    step: 0.1,
    start: 3,
  },
};

const DEFAULT = {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 1,
  connect: 'lower',
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
};

const clearFilter = () => {
  imgPreview.style.filter = 'none';
};

noUiSlider.create(sliderElement, DEFAULT);

const addCurrentFilter = (el) => {

  sliderElement.noUiSlider.on('update', () => {
    const currentSliderValue = sliderElement.noUiSlider.get();
    effectValueElement.value = currentSliderValue;

    const PREVIEWS_STYLE = {
      none: 'none',
      chrome: `grayscale(${currentSliderValue})`,
      sepia: `sepia(${currentSliderValue})`,
      marvin: `invert(${currentSliderValue}%)`,
      phobos: `blur(${currentSliderValue}px)`,
      heat: `brightness(${currentSliderValue})`,
    };

    const addFilterToPreview = () => {
      imgPreview.style.filter = PREVIEWS_STYLE[el];
    };
    addFilterToPreview();

  });
};

const updateSliderOptions = (item) => {
  sliderElement.noUiSlider.updateOptions(EFFECTS[item]);
};

const showSlider = () => {
  sliderElement.classList.remove('hidden');
  sliderElementContainer.classList.remove('hidden');
};

const hideSlider = () => {
  sliderElement.classList.add('hidden');
  sliderElementContainer.classList.add('hidden');
};

const onEffectChange = (evt) => {
  const effect = evt.target.value;
  switch(effect) {
    case 'none':
      addCurrentFilter('none');
      hideSlider();
      break;
    case 'chrome':
      addCurrentFilter('chrome');
      updateSliderOptions('chrome');
      showSlider();
      break;
    case 'sepia':
      addCurrentFilter('sepia');
      updateSliderOptions('sepia');
      showSlider();
      break;
    case 'marvin':
      addCurrentFilter('marvin');
      updateSliderOptions('marvin');
      showSlider();
      break;
    case 'phobos':
      addCurrentFilter('phobos');
      updateSliderOptions('phobos');
      showSlider();
      break;
    case 'heat':
      addCurrentFilter('heat');
      updateSliderOptions('heat');
      showSlider();
      break;
  }
};

effectsList.addEventListener('change', onEffectChange);

export {hideSlider};
export {clearFilter};
