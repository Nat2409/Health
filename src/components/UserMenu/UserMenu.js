import React from 'react';
import styles from './UserMenu.module.css';

function UserMenu({ tittle }) {
  return (
    <section className={styles.user_menu}>
      <button className={styles.button_arrow} type="button"></button>
      <div>
        <p className={styles.user_name}>{tittle}</p>
        <button className={styles.button__exit} type="button">
          Выход
        </button>
      </div>
    </section>
  );
}
export default UserMenu;
