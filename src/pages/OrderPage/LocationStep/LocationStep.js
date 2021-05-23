import React from 'react';
import SearchSelectCity from 'components/SearchSelect/SearchSelectCity';
import SearchSelectPoint from 'components/SearchSelect/SearchSelectPoint';
import YandexMap from 'components/YandexMap';
import styles from './locationStep.module.scss';

const LocationStep = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.scrollContainer}>
        <div className={styles.location}>
          <SearchSelectCity />
          <SearchSelectPoint />
        </div>

        <div className={styles.map}>
          <p className={styles.mapText}>Выбрать на карте:</p>
          <YandexMap />
        </div>
      </div>
    </section>
  );
};

export default LocationStep;
