import { getDbCars, getDbCategory, getDbCities, getDbPoints, getDbRate } from 'api/services';
import {
  setCitiesAction,
  setPointsAction,
  setCategoryAction,
  setCarsAction,
  setRateAction,
} from 'redux/actions/dbActions';

export const setDbCitiesAction = () => async (dispatch) => {
  const cities = await getDbCities();
  dispatch(setCitiesAction(cities));
};

export const setDbPointsAction = () => async (dispatch) => {
  const points = await getDbPoints();
  dispatch(setPointsAction(points));
};

export const setDbCategoryAction = () => async (dispatch) => {
  const category = await getDbCategory();
  dispatch(setCategoryAction(category));
};

export const setDbCarsAction = () => async (dispatch) => {
  const cars = await getDbCars();
  dispatch(setCarsAction(cars));
};

export const setDbRateAction = () => async (dispatch) => {
  const rate = await getDbRate();
  dispatch(setRateAction(rate));
};
