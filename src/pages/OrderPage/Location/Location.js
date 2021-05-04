import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchSelectCity from 'components/SearchSelect/SearchSelectCity';
import SearchSelectPoint from 'components/SearchSelect/SearchSelectPoint';
import { setDbCitiesAction, setDbPointsAction } from 'redux/actions/dbActions';
import { dbCitiesSelector, dbPointsSelector } from 'redux/selectors/dbSelectors';
import styles from './location.module.scss';
import map from './map.jpg';

const OrderPageLocation = () => {
  const dbCities = useSelector(dbCitiesSelector);
  const dbPoints = useSelector(dbPointsSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!dbCities.length) dispatch(setDbCitiesAction());
    if (!dbPoints.length) dispatch(setDbPointsAction());
  }, [dbCities.length, dbPoints.length, dispatch]);

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

export default OrderPageLocation;
