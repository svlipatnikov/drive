import React from 'react';
import styles from './buttonCategory.module.scss';
import cn from 'classnames';
import { useDispatch } from 'react-redux';
import { setCategoryAction } from 'redux/actions/orderActions';

const ButtonCategory = ({ name, active }) => {
  const dispatch = useDispatch();

  const checkBoxStyles = cn({
    [styles.checkBox]: true,
    [styles.checkBoxActive]: active,
  });

  const textStyles = cn({
    [styles.text]: true,
    [styles.textActive]: active,
  });

  const handleClick = (curentCategory) => () => {
    dispatch(setCategoryAction(curentCategory));
  };

  return (
    <button className={styles.button} onClick={handleClick(name)}>
      <div className={checkBoxStyles} />
      <div className={textStyles}>{name}</div>
    </button>
  );
};

export default ButtonCategory;
