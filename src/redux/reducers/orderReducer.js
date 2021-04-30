import { ADD_LOCATION_DATA, ADD_CAR_DATA } from 'redux/types';

const orderReducerInit = {
  location: {
    city: null,
    point: null,
  },
  car: {
    model: null,
  },
};

const orderReducer = (state = orderReducerInit, action) => {
  switch (action.type) {
    case ADD_LOCATION_DATA:
      return { ...state, location: { ...state.location, ...action.payload } };

    case ADD_CAR_DATA:
      return { ...state, car: { ...state.car, ...action.payload } };

    default:
      return state;
  }
};

export default orderReducer;
