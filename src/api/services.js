import sendRequest from './sendRequest';

export const getDbCities = async () => {
  const result = await sendRequest('/db/city', 'GET');
  return result.data || [];
};

export const getDbPoints = async () => {
  const result = await sendRequest('/db/point', 'GET');
  return result.data || [];
};

export const getDbCategory = async () => {
  const result = await sendRequest('/db/category', 'GET');
  return result.data || [];
};

export const getDbCars = async () => {
  const result = await sendRequest('/db/car', 'GET');
  return result.data || [];
};

export const getDbRate = async () => {
  const result = await sendRequest('/db/rate', 'GET');
  return result.data || [];
};
