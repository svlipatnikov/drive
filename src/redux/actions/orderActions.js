import { SET_ACTIVE, SET_CITY, SET_POINT } from 'redux/types';

export const setActiveAction = (active) => ({ type: SET_ACTIVE, payload: active });
export const setCityAction = (city) => ({ type: SET_CITY, payload: city });
export const setPointAction = (point) => ({ type: SET_POINT, payload: point });
