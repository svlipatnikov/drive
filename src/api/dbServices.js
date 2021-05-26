import { DB_API_URL } from 'api/const';
import sendRequest from 'api/sendRequest';

const getCities = async () => {
  const request = await sendRequest(DB_API_URL + '/db/city', 'GET');
  if (request) return request.data;
};

const getPoints = async () => {
  const request = await sendRequest(DB_API_URL + '/db/point', 'GET');
  if (request) return request.data;
};

const getCategory = async () => {
  const request = await sendRequest(DB_API_URL + '/db/category', 'GET');
  if (request) return request.data;
};

const getCars = async () => {
  const request = await sendRequest(DB_API_URL + '/db/car', 'GET');
  if (request) return request.data;
};

const getRate = async () => {
  const request = await sendRequest(DB_API_URL + '/db/rate', 'GET');
  if (request) return request.data;
};

const getStatus = async () => {
  const request = await sendRequest(DB_API_URL + '/db/orderStatus', 'GET');
  if (request) return request.data;
};

const postNewOrder = async (order) => {
  const request = await sendRequest(DB_API_URL + '/db/order', 'POST', order);
  if (request) return request.data;
};

const getOrder = async (orderId) => {
  const request = await sendRequest(DB_API_URL + `/db/order/${orderId}`, 'GET');
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
