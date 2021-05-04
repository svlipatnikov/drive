import React from 'react';
import styles from './carCard.module.scss';
import cn from 'classnames';
import { useDispatch } from 'react-redux';
import { setModelAction } from 'redux/actions/orderActions';
import { imagesUrl } from 'api';

const CarCard = ({ carData, active }) => {
  const dispatch = useDispatch();

  const cardStyle = cn({
    [styles.card]: true,
    [styles.cardActive]: active,
  });

  const handleClick = () => {
    dispatch(setModelAction(carData));
  };

  return (
    <div className={cardStyle} onClick={handleClick}>
      <div>
        <div className={styles.model}>{carData.name}</div>
        <div className={styles.price}>{`${carData.priceMin} - ${carData.priceMax} `}&#x20bd;</div>
      </div>
      <img className={styles.img} src={imagesUrl + carData.thumbnail.path} alt="thumbnail" />
    </div>
  );
};

export default CarCard;
