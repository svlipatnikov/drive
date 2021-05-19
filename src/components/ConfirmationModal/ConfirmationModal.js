import ButtonAccent from 'components/ButtonAccent';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { setOrderStepAction } from 'redux/actions/mainActions';
import styles from './confirmationModal.module.scss';

const ConfirmationModal = ({ setOpen }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleAccept = () => {
    setOpen(false);
    dispatch(setOrderStepAction('Заказ подтвержден'));
    history.push('/order/result');
    //TODO send order
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>Подтвердить заказ</p>
      <div>
        <ButtonAccent
          className={styles.button}
          text={'Подтвердить'}
          active
          onClick={handleAccept}
        />
        <ButtonAccent
          className={styles.button}
          text={'Вернуться'}
          negative
          onClick={handleCancel}
        />
      </div>
    </div>
  );
};

export default ConfirmationModal;
