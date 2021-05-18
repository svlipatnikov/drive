import ButtonAccent from 'components/ButtonAccent';
import React from 'react';
import { useHistory } from 'react-router';
import styles from './confirmationModal.module.scss';

const ConfirmationModal = ({ setOpen }) => {
  const history = useHistory();

  const handleAccept = () => {
    setOpen(false);
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
