import { api } from 'api/services';
import { fetchCars, successCars, failedCars } from 'redux/actions/dbActions';

const getCarsAction = () => async (dispatch) => {
  dispatch(fetchCars());
  const cars = await api.getCars();
  if (cars && cars.length) {
    dispatch(successCars(cars));
  } else {
    dispatch(failedCars());
  }
};

export default getCarsAction;
