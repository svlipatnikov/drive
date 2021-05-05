import {
  SET_ACTIVE,
  SET_CAR_CATEGORY,
  SET_CAR_MODEL,
  SET_CITY,
  SET_POINT,
  SET_COLOR,
} from 'redux/types';

export const setActiveAction = (active) => ({ type: SET_ACTIVE, payload: active });

export const setCityAction = (city) => ({ type: SET_CITY, payload: city });
export const setPointAction = (point) => ({ type: SET_POINT, payload: point });

export const setCategoryAction = (category) => ({ type: SET_CAR_CATEGORY, payload: category });
export const setModelAction = (model) => ({ type: SET_CAR_MODEL, payload: model });

export const setColorAction = (color) => ({ type: SET_COLOR, payload: color });
