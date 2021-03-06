import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dbCarsSelector, dbCategorySelector } from 'redux/selectors/dbSelectors';
import { categorySelector, modelSelector } from 'redux/selectors/orderSelectors';
import ButtonRadio from 'components/ButtonRadio';
import styles from './carStep.module.scss';
import CarCard from 'components/CarCard';
import { setCategoryAction } from 'redux/actions/orderActions';
import Loader from 'components/Loader';
import getCategoryAction from 'redux/thunk/getCategoryAction';
import getCarsAction from 'redux/thunk/getCarsAction';

const CarStep = () => {
  const dispatch = useDispatch();
  const dbCategory = useSelector(dbCategorySelector);
  const dbCars = useSelector(dbCarsSelector);
  const curentCategory = useSelector(categorySelector);
  const curentModel = useSelector(modelSelector);

  useEffect(() => {
    dispatch(getCategoryAction());
    dispatch(getCarsAction());
  }, [dispatch]);

  const handleClick = (category) => () => {
    dispatch(setCategoryAction(category));
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.category}>
        {dbCategory.isLoading && <Loader />}
        {dbCategory.isFailed && (
          <div className={styles.errorMessage}>Не удалось загрузить категорий</div>
        )}
        {dbCategory.isOk && (
          <ButtonRadio
            name="Все модели"
            className={styles.categoryItem}
            active={curentCategory === 'Все модели'}
            onClick={handleClick('Все модели')}
          />
        )}
        {dbCategory.data.map((category) => (
          <ButtonRadio
            key={category.id}
            name={category.name}
            className={styles.categoryItem}
            active={category.name === curentCategory}
            onClick={handleClick(category.name)}
          />
        ))}
      </div>

      <div className={styles.container}>
        <div className={styles.models}>
          {dbCars.isLoading && <Loader />}
          {dbCars.isFailed && (
            <div className={styles.errorMessage}>Не удалось загрузить список автомобилей</div>
          )}
          {dbCars.isOk &&
            dbCars.data
              .filter((car) => {
                if (curentCategory === 'Все модели') return true;
                return curentCategory === car.categoryId.name;
              })
              .map((car) => (
                <CarCard
                  key={car.id}
                  carData={car}
                  active={curentModel.id && curentModel.id === car.id}
                />
              ))}
        </div>
      </div>
    </section>
  );
};

export default CarStep;
