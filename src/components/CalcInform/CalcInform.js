import React from 'react';
import styles from './CalcInform.module.css';

function CalcInform() {
  return (
    <div className={styles.container_calc}>
      <div>
        <h3 className={styles.tittle}>Сводка за ...</h3>
        <ul className={styles.list}>
          <li className={styles.list__item}>
            Осталось
            <span className={styles.item__align}>000 ккал</span>
          </li>
          <li className={styles.list__item}>
            <span> Употреблено</span>
            <span className={styles.item__align}>000 ккал</span>
          </li>
          <li className={styles.list__item}>
            Дневная норма
            <span className={styles.item__align}>000 ккал</span>
          </li>
          <li className={styles.list__item}>
            n% от нормы
            <span className={styles.item__align}>000 ккал</span>
          </li>
        </ul>
      </div>
      <div>
        <h3 className={styles.tittle}>Нерекомендуемые продукты</h3>
        <p>Здесь будет отображаться Ваш рацион</p>
      </div>
    </div>
  );
}
export default CalcInform;
