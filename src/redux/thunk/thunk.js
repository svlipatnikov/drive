import { getCars, getCategory, getCities, getPoints, getRate } from 'api/services';
import {
  fetchCities,
  fetchPoints,
  fetchCategory,
  fetchCars,
  fetchRate,
  successCities,
  successPoints,
  successCategory,
  successCars,
  successRate,
  failedCities,
  failedPoints,
  failedCategory,
  failedCars,
  failedRate,
} from 'redux/actions/dbActions';

export const setDbCitiesAction = () => async (dispatch) => {
  dispatch(fetchCities());
  const cities = await getCities();
  if (cities && cities.length) {
    dispatch(successCities(cities));
  } else {
    dispatch(failedCities());
  }
};

export const setDbPointsAction = () => async (dispatch) => {
  dispatch(fetchPoints());
  const points = await getPoints();
  if (points && points.length) {
    dispatch(successPoints(points));
  } else {
    dispatch(failedPoints());
  }
};

export const setDbCategoryAction = () => async (dispatch) => {
  dispatch(fetchCategory());
  const category = await getCategory();
  if (category && category.length) {
    dispatch(successCategory(category));
  } else {
    dispatch(failedCategory());
  }
};

export const setDbCarsAction = () => async (dispatch) => {
  dispatch(fetchCars());
  const cars = await getCars();
  if (cars && cars.length) {
    dispatch(successCars(cars));
  } else {
    dispatch(failedCars());
  }
};

export const setDbRateAction = () => async (dispatch) => {
  dispatch(fetchRate());
  const rate = await getRate();
  if (rate && rate.length) {
    dispatch(successRate(rate));
  } else {
    dispatch(failedRate());
  }
};
