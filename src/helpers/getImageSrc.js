import { IMAGES_URL } from 'api/const';
import defaultCarImg from 'assets/images/defaultCar.png';

const getImageSrc = (path) => {
  if (path.search('base64') !== -1) {
    return path;
  } else if (
    path.search('localhost') !== -1 ||
    path.split('http').length % 2 === 0 ||
    path.search('selectedFile.name') !== -1
  ) {
    return defaultCarImg;
  }
  return IMAGES_URL + path;
};

export default getImageSrc;
