import React from 'react';
import style from './counter.module.css'
type counterPropsType = {
    value: number;
    maxValue: number;
}

export const CounterBody = (props: counterPropsType) => {
    return  <div className={style.ButtonBodyMain}>
        {props.value}
    </div>
}
