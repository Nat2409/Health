import React from 'react';
import { Link } from 'react-router-dom';
import styles from './UserModal.module.css';

function UserModal() {
  return (
    <div className={styles.modal_container}>
      <ul className={styles.modal_list}>
        <li>
          <Link className={styles.modal_link} to="/diary">
            Щоденник
          </Link>
        </li>
        <li>
          <Link className={styles.modal_link} to="/calculator">
            Калькулятор
          </Link>
        </li>
      </ul>
    </div>
  );
}
export default UserModal;
