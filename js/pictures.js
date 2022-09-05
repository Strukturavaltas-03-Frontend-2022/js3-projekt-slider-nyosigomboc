const pictures = [
  {
    src: 'images/2022 JUNIOR U23 WCH Photo Finish 164.jpg',
    caption: 'Lucz Anna gold medal photofinish',
  },
  {
    src: 'images/IMG_20220830_180440.jpg',
    caption: 'Opening ceremony',
  },
  {
    src: 'images/IMG_20220831_140519.jpg',
    caption: 'Rescue boats at the finish line',
  },
  {
    src: 'images/IMG_20220903_101019.jpg',
    caption: 'Another gold medal',
  },
  {
    src: 'images/IMG_20220903_145756.jpg',
    caption: 'Yet another gold medal',
  },
  {
    src: 'images/IMG_20220904_094451.jpg',
    caption: 'My stuff',
  },
  {
    src: 'images/IMG_20220904_171908.jpg',
    caption: '5000m turn',
  },
];

let currentIndex = 0;
const numberOfImages = pictures.length;

export const getCurrentIndex = () => currentIndex;
export const getNumberOfImages = () => numberOfImages;

export const getCurrent = () => pictures[currentIndex];

export const getNext = () => {
  currentIndex = (currentIndex + numberOfImages + 1) % numberOfImages;
  return getCurrent();
};

export const getPrev = () => {
  currentIndex = (currentIndex + numberOfImages - 1) % numberOfImages;
  return getCurrent();
};

export const getNth = (n) => {
  currentIndex = n;
  return getCurrent();
};

export const getStatus = () => `${getCurrentIndex() + 1}/${getNumberOfImages()}`;
