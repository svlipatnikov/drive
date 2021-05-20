import { api } from 'api/services';
import { failedCities, fetchCities, successCities } from 'redux/actions/dbActions';

const getCitiesAction = () => async (dispatch) => {
  dispatch(fetchCities());
  const cities = await api.getCities();
  if (cities && cities.length) {
    dispatch(successCities(cities));
  } else {
    dispatch(failedCities());
  }
};

export default getCitiesAction;
