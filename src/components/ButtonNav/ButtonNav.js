import React from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { setOrderStepAction } from 'redux/actions/mainActions';
import { ReactComponent as Tringle } from 'assets/svg/tringle.svg';
import styles from './buttonNav.module.scss';
import cn from 'classnames';

const ButtonNav = ({ link, active, disabled, step, children }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const buttonStyle = cn({
    [styles.button]: true,
    [styles.buttonActive]: active,
    [styles.buttonDisabled]: disabled,
  });

  const handleClick = () => {
    history.push(link);
    dispatch(setOrderStepAction(step));
  };

  return (
    <>
      <Tringle className={styles.tringle} />
      <button className={buttonStyle} onClick={handleClick} disabled={disabled}>
        {children}
      </button>
    </>
  );
};

export default ButtonNav;
