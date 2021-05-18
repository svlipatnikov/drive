import {
  FETCH_CITIES,
  FETCH_POINTS,
  FETCH_CATEGORY,
  FETCH_CARS,
  FETCH_RATE,
  SUCCESS_CITIES,
  SUCCESS_POINTS,
  SUCCESS_CATEGORY,
  SUCCESS_CARS,
  SUCCESS_RATE,
  FAILED_CITIES,
  FAILED_POINTS,
  FAILED_CATEGORY,
  FAILED_CARS,
  FAILED_RATE,
} from 'redux/types';

const dbReducerInit = {
  cities: { isLoading: false, isOk: false, isFailed: false, data: [] },
  points: { isLoading: false, isOk: false, isFailed: false, data: [] },
  category: { isLoading: false, isOk: false, isFailed: false, data: [] },
  cars: { isLoading: false, isOk: false, isFailed: false, data: [] },
  rate: [],
};

const dbReducer = (state = dbReducerInit, action) => {
  switch (action.type) {
    case FETCH_CITIES:
      return { ...state, cities: { ...dbReducerInit.cities, isLoading: true } };

    case SUCCESS_CITIES:
      return {
        ...state,
        cities: { isLoading: false, isOk: true, isFailed: false, data: action.payload },
      };

    case FAILED_CITIES:
      return {
        ...state,
        cities: { isLoading: false, isOk: false, isFailed: true, data: [] },
      };

    case FETCH_POINTS:
      return { ...state, points: { ...dbReducerInit.points, isLoading: true } };

    case SUCCESS_POINTS:
      return {
        ...state,
        points: { isLoading: false, isOk: true, isFailed: false, data: action.payload },
      };

    case FAILED_POINTS:
      return {
        ...state,
        points: { isLoading: false, isOk: false, isFailed: true, data: [] },
      };

    case FETCH_CATEGORY:
      return { ...state, category: { ...dbReducerInit.category, isLoading: true } };

    case SUCCESS_CATEGORY:
      return {
        ...state,
        category: { isLoading: false, isOk: true, isFailed: false, data: action.payload },
      };

    case FAILED_CATEGORY:
      return {
        ...state,
        category: { isLoading: false, isOk: false, isFailed: true, data: [] },
      };

    case FETCH_CARS:
      return { ...state, cars: { ...dbReducerInit.cars, isLoading: true } };

    case SUCCESS_CARS:
      return {
        ...state,
        cars: { isLoading: false, isOk: true, isFailed: false, data: action.payload },
      };

    case FAILED_CARS:
      return {
        ...state,
        cars: { isLoading: false, isOk: false, isFailed: true, data: [] },
      };

    case FETCH_RATE:
      return { ...state, rate: { ...dbReducerInit.rate, isLoading: true } };

    case SUCCESS_RATE:
      return {
        ...state,
        rate: { isLoading: false, isOk: true, isFailed: false, data: action.payload },
      };

    case FAILED_RATE:
      return {
        ...state,
        rate: { isLoading: false, isOk: false, isFailed: true, data: [] },
      };

    default:
      return state;
  }
};

export default dbReducer;
