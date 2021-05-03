import React from 'react';
import styles from './car.module.scss';
import cn from 'classnames';

const Car = () => {
  return (
    <section>
      <div className={styles.filter}>
        <button className={styles.filterItem}>
          <div className={cn(styles.checkBox, styles.checkBoxActive)} />
          <div className={cn(styles.itemText, styles.itemTextActive)}>Все модели</div>
        </button>

        <button className={styles.filterItem}>
          <div className={styles.checkBox} />
          <div className={styles.itemText}>Эконом</div>
        </button>

        <button className={styles.filterItem}>
          <div className={styles.checkBox} />
          <div className={styles.itemText}>Премиум</div>
        </button>
      </div>

      <div className={styles.models}></div>
    </section>
  );
};

export default Car;
