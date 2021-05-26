import React from 'react';
import styles from './carCard.module.scss';
import cn from 'classnames';
import { useDispatch } from 'react-redux';
import { setModelAction } from 'redux/actions/orderActions';
import getImageSrc from 'helpers/getImageSrc';
import defaultCarImg from 'assets/images/defaultCar.png';

const CarCard = ({ carData, active }) => {
  const dispatch = useDispatch();

  const cardStyle = cn({
    [styles.card]: true,
    [styles.cardActive]: active,
  });

  const handleClick = () => {
    dispatch(setModelAction(carData));
  };

  const imageError = (event) => {
    console.log('Error => ', event.target.src);
    event.target.src = defaultCarImg;
  };

  return (
    <div className={cardStyle} onClick={handleClick}>
      <div>
        <div className={styles.model}>{carData.name}</div>
        <div className={styles.price}>{`${carData.priceMin} - ${carData.priceMax} \u20bd`}</div>
      </div>
      <img
        className={styles.img}
        src={getImageSrc(carData.thumbnail.path)}
        alt="thumbnail"
        onError={imageError}
      />
    </div>
  );
};

export default CarCard;
