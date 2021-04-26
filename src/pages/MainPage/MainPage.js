import React from 'react';
import SideBar from 'components/SideBar';
import Footer from 'components/Footer';
import Carousel from 'components/Carousel';
import Header from 'components/Header';
import MenuButton from 'components/ButtonMenu';
import './mainPage.scss';
import ButtonAccent from 'components/ButtonAccent';

const MainPage = () => {
  const handleClick = () => {
    //TODO
  };

  return (
    <div className="wrapper">
      <MenuButton />

      <section className="wrapper__side-bar">
        <SideBar />
      </section>

      <section className="wrapper__content content">
        <Header />
        <main className="main">
          <h1 className="main__title">Каршеринг</h1>
          <h2 className="main__title main__title--green">Need for drive</h2>
          <p className="main__subtitle">Поминутная аренда авто твоего города</p>
          <ButtonAccent text="Забронировать" onClick={handleClick} className="main__button" />
        </main>
        <Footer />
      </section>

      <section className="wrapper__carousel">
        <Carousel />
      </section>
    </div>
  );
};

export default MainPage;
