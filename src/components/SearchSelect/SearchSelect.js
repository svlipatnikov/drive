import React, { useState } from 'react';
import styles from './searchSelect.module.scss';
import { ReactComponent as CloseBtn } from 'assets/svg/closeBtn.svg';
import { useDispatch } from 'react-redux';

const SearchSelect = ({ label, action, initData }) => {
  const dispatch = useDispatch();
  const [input, setInput] = useState(initData);
  const [open, setOpen] = useState(false);

  const handleChange = (event) => {
    setInput(event.target.value);
    dispatch(action(event.target.value));
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClear = () => {
    setInput('');
    setOpen(false);
    dispatch(action(''));
  };

  const handleChoice = () => {
    console.log('handleChoice', input);
    dispatch(action(input));
  };

  return (
    <div className={styles.wrapper}>
      <p className={styles.label}>{label}</p>

      <input
        type="text"
        value={input}
        onChange={handleChange}
        onClick={handleOpen}
        onBlur={handleClose}
        className={styles.inputField}
        placeholder="Начните вводить пункт"
      />

      {open && (
        <div className={styles.selectList} onClick={handleChoice}>
          {/* TODO */}
        </div>
      )}

      {!!input && (
        <button className={styles.closeBtn} onClick={handleClear}>
          <CloseBtn />
        </button>
      )}
    </div>
  );
};

export default SearchSelect;
