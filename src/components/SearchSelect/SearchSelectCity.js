import React, { useEffect, useRef, useState } from 'react';
import styles from './searchSelect.module.scss';
import { ReactComponent as CloseBtn } from 'assets/svg/closeBtn.svg';
import { useDispatch, useSelector } from 'react-redux';
import { citySelector } from 'redux/selectors/orderSelectors';
import { setCityAction } from 'redux/actions/orderActions';
import { dbCitiesSelector } from 'redux/selectors/dbSelectors';
import Loader from 'components/Loader';
import { setDbCitiesAction } from 'redux/thunk/thunk';

const SearchSelectCity = () => {
  const dispatch = useDispatch();
  const listRef = useRef();
  const { data, isLoading, isOk, isFailed } = useSelector(dbCitiesSelector);
  const city = useSelector(citySelector);
  const [input, setInput] = useState(city);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleClose = (event) => {
      if (listRef.current) {
        if (!listRef.current.contains(event.target)) {
          setOpen(false);
        }
      }
    };

    dispatch(setDbCitiesAction());
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
      dispatch(setCityAction(''));
    }
    if (!isOk && !isLoading) {
      dispatch(setDbCitiesAction());
    }
    setOpen(true);
  };

  const handleClear = () => {
    setInput('');
    setOpen(false);
    dispatch(setCityAction(''));
  };

  const handleChoice = (name) => () => {
    setInput(name);
    setOpen(false);
    dispatch(setCityAction(name));
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
                if (!input) return true;
                if (!input.length) return true;
                if (input === item.name) {
                  dispatch(setCityAction(input));
                  setOpen(false);
                }
                return item.name.toLowerCase().includes(input.toLowerCase());
              })
              .map((item) => (
                <div className={styles.selectItem} onClick={handleChoice(item.name)} key={item.id}>
                  {item.name}
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