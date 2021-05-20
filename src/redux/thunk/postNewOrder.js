import { postNewOrder } from 'api/services';
import { setOrderStepAction } from 'redux/actions/mainActions';
import {
  failedNewOrderAction,
  fetchNewOrderAction,
  successNewOrderAction,
} from 'redux/actions/orderActions';

const postNewOrderAction = (orderData) => async (dispatch) => {
  dispatch(fetchNewOrderAction(orderData));
  const order = await postNewOrder();
  if (order) {
    dispatch(successNewOrderAction(order));
    dispatch(setOrderStepAction('Заказ подтвержден'));
    window.history.pushState('/order/result');
  } else {
    dispatch(failedNewOrderAction());
  }
};

export default postNewOrderAction;
