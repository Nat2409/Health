import React from 'react';

import styles from './Login.module.css';
import Button from '../Button/Button';

function Enter() {
  return (
    <>
      <h2 className={styles.form_name}> Вход</h2>
      <form className={styles.form}>
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
          <Button tittle={'Вход'} isActive={true} />
          <Button tittle={'Регистрация'} isActive={false} />
        </div>
      </form>
    </>
  );
}
export default Enter;
// export default Login('Вход', Enter);
