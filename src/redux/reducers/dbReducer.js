import { SET_DB_CARS, SET_DB_CITIES, SET_DB_POINTS } from 'redux/types';

const dbReducerInit = {
  cities: [],
  points: [],
  cars: [],
};

const dbReducer = (state = dbReducerInit, action) => {
  switch (action.type) {
    case SET_DB_CITIES:
      return { ...state, cities: action.payload };

    case SET_DB_POINTS:
      return { ...state, points: action.payload };

    case SET_DB_CARS:
      return { ...state, cars: action.payload };

    default:
      return state;
  }
};

export default dbReducer;