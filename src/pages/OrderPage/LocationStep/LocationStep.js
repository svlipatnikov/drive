import React from 'react';
import SearchSelectCity from 'components/SearchSelect/SearchSelectCity';
import SearchSelectPoint from 'components/SearchSelect/SearchSelectPoint';
import styles from './locationStep.module.scss';
import map from './map.jpg';

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
          <img src={map} alt="map" className={styles.mapImg} />
        </div>
      </div>
    </section>
  );
};

export default LocationStep;
