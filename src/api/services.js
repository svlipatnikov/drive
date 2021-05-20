import sendRequest from './sendRequest';

const getCities = async () => {
  const request = await sendRequest('/db/city', 'GET');
  if (request) return request.data;
};

const getPoints = async () => {
  const request = await sendRequest('/db/point', 'GET');
  if (request) return request.data;
};

const getCategory = async () => {
  const request = await sendRequest('/db/category', 'GET');
  if (request) return request.data;
};

const getCars = async () => {
  const request = await sendRequest('/db/car', 'GET');
  if (request) return request.data;
};

const getRate = async () => {
  const request = await sendRequest('/db/rate', 'GET');
  if (request) return request.data;
};

const getStatus = async () => {
  const request = await sendRequest('/db/orderStatus', 'GET');
  if (request) return request.data;
};

const postNewOrder = async (order) => {
  const request = await sendRequest('/db/order', 'POST', order);
  if (request) return request.data;
};

const getOrder = async (orderId) => {
  const request = await sendRequest(`/db/rate/${orderId}`, 'GET');
  if (request) return request.data;
};

export const api = {
  getCities,
  getPoints,
  getCategory,
  getCars,
  getRate,
  getStatus,
  postNewOrder,
  getOrder,
};
