import React from 'react';
import { useHistory } from 'react-router';
import styles from './buttonNav.module.scss';
import cn from 'classnames';
import { useDispatch } from 'react-redux';
import { setActiveAction } from 'redux/actions/orderActions';

const ButtonNav = ({ text, link, filled, active, disabled }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const buttonStyle = cn({
    [styles.button]: true,
    [styles.buttonFilled]: filled,
    [styles.buttonActive]: active,
    [styles.buttonDisabled]: disabled,
  });

  const handleClick = () => {
    history.push(link);
    dispatch(setActiveAction(text));
  };

  return (
    <button className={buttonStyle} onClick={handleClick} disabled={disabled}>
      {text}
    </button>
  );
};

export default ButtonNav;
