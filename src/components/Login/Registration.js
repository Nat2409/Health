import React from 'react';
import Button from '../Button/Button';
import styles from './Login.module.css';

function Registration() {
  return (
    <>
      <h2 className={styles.form_name}> Регистрация</h2>
      <form className={styles.form}>
        <input
          className={styles.form_input}
          type="text"
          placeholder="Имя *"
          autoComplete="off"
          required
        ></input>
        <input
          className={styles.form_input}
          type="email"
          placeholder="Логин *"
          required
        ></input>
        <input
          className={styles.form_input}
          type="password"
          placeholder="Пароль *"
          autoComplete="off"
          required
        ></input>
        <div className={styles.buttons_box}>
          {/* <button className={styles.button} type="submit">
            Вход
          </button>
          <button className={styles.button} type="submit">
            Регистрация
          </button> */}
          <Button tittle={'Вход'} isActive={false} />
          <Button tittle={'Регистрация'} isActive={true} />
        </div>
      </form>
    </>
  );
}
export default Registration;
