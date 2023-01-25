import React from 'react';
import styles from './Button.module.css';

function Button({ tittle, isActive }) {
  return (
    <button
      className={isActive ? styles.button : styles.button_transparent}
      type="submit"
    >
      {tittle}
    </button>
  );
}
export default Button;
