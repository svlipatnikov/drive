import React from 'react';
import SearchSelectCity from 'components/SearchSelect/SearchSelectCity';
import SearchSelectPoint from 'components/SearchSelect/SearchSelectPoint';
import styles from './locationStep.module.scss';
import map from './map.jpg';

const LocationStep = () => {
  return (
    <section>
      <div className={styles.container}>
        <SearchSelectCity />
        <SearchSelectPoint />
      </div>

      <p className={styles.mapText}>Выбрать на карте:</p>
      <img src={map} alt="map" className={styles.map} />
    </section>
  );
};

export default LocationStep;
