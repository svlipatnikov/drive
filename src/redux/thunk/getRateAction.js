import { api } from 'api/dbServices';
import { fetchRate, successRate, failedRate } from 'redux/actions/dbActions';

const getRateAction = () => async (dispatch) => {
  dispatch(fetchRate());
  const rate = await api.getRate();
  if (rate && rate.length) {
    dispatch(successRate(rate));
  } else {
    dispatch(failedRate());
  }
};

export default getRateAction;
