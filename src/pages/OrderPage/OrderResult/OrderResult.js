import React from 'react';
import { format } from 'date-fns';
import getImageSrc from 'helpers/getImageSrc';
import { useSelector } from 'react-redux';
import { dateFromSelector, modelSelector, optionsSelector } from 'redux/selectors/orderSelectors';
import styles from './orderResult.module.scss';

const OrderResult = ({ acceptConfirmation }) => {
  const model = useSelector(modelSelector);
  const dateFrom = useSelector(dateFromSelector);
  const { fullTank } = useSelector(optionsSelector);

  return (
    <div className={styles.wrapper}>
      <div className={styles.infoBlock}>
        {acceptConfirmation && <h2 className={styles.header}>Ваш заказ подтвержден</h2>}

        <div className={styles.name}>{model.name}</div>

        <div className={styles.licensePlate}>{model.number}</div>

        <p className={styles.paramItem}>
          <span className={styles.paramTitle}>{'Топливо '}</span>
          {fullTank.checked ? '100' : model.tank || '0'}
          {'%'}
        </p>

        <p className={styles.paramItem}>
          <span className={styles.paramTitle}>{'Доступна с '}</span>
          {dateFrom && format(dateFrom, 'dd.MM.yyyy HH:mm')}
        </p>
      </div>

      <div className={styles.imgBlock}>
        {model && model.thumbnail && (
          <img className={styles.img} src={getImageSrc(model.thumbnail.path)} alt="model-img" />
        )}
      </div>
    </div>
  );
};

export default OrderResult;
