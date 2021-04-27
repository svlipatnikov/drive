import React, { useState } from 'react';
import items from './assets/items';
import { ReactComponent as ArrowLeft } from 'assets/svg/arrowLeft.svg';
import { ReactComponent as ArrowRight } from 'assets/svg/arrowRight.svg';
import './carousel.scss';

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
    <section className="carousel">
      {items.map((item, index) => (
        <img
          key={items[index].src}
          src={items[index].src}
          alt="background"
          className={`carousel__img ${index === current ? 'carousel__img--current' : ''}`}
        />
      ))}

      <button className="carousel__arrow-btn carousel__arrow-btn--left" onClick={handlePrevClick}>
        <ArrowLeft />
      </button>

      <div className="carousel__content">
        <h3 className="carousel__content__header">{items[current].header}</h3>
        <p className="carousel__content__text">{items[current].text}</p>
        <button className="carousel__content__button" style={btnGradient}>
          Подробнее
        </button>
      </div>

      <button className="carousel__arrow-btn carousel__arrow-btn--right" onClick={handleNextClick}>
        <ArrowRight />
      </button>

      <div className="carousel__dots">
        {items.map((item, index) => (
          <button
            className={`carousel__dots__item ${
              index === current ? 'carousel__dots__item--current' : ''
            }`}
            onClick={handleDotClick(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Carousel;
