import { SET_ACTIVE, SET_CITY, SET_POINT, SET_CAR_MODEL } from 'redux/types';

const orderReducerInit = {
  active: 'Местоположение',
  location: {
    city: '',
    point: '',
  },
  car: {
    filter: 'Все модели',
    model: null,
  },
  addition: {
    color: 'any',
    dateFrom: null,
    dateTo: null,
    tariff: 'perDay',
    services: {
      fullTank: false,
      babyChair: false,
      rightSteering: false,
    },
  },
};

const orderReducer = (state = orderReducerInit, action) => {
  switch (action.type) {
    case SET_ACTIVE:
      return { ...state, active: action.payload };

    case SET_CITY:
      return { ...state, location: { ...state.location, city: action.payload, point: '' } };

    case SET_POINT:
      return { ...state, location: { ...state.location, point: action.payload } };

    case SET_CAR_MODEL:
      return { ...state, car: { ...state.car, ...action.payload } };

    default:
      return state;
  }
};

export default orderReducer;
