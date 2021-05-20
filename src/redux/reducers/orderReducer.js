import {
  CLEAR_ORDER,
  SET_CITY,
  SET_POINT,
  SET_CAR_CATEGORY,
  SET_CAR_MODEL,
  SET_COLOR,
  SET_RATE,
  SET_OPTIONS,
  SET_DATE_FROM,
  SET_DATE_TO,
  SET_FINAL_PRICE,
} from 'redux/types';

const orderReducerInit = {
  location: {
    city: '',
    point: '',
  },
  car: {
    category: 'Все модели',
    model: {},
  },
  addition: {
    color: 'Любой',
    dateFrom: null,
    dateTo: null,
    rate: null,
    options: {
      fullTank: { name: 'Полный бак, 500р', checked: false },
      babyChair: { name: 'Детское кресло, 200р', checked: false },
      rightSteering: { name: 'Правый руль, 1600р', checked: false },
    },
  },
  finalPrice: null,
};

const orderReducer = (state = orderReducerInit, action) => {
  switch (action.type) {
    case CLEAR_ORDER:
      return { ...orderReducerInit };

    case SET_CITY:
      return { ...orderReducerInit, location: { city: action.payload, point: '' } };

    case SET_POINT:
      return { ...orderReducerInit, location: { ...state.location, point: action.payload } };

    case SET_CAR_CATEGORY:
      return { ...state, car: { ...state.car, category: action.payload } };

    case SET_CAR_MODEL:
      return {
        ...state,
        addition: orderReducerInit.addition,
        car: { ...state.car, model: action.payload },
      };

    case SET_COLOR:
      return { ...state, addition: { ...state.addition, color: action.payload } };

    case SET_RATE:
      return { ...state, addition: { ...state.addition, rate: action.payload } };

    case SET_OPTIONS:
      return {
        ...state,
        addition: { ...state.addition, options: { ...state.addition.options, ...action.payload } },
      };

    case SET_DATE_FROM:
      return { ...state, addition: { ...state.addition, dateFrom: action.payload } };

    case SET_DATE_TO:
      return { ...state, addition: { ...state.addition, dateTo: action.payload } };

    case SET_FINAL_PRICE:
      return { ...state, finalPrice: action.payload };

    default:
      return state;
  }
};

export default orderReducer;
