import {
  SET_DB_CARS,
  SET_DB_CITIES,
  SET_DB_POINTS,
  SET_DB_CATEGORY,
  SET_DB_RATE,
} from 'redux/types';

export const setCitiesAction = (cities) => ({ type: SET_DB_CITIES, payload: cities });
export const setPointsAction = (points) => ({ type: SET_DB_POINTS, payload: points });
export const setCategoryAction = (category) => ({ type: SET_DB_CATEGORY, payload: category });
export const setCarsAction = (cars) => ({ type: SET_DB_CARS, payload: cars });
export const setRateAction = (rate) => ({ type: SET_DB_RATE, payload: rate });
