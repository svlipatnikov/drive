import { api } from 'api/services';
import { setOrderStepAction } from 'redux/actions/mainActions';
import {
  failedNewOrderAction,
  fetchNewOrderAction,
  successNewOrderAction,
} from 'redux/actions/dbActions';

const postNewOrderAction = (orderData) => async (dispatch) => {
  dispatch(fetchNewOrderAction());
  const order = await api.postNewOrder(orderData);
  if (order) {
    dispatch(successNewOrderAction(order));
    dispatch(setOrderStepAction('Заказ подтвержден'));
  } else {
    dispatch(failedNewOrderAction());
  }
};

export default postNewOrderAction;
