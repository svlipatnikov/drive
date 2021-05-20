import ButtonAccent from 'components/ButtonAccent';
import ConfirmationModal from 'components/ConfirmationModal';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { clearDbOrderAction } from 'redux/actions/dbActions';
import { setOrderStepAction } from 'redux/actions/mainActions';
import { clearOrderAction } from 'redux/actions/orderActions';
import { orderStepSelector } from 'redux/selectors/mainSelectors';
import {
  additionIsFilledSelector,
  carIsFilledSelector,
  locationIsFilledSelector,
} from 'redux/selectors/orderSelectors';
import styles from './buttonNextStep.module.scss';

const ButtonNextStep = () => {
  const [confirmation, setConfirmation] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const orderStep = useSelector(orderStepSelector);
  const locationIsFilled = useSelector(locationIsFilledSelector);
  const carIsFilled = useSelector(carIsFilledSelector);
  const additionIsFilled = useSelector(additionIsFilledSelector);

  const btnActive =
    (orderStep === 'Местоположение' && locationIsFilled) ||
    (orderStep === 'Модель' && carIsFilled) ||
    (orderStep === 'Дополнительно' && additionIsFilled) ||
    orderStep === 'Итого';

  const handleBtnClick = () => {
    if (orderStep === 'Итого') {
      setConfirmation(true);
    } else {
      dispatch(setOrderStepAction(getNextStep(orderStep)));
      history.push(getNextLink(orderStep));
      if (orderStep === 'Заказ подтвержден') {
        dispatch(clearOrderAction());
        dispatch(clearDbOrderAction());
      }
    }
  };

  return (
    <>
      <ButtonAccent
        text={getBtnText(orderStep)}
        active={btnActive}
        negative={orderStep === 'Заказ подтвержден'}
        onClick={handleBtnClick}
        className={styles.nextStepBtn}
      />
      {confirmation && <ConfirmationModal setOpen={setConfirmation} />}
    </>
  );
};

export default ButtonNextStep;

const getBtnText = (step) => {
  switch (step) {
    case 'Местоположение':
      return 'Выбрать модель';

    case 'Модель':
      return 'Дополнительно';

    case 'Дополнительно':
      return 'Итого';

    case 'Итого':
      return 'Заказать';

    case 'Заказ подтвержден':
      return 'Отменить';

    default:
      return '';
  }
};

const getNextStep = (step) => {
  switch (step) {
    case 'Местоположение':
      return 'Модель';

    case 'Модель':
      return 'Дополнительно';

    case 'Дополнительно':
      return 'Итого';

    case 'Итого':
      return 'Итого';

    case 'Заказ подтвержден':
      return 'Местоположение';

    default:
      return 'Местоположение';
  }
};

const getNextLink = (step) => {
  switch (step) {
    case 'Местоположение':
      return '/order/car';

    case 'Модель':
      return '/order/addition';

    case 'Дополнительно':
      return '/order/confirm';

    case 'Итого':
      return '/order/confirm';

    case 'Заказ подтвержден':
      return '/order/location';

    default:
      return '/order/location';
  }
};
