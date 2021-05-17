import {
  FETCH_CITIES,
  FETCH_POINTS,
  FETCH_CATEGORY,
  FETCH_CARS,
  FETCH_RATE,
  SUCCESS_CITIES,
  SUCCESS_POINTS,
  SUCCESS_CATEGORY,
  SUCCESS_CARS,
  SUCCESS_RATE,
  FAILED_CITIES,
  FAILED_POINTS,
  FAILED_CATEGORY,
  FAILED_CARS,
  FAILED_RATE,
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
