import {
  getNext, getPrev, getNth, getNumberOfImages, getStatus,
// eslint-disable-next-line import/extensions
} from './pictures.js'; // eslint doesn't know this, but it won't work without .js extension

const currentImageImg = document.querySelector('#img img');
const oldImageImg = document.querySelector('#old_img img');
const captionDiv = document.querySelector('.caption');
const statusDiv = document.querySelector('.status');

const loadTime = 100;
const changeTime = 500;
let slideTime = 3000;

const updateStatus = () => {
  statusDiv.innerHTML = getStatus();
};

const changeImage = (url, caption) => {
  oldImageImg.setAttribute('src', currentImageImg.getAttribute('src'));
  currentImageImg.style.opacity = 0;
  currentImageImg.setAttribute('src', url);
  currentImageImg.setAttribute('alt', caption);
  captionDiv.innerHTML = caption;
  updateStatus();
  setTimeout(() => {
    currentImageImg.style.opacity = 1;
    setTimeout(() => {
      oldImageImg.setAttribute('src', url);
    }, changeTime);
  }, loadTime); // leave some time to load the image
};

const changeImageObj = (obj) => {
  const { src, caption } = obj;
  changeImage(src, caption);
};

const loadNext = () => {
  changeImageObj(getNext());
};

const loadPrev = () => {
  changeImageObj(getPrev());
};

const loadNth = (n) => {
  changeImageObj(getNth(n));
};

loadNth(0);
document.querySelector('.go_left').addEventListener('click', loadPrev);
document.querySelector('.go_right').addEventListener('click', loadNext);

const createCircles = (n) => {
  let circles = '';
  for (let i = 0; i < n; i += 1) {
    circles += '<span class="dot"></span>\n';
  }
  document.querySelector('.chooser').innerHTML = circles;
};

const addListeners = () => {
  document.querySelectorAll('.dot').forEach((element, index) => {
    element.addEventListener('click', () => {
      loadNth(index);
    });
  });
};

const changeHeight = (height) => {
  document.querySelector('.gallery').style.height = height;
};

const autoSlide = () => {
  loadNext();
  if (slideTime !== null) {
    setTimeout(autoSlide, slideTime);
  }
};

const setSpeed = (t) => {
  slideTime = t;
  autoSlide();
};

createCircles(getNumberOfImages());
addListeners();
setSpeed(5000);

// changeHeight('100px');
