import React from 'react';
import Button from '../Button/Button';
import CalcInform from '../CalcInform/CalcInform';
import Input from '../Input/Input';
import styles from './Diary.module.css';

function Diary() {
  return (
    <>
      <div>
      <Input type={'text'} tittle={'Введите название продукта '} />
      <Input type={'number'} tittle={'Граммы'} />
      <br />
      <Button tittle={'Добавить'} isActive={true} />
      </div>
      
      <CalcInform />
    </>
  );
}
export default Diary;
