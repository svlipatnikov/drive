import React from 'react';
import { YANDEX_API_KEY } from 'api/yandex';
import { YMaps, Map } from 'react-yandex-maps';
import styles from './yandexMap.module.scss';
import { useSelector } from 'react-redux';
import { pageSizeSelector } from 'redux/selectors/mainSelectors';

const YandexMap = () => {
  const { mobileCompact, mobile } = useSelector(pageSizeSelector);

  return (
    <div className={styles.wrapper}>
      <YMaps query={{ apikey: YANDEX_API_KEY }}>
        <Map
          state={{ center: [55.75, 37.57], zoom: 9 }}
          width={'99%'}
          height={(mobileCompact && 230) || (mobile && 290) || 352}
        ></Map>
      </YMaps>
    </div>
  );
};

export default YandexMap;
