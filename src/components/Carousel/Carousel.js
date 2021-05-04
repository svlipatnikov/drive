import React, { useState } from 'react';
import items from './items';
import { ReactComponent as ArrowLeft } from 'assets/svg/arrowLeft.svg';
import { ReactComponent as ArrowRight } from 'assets/svg/arrowRight.svg';
import styles from './carousel.module.scss';
import cn from 'classnames';

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  const btnGradient = {
    background: `linear-gradient(90deg, ${items[current].btnColors[0]} 0%, ${items[current].btnColors[1]} 100%)`,
  };

  const handleNextClick = () => {
    current < items.length - 1 ? setCurrent((current) => ++current) : setCurrent(0);
  };

  const handlePrevClick = () => {
    current !== 0 ? setCurrent((current) => --current) : setCurrent(items.length - 1);
  };

  const handleDotClick = (index) => () => {
    setCurrent(index);
  };

  return (
    <div className={styles.carousel}>
      {items.map((item, index) => (
        <img
          key={items[index].src}
          src={items[index].src}
          alt="background"
          className={cn(styles.img, { [styles.imgCurrent]: index === current })}
        />
      ))}

      <button className={styles.arrowBtnLeft} onClick={handlePrevClick}>
        <ArrowLeft />
      </button>

      <div className={styles.content}>
        <h3 className={styles.header}>{items[current].header}</h3>
        <p className={styles.text}>{items[current].text}</p>
        <button className={styles.button} style={btnGradient}>
          Подробнее
        </button>
      </div>

      <button className={styles.arrowBtnRight} onClick={handleNextClick}>
        <ArrowRight />
      </button>

      <div className={styles.dots}>
        {items.map((item, index) => (
          <button
            key={index}
            className={cn(styles.dotsItem, { [styles.dotsItemCurrent]: index === current })}
            onClick={handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
