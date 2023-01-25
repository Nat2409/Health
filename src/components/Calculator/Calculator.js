import React from 'react';
import CalcInform from '../CalcInform/CalcInform';
import Home from '../Home/Home';
import styles from './Calculator.module.css';

function Calculator() {
  return (
    <>
      <Home
        tittle={'Узнай свою суточную норму калорий'}
        button_tittle={'Похудеть'}
      />
      <CalcInform />
    </>
  );
}
export default Calculator;
