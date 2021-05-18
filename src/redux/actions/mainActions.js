import { SET_LANGUAGE, SET_ORDER_STEP, SET_PAGE_SIZE } from 'redux/types';

export const setLanguageAction = (language) => ({ type: SET_LANGUAGE, payload: language });
export const setOrderStepAction = (step) => ({ type: SET_ORDER_STEP, payload: step });
export const setPageSizeAction = (pageSize) => ({ type: SET_PAGE_SIZE, payload: pageSize });
