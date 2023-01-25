import React from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import styles from './Home.module.css';

function Home({ tittle, button_tittle }) {
  return (
    <>
      <h1 className={styles.tittle}>{tittle}</h1>
      <Input tittle={'Рост'} type={'number'} />
      <Input tittle={'Возраст'} type={'number'} />
      <Input tittle={'Текущий вес'} type={'number'} />
      <Input tittle={'Желаемый вес'} type={'number'} />

      <div className={styles.radio__wrap}>
        <label className={styles.radio__tittle}>
          Группа крови *
          <div className={styles.radio__box}>
            <label className={styles.radio__button_label}>
              <input type="radio" name="blod_group" value="1" />1
            </label>
            <label className={styles.radio__button_label}>
              <input type="radio" name="blod_group" value="2" />2
            </label>
            <label className={styles.radio__button_label}>
              <input type="radio" name="blod_group" value="3" />3
            </label>
            <label className={styles.radio__button_label}>
              <input
                className={styles.radio__button}
                type="radio"
                name="blod_group"
                value="4"
              />
              4
            </label>
          </div>
        </label>
      </div>
      <br />
      <Button tittle={button_tittle} isActive={true} />
    </>
  );
}
export default Home;
