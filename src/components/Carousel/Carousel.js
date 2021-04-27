import React from 'react';
import carouselItems from './carouselItems';
import { ReactComponent as ArrowLeft } from 'assets/svg/arrowLeft.svg';
import { ReactComponent as ArrowRight } from 'assets/svg/arrowRight.svg';
import './carousel.scss';

const Carousel = () => {
  console.log(carouselItems);

  return (
    <section className="carousel">
      <div>
        <img src={carouselItems[0].src} alt="bacground" className="carousel__background-img" />
      </div>

      <button className="carousel__arrow-btn carousel__arrow-btn--left">
        <ArrowLeft />
      </button>

      <div className="carousel__content">
        <h3 className="carousel__content__header">{carouselItems[0].header}</h3>
        <p className="carousel__content__text">{carouselItems[0].text}</p>
        <button className="carousel__content__button">Подробнее</button>
      </div>

      <button className="carousel__arrow-btn carousel__arrow-btn--right">
        <ArrowRight />
      </button>

      <div className="carousel__dots">
        <div className="carousel__dots__item" />
        <div className="carousel__dots__item" />
        <div className="carousel__dots__item" />
        <div className="carousel__dots__item" />
      </div>
    </section>
  );
};

export default Carousel;
