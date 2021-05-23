import { api } from 'api/dbServices';
import { setOrderStepAction } from 'redux/actions/mainActions';
import {
  failedNewOrderAction,
  fetchNewOrderAction,
  successNewOrderAction,
} from 'redux/actions/dbActions';

const getOrderByIdAction = (id) => async (dispatch) => {
  dispatch(fetchNewOrderAction());
  const order = await api.getOrder(id);
  if (order) {
    dispatch(successNewOrderAction(order));
    dispatch(setOrderStepAction('Заказ подтвержден'));
  } else {
    dispatch(failedNewOrderAction());
  }
};

export default getOrderByIdAction;
