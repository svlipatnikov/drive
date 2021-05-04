import React from 'react';
import SideBar from 'components/SideBar';
import Footer from 'components/Footer';
import Carousel from 'components/Carousel';
import Header from 'components/Header';
import ButtonMenu from 'components/ButtonMenu';
import ButtonAccent from 'components/ButtonAccent';
import { useHistory } from 'react-router';
import styles from './mainPage.module.scss';

const MainPage = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/order/location');
  };

  return (
    <div className={styles.wrapper}>
      <ButtonMenu />
      <SideBar />

      <section className={styles.content}>
        <Header />
        <main>
          <h1 className={styles.titleBlack}>Каршеринг</h1>
          <h2 className={styles.titleGreen}>Need for drive</h2>
          <p className={styles.subtitle}>Поминутная аренда авто твоего города</p>
          <ButtonAccent
            text="Забронировать"
            handleClick={handleClick}
            className={styles.buttonOrder}
          />
        </main>
        <Footer />
      </section>

      <section className={styles.carousel}>
        <Carousel />
      </section>
    </div>
  );
};

export default MainPage;
