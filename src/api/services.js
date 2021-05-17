import sendRequest from './sendRequest';

export const getCities = async () => {
  const result = await sendRequest('/db/city', 'GET');
  if (result) return result.data;
};

export const getPoints = async () => {
  const result = await sendRequest('/db/point', 'GET');
  if (result) return result.data;
};

export const getCategory = async () => {
  const result = await sendRequest('/db/category', 'GET');
  if (result) return result.data;
};

export const getCars = async () => {
  const result = await sendRequest('/db/car', 'GET');
  if (result) return result.data;
};

export const getRate = async () => {
  const result = await sendRequest('/db/rate', 'GET');
  if (result) return result.data;
};