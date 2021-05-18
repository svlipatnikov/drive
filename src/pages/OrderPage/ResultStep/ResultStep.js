import { format } from 'date-fns';
import getImageSrc from 'helpers/getImageSrc';
import React from 'react';
import { useSelector } from 'react-redux';
import { dateFromSelector, modelSelector, optionsSelector } from 'redux/selectors/orderSelectors';
import styles from './resultStep.module.scss';

const ResultStep = () => {
  const model = useSelector(modelSelector);
  const dateFrom = useSelector(dateFromSelector);
  const { fullTank } = useSelector(optionsSelector);

  return (
    <div className={styles.wrapper}>
      <div className={styles.infoBlock}>
        <div className={styles.name}>{model.name}</div>

        <div className={styles.licensePlate}>{model.number}</div>

        <p className={styles.paramItem}>
          <span className={styles.paramTitle}>{'Топливо '}</span>
          {fullTank.checked ? '100' : model.tank || '0'}
          {'%'}
        </p>

        <p className={styles.paramItem}>
          <span className={styles.paramTitle}>{'Доступна с '}</span>
          {format(dateFrom, 'dd.MM.yyyy HH:mm')}
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

export default ResultStep;
