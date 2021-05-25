import React, { useEffect, useState } from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import { useDispatch, useSelector } from 'react-redux';
import { pageSizeSelector } from 'redux/selectors/mainSelectors';
import { INIT_ZOOM, CITY_ZOOM, POINT_ZOOM, YANDEX_API_KEY } from 'api/const';
import { citySelector, pointSelector } from 'redux/selectors/orderSelectors';
import { dbCitiesSelector, dbPointsSelector } from 'redux/selectors/dbSelectors';
import styles from './yandexMap.module.scss';
import { setCityAction, setPointAction } from 'redux/actions/orderActions';

const mapInit = {
  zoom: INIT_ZOOM,
  center: [54.5, 50.0],
};

const YandexMap = () => {
  const dispatch = useDispatch();
  const [ymaps, setYmaps] = useState(null);
  const [mapState, setMapState] = useState(mapInit);
  const [points, setPoints] = useState([]);

  const { mobileCompact, mobile } = useSelector(pageSizeSelector);
  const curentCity = useSelector(citySelector);
  const curentPoint = useSelector(pointSelector);
  const dbPoints = useSelector(dbPointsSelector);
  const dbCities = useSelector(dbCitiesSelector);

  useEffect(() => {
    if (ymaps && curentCity) {
      ymaps.geocode(curentCity.name).then((response) => {
        setMapState({
          zoom: CITY_ZOOM,
          center: response.geoObjects.get(0).geometry.getCoordinates(),
        });
      });
    } else {
      setMapState(mapInit);
    }
  }, [curentCity, ymaps]);

  useEffect(() => {
    if (ymaps) {
      if (curentPoint) {
        ymaps
          .geocode(
            `${curentPoint.cityId ? curentPoint.cityId.name + ',' : ''}${curentPoint.address}`
          )
          .then((response) => {
            setMapState({
              zoom: POINT_ZOOM,
              center: response.geoObjects.get(0).geometry.getCoordinates(),
            });
          });
      } else if (curentCity) {
        ymaps.geocode(curentCity.name).then((response) => {
          setMapState({
            zoom: CITY_ZOOM,
            center: response.geoObjects.get(0).geometry.getCoordinates(),
          });
        });
      }
    }
  }, [curentCity, curentPoint, ymaps]);

  useEffect(() => {
    if (ymaps && dbPoints.data) {
      Promise.all(
        dbPoints.data.map((point) => ymaps.geocode(`${point.cityId.name},${point.address}`))
      )
        .then((responses) =>
          responses.map((response) => response.geoObjects.get(0).geometry.getCoordinates())
        )
        .then((coordinates) => {
          setPoints(coordinates);
        });
    }
  }, [dbPoints, ymaps]);

  const handleClick = (index) => () => {
    dispatch(
      setCityAction(dbCities.data.find((city) => city.id === dbPoints.data[index].cityId.id))
    );
    dispatch(setPointAction(dbPoints.data[index]));
  };

  return (
    <div className={styles.wrapper}>
      <YMaps query={{ apikey: YANDEX_API_KEY }}>
        <Map
          onLoad={setYmaps}
          modules={['geocode']}
          state={mapState}
          width={'99%'}
          height={(mobileCompact && 230) || (mobile && 290) || 352}
        >
          {points.map((coordinates, index) => (
            <Placemark
              key={coordinates + index}
              geometry={points[index]}
              onClick={handleClick(index)}
              options={{
                preset: 'islands#circleIcon',
                iconColor: '#0ec261',
              }}
            />
          ))}
        </Map>
      </YMaps>
    </div>
  );
};

export default React.memo(YandexMap);
