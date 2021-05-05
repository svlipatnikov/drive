import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDbCarsAction, setDbCategoryAction } from 'redux/actions/dbActions';
import { dbCarsSelector, dbCategorySelector } from 'redux/selectors/dbSelectors';
import { categorySelector, modelSelector } from 'redux/selectors/orderSelectors';
import ButtonRadio from 'components/ButtonRadio';
import styles from './car.module.scss';
import CarCard from 'components/CarCard';
import { setCategoryAction } from 'redux/actions/orderActions';

const Car = () => {
  const dispatch = useDispatch();
  const dbCategory = useSelector(dbCategorySelector);
  const dbCars = useSelector(dbCarsSelector);
  const curentCategory = useSelector(categorySelector);
  const curentModel = useSelector(modelSelector);

  useEffect(() => {
    if (!dbCategory.length) dispatch(setDbCategoryAction());
    if (!dbCars.length) dispatch(setDbCarsAction());
  }, [dbCars.length, dbCategory.length, dispatch]);

  const handleClick = (category) => () => {
    dispatch(setCategoryAction(category));
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.category}>
        <ButtonRadio
          name="Все модели"
          active={curentCategory === 'Все модели'}
          onClick={handleClick('Все модели')}
        />
        {dbCategory.map((category) => (
          <ButtonRadio
            key={category.id}
            name={category.name}
            active={category.name === curentCategory}
            onClick={handleClick(category.name)}
          />
        ))}
      </div>

      <div className={styles.container}>
        <div className={styles.models}>
          {dbCars
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

export default Car;
