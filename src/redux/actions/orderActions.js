import {
  SET_CAR_CATEGORY,
  SET_CAR_MODEL,
  SET_CITY,
  SET_POINT,
  SET_COLOR,
  SET_RATE,
  SET_OPTIONS,
  SET_DATE_TO,
  SET_DATE_FROM,
  SET_FINAL_PRICE,
} from 'redux/types';

// location
export const setCityAction = (city) => ({ type: SET_CITY, payload: city });
export const setPointAction = (point) => ({ type: SET_POINT, payload: point });

// car
export const setCategoryAction = (category) => ({ type: SET_CAR_CATEGORY, payload: category });
export const setModelAction = (model) => ({ type: SET_CAR_MODEL, payload: model });

// addition
export const setColorAction = (color) => ({ type: SET_COLOR, payload: color });
export const setRateAction = (rate) => ({ type: SET_RATE, payload: rate });
export const setOptionsAction = (option) => ({ type: SET_OPTIONS, payload: option });
export const setDateToAction = (date) => ({ type: SET_DATE_TO, payload: date });
export const setDateFromAction = (date) => ({ type: SET_DATE_FROM, payload: date });

// final price
export const setFinalPriceAction = (date) => ({ type: SET_FINAL_PRICE, payload: date });
