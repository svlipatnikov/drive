import {
  SET_DB_CARS,
  SET_DB_CITIES,
  SET_DB_POINTS,
  SET_DB_CATEGORY,
  SET_DB_RATE,
} from 'redux/types';
import sendRequest from 'api';

const setCitiesAction = (cities) => ({ type: SET_DB_CITIES, payload: cities });
const setPointsAction = (points) => ({ type: SET_DB_POINTS, payload: points });
const setCategoryAction = (category) => ({ type: SET_DB_CATEGORY, payload: category });
const setCarsAction = (cars) => ({ type: SET_DB_CARS, payload: cars });
const setRateAction = (rate) => ({ type: SET_DB_RATE, payload: rate });

export const setDbCitiesAction = () => (dispatch) => {
  sendRequest('/db/city', 'GET').then((result) => {
    if (result) dispatch(setCitiesAction(result.data));
  });
};

export const setDbPointsAction = () => (dispatch) => {
  sendRequest('/db/point', 'GET').then((result) => {
    if (result) dispatch(setPointsAction(result.data));
  });
};

export const setDbCategoryAction = () => (dispatch) => {
  sendRequest('/db/category', 'GET').then((result) => {
    if (result) dispatch(setCategoryAction(result.data));
  });
};

export const setDbCarsAction = () => (dispatch) => {
  sendRequest('/db/car', 'GET').then((result) => {
    if (result) dispatch(setCarsAction(result.data));
  });
};

export const setDbRateAction = () => (dispatch) => {
  sendRequest('/db/rate', 'GET').then((result) => {
    if (result) dispatch(setRateAction(result.data));
  });
};
