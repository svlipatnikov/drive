import { api } from 'api/services';
import { failedPoints, fetchPoints, successPoints } from 'redux/actions/dbActions';

const getPointsAction = () => async (dispatch) => {
  dispatch(fetchPoints());
  const points = await api.getPoints();
  if (points && points.length) {
    dispatch(successPoints(points));
  } else {
    dispatch(failedPoints());
  }
};

export default getPointsAction;
