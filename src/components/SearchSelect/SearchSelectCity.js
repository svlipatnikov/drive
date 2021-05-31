import React, { useEffect, useRef, useState } from 'react';
import styles from './searchSelect.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { citySelector } from 'redux/selectors/orderSelectors';
import { setCityAction } from 'redux/actions/orderActions';
import { dbCitiesSelector } from 'redux/selectors/dbSelectors';
import ButtonClose from 'components/ButtonClose';
import Loader from 'components/Loader';
import getCitiesAction from 'redux/thunk/getCitiesAction';

const SearchSelectCity = () => {
  const dispatch = useDispatch();
  const listRef = useRef();
  const { data, isLoading, isOk, isFailed } = useSelector(dbCitiesSelector);
  const city = useSelector(citySelector);
  const [input, setInput] = useState(city ? city.name : '');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!input && city && !open) {
      setInput(city.name);
    }
  }, [input, open, city]);

  useEffect(() => {
    if (city) {
      setInput(city.name);
    }
  }, [city]);

  useEffect(() => {
    const handleClose = (event) => {
      if (listRef.current) {
        if (!listRef.current.contains(event.target)) {
          setOpen(false);
        }
      }
    };

    dispatch(getCitiesAction());
    window.addEventListener('click', handleClose);
    return () => {
      window.removeEventListener('click', handleClose);
    };
  }, [dispatch]);

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleOpen = () => {
    if (city) {
      setInput('');
    }
    if (!isOk && !isLoading) {
      dispatch(getCitiesAction());
    }
    setOpen(true);
  };

  const handleClear = () => {
    setInput('');
    setOpen(false);
    dispatch(setCityAction(null));
  };

  const handleCityChoice = (city) => () => {
    setInput(city.name);
    setOpen(false);
    dispatch(setCityAction(city));
  };

  return (
    <div className={styles.wrapper} ref={listRef}>
      <p className={styles.label}>Город</p>

      <input
        type="text"
        value={input}
        onChange={handleChange}
        onClick={handleOpen}
        className={styles.inputField}
        placeholder="Начните вводить пункт"
      />

      {!!input && (
        <ButtonClose dark size="small" className={styles.closeBtn} onClick={handleClear} />
      )}

      {open && (
        <div className={styles.selectList}>
          {isLoading && <Loader />}
          {isOk &&
            data
              .filter((city) => {
                if (!input) return true;
                if (!input.length) return true;
                if (input === city.name) {
                  dispatch(setCityAction(input));
                  setOpen(false);
                }
                return city.name.toLowerCase().includes(input.toLowerCase());
              })
              .map((city) => (
                <div className={styles.selectItem} onClick={handleCityChoice(city)} key={city.id}>
                  {city.name}
                </div>
              ))}
          {isFailed && (
            <div className={styles.errorMessage}>Не удалось загрузить список городов</div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchSelectCity;
