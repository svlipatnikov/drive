import { imagesUrl } from 'api/sendRequest';

const getImageSrc = (path) => {
  if (path.indexOf('base64') !== -1) return path;
  return imagesUrl + path;
};

export default getImageSrc;
