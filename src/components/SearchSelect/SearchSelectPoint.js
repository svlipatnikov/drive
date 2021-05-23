import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { citySelector, pointSelector } from 'redux/selectors/orderSelectors';
import { setPointAction } from 'redux/actions/orderActions';
import { ReactComponent as CloseBtn } from 'assets/svg/closeBtn.svg';
import { dbPointsSelector } from 'redux/selectors/dbSelectors';
import styles from './searchSelect.module.scss';
import Loader from 'components/Loader';
import getPointsAction from 'redux/thunk/getPointAction';

const SearchSelectPoint = () => {
  const city = useSelector(citySelector);
  const point = useSelector(pointSelector);
  const listRef = useRef();
  const { data, isLoading, isOk, isFailed } = useSelector(dbPointsSelector);
  const [input, setInput] = useState(point ? point.address : '');
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setInput('');
  }, [city]);

  useEffect(() => {
    if (point) {
      setInput(point.address);
    }
  }, [point]);

  useEffect(() => {
    const handleClose = (event) => {
      if (listRef.current) {
        if (!listRef.current.contains(event.target)) {
          setOpen(false);
        }
      }
    };

    dispatch(getPointsAction());
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
      dispatch(setPointAction(null));
    }
    if (!isOk && !isLoading) {
      dispatch(getPointsAction());
    }
    setOpen(true);
  };

  const handleClear = () => {
    setInput('');
    setOpen(false);
    dispatch(setPointAction(null));
  };

  const handlePointChoice = (point) => () => {
    setInput(point.address);
    setOpen(false);
    dispatch(setPointAction(point));
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
              .filter((point) => {
                if (!city) return true;
                if (!point.cityId) return true;
                return point.cityId.id === city.id;
              })
              .filter((point) => {
                if (!input) return true;
                if (input.length < 2) return true;
                return point.address.toLowerCase().includes(input.toLowerCase());
              })
              .map((point) => (
                <div
                  className={styles.selectItem}
                  onClick={handlePointChoice(point)}
                  key={point.id}
                >
                  {point.address}
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
