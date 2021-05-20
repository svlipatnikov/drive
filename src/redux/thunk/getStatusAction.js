import { api } from 'api/services';
import { fetchStatus, successStatus, failedStatus } from 'redux/actions/dbActions';

const getStatusAction = () => async (dispatch) => {
  dispatch(fetchStatus());
  const status = await api.getStatus();
  if (status) {
    dispatch(successStatus(status));
  } else {
    dispatch(failedStatus());
  }
};

export default getStatusAction;
