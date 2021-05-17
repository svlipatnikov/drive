import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { citySelector, pointSelector } from 'redux/selectors/orderSelectors';
import { setPointAction } from 'redux/actions/orderActions';
import { ReactComponent as CloseBtn } from 'assets/svg/closeBtn.svg';
import { dbPointsSelector } from 'redux/selectors/dbSelectors';
import styles from './searchSelect.module.scss';
import { setDbPointsAction } from 'redux/thunk/thunk';
import Loader from 'components/Loader';

const SearchSelectPoint = () => {
  const city = useSelector(citySelector);
  const point = useSelector(pointSelector);
  const listRef = useRef();
  const { data, isLoading, isOk, isFailed } = useSelector(dbPointsSelector);
  const [input, setInput] = useState(point);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setInput(point);
  }, [city, point]);

  useEffect(() => {
    const handleClose = (event) => {
      if (listRef.current) {
        if (!listRef.current.contains(event.target)) {
          setOpen(false);
        }
      }
    };

    dispatch(setDbPointsAction());
    window.addEventListener('click', handleClose);
    return () => {
      window.removeEventListener('click', handleClose);
    };
  }, [dispatch]);

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleOpen = () => {
    if (point) {
      setInput('');
      dispatch(setPointAction(''));
    }
    if (!isOk && !isLoading) {
      dispatch(setDbPointsAction());
    }
    setOpen(true);
  };

  const handleClear = () => {
    setInput('');
    setOpen(false);
    dispatch(setPointAction(''));
  };

  const handleChoice = (name) => () => {
    setInput(name);
    setOpen(false);
    dispatch(setPointAction(name));
  };

  return (
    <div className={styles.wrapper} ref={listRef}>
      <p className={styles.label}>Пункт выдачи</p>

      <input
        type="text"
        value={input}
        onChange={handleChange}
        onClick={handleOpen}
        className={styles.inputField}
        placeholder="Начните вводить пункт"
      />

      {!!input && (
        <button className={styles.closeBtn} onClick={handleClear}>
          <CloseBtn />
        </button>
      )}

      {open && (
        <div className={styles.selectList}>
          {isLoading && <Loader />}
          {isOk &&
            data
              .filter((item) => {
                if (!city) return true;
                if (!item.cityId) return true;
                return item.cityId.name === city;
              })
              .filter((item) => {
                if (!input) return true;
                if (input.length < 2) return true;
                return item.address.toLowerCase().includes(input.toLowerCase());
              })
              .map((item) => (
                <div
                  className={styles.selectItem}
                  onClick={handleChoice(item.address)}
                  key={item.id}
                >
                  {item.address}
                </div>
              ))}
          {isFailed && (
            <div className={styles.errorMessage}>Не удалось загрузить список адресов</div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchSelectPoint;