import {
  FETCH_CITIES,
  FETCH_POINTS,
  FETCH_CATEGORY,
  FETCH_CARS,
  FETCH_RATE,
  FETCH_STATUS,
  FETCH_NEW_ORDER,
  SUCCESS_CITIES,
  SUCCESS_POINTS,
  SUCCESS_CATEGORY,
  SUCCESS_CARS,
  SUCCESS_RATE,
  SUCCESS_STATUS,
  SUCCESS_NEW_ORDER,
  FAILED_CITIES,
  FAILED_POINTS,
  FAILED_CATEGORY,
  FAILED_CARS,
  FAILED_RATE,
  FAILED_STATUS,
  FAILED_NEW_ORDER,
  CLEAR_DB_ORDER,
} from 'redux/types';

export const fetchCities = () => ({ type: FETCH_CITIES });
export const successCities = (cities) => ({ type: SUCCESS_CITIES, payload: cities });
export const failedCities = () => ({ type: FAILED_CITIES });

export const fetchPoints = () => ({ type: FETCH_POINTS });
export const successPoints = (points) => ({ type: SUCCESS_POINTS, payload: points });
export const failedPoints = () => ({ type: FAILED_POINTS });

export const fetchCategory = () => ({ type: FETCH_CATEGORY });
export const successCategory = (category) => ({ type: SUCCESS_CATEGORY, payload: category });
export const failedCategory = () => ({ type: FAILED_CATEGORY });

export const fetchCars = () => ({ type: FETCH_CARS });
export const successCars = (cars) => ({ type: SUCCESS_CARS, payload: cars });
export const failedCars = () => ({ type: FAILED_CARS });

export const fetchRate = () => ({ type: FETCH_RATE });
export const successRate = (rate) => ({ type: SUCCESS_RATE, payload: rate });
export const failedRate = () => ({ type: FAILED_RATE });

export const fetchStatus = () => ({ type: FETCH_STATUS });
export const successStatus = (status) => ({ type: SUCCESS_STATUS, payload: status });
export const failedStatus = () => ({ type: FAILED_STATUS });

export const fetchNewOrderAction = () => ({ type: FETCH_NEW_ORDER });
export const successNewOrderAction = (order) => ({ type: SUCCESS_NEW_ORDER, payload: order });
export const failedNewOrderAction = () => ({ type: FAILED_NEW_ORDER });

export const clearDbOrderAction = () => ({ type: CLEAR_DB_ORDER });
