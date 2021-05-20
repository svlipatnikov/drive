import React, { useEffect } from 'react';
import { format } from 'date-fns';
import { useDispatch, useSelector } from 'react-redux';
import { dbOrderSelector } from 'redux/selectors/dbSelectors';
import getImageSrc from 'helpers/getImageSrc';
import styles from './resultStep.module.scss';
import { useParams } from 'react-router';
import getOrderByIdAction from 'redux/thunk/getOrderByIdAction';

const ResultStep = () => {
  const dispatch = useDispatch();
  const { isOk, isFailed, data } = useSelector(dbOrderSelector);
  const { orderId } = useParams();

  useEffect(() => {
    console.log('orderId', orderId);
    if (!data) dispatch(getOrderByIdAction(orderId));
  }, [data, dispatch, orderId]);

  if (!isOk || isFailed) return null;

  return (
    <div className={styles.wrapper}>
      <div className={styles.infoBlock}>
        <h2 className={styles.header}>Ваш заказ подтвержден</h2>

        <div className={styles.name}>{data.carId.name}</div>

        <div className={styles.licensePlate}>{data.carId.number}</div>

        <p className={styles.paramItem}>
          <span className={styles.paramTitle}>{'Топливо '}</span>
          {data.isFullTank ? '100' : data.carId.tank || '0'}
          {'%'}
        </p>

        <p className={styles.paramItem}>
          <span className={styles.paramTitle}>{'Доступна с '}</span>
          {format(data.dateFrom, 'dd.MM.yyyy HH:mm')}
        </p>
      </div>

      <div className={styles.imgBlock}>
        {data && data.carId.thumbnail && (
          <img className={styles.img} src={getImageSrc(data.carId.thumbnail.path)} alt="carimg" />
        )}
      </div>
    </div>
  );
};

export default ResultStep;
