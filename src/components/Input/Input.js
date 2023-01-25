import React from 'react';
import styles from './Input.module.css';

function Input({ tittle, type }) {
  return (
    <input
      className={styles.form_input}
      type={type}
      placeholder={tittle + '*'}
      autoComplete="off"
      required
    ></input>
  );
}
export default Input;
