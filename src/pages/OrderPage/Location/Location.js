import SearchSelect from 'components/SearchSelect';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDbCitiesAction, setDbPointsAction } from 'redux/actions/dbActions';
import { setCityAction, setPointAction } from 'redux/actions/orderActions';
import { citySelector, pointSelector } from 'redux/selectors/orderSelectors';
import styles from './location.module.scss';
import map from './map.jpg';

const OrderPageLocation = () => {
  const city = useSelector(citySelector);
  const point = useSelector(pointSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setDbCitiesAction());
    dispatch(setDbPointsAction());
  }, [dispatch]);

  return (
    <section>
      <div className={styles.container}>
        <SearchSelect label="Город" action={setCityAction} initData={city} />
        <SearchSelect label="Пункт выдачи" action={setPointAction} initData={point} />
      </div>

      <p className={styles.mapText}>Выбрать на карте:</p>

      <img src={map} alt="map" className={styles.map} />
    </section>
  );
};

export default OrderPageLocation;
