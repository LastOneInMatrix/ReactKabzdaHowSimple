import React, {useEffect, useState} from 'react';
import { Story } from '@storybook/react';
import {Buttons} from './Buttons';
import {CounterBody} from './CounterBody';
import style from './counter.module.css';


export type counterPropsType = {
    initValue: number;
    maxValue: 5;
}



export const Counter = (props: counterPropsType) => {
    let [value, setValue] = useState(0);
    useEffect(() => {
        let result = localStorage.getItem('countValue');
        if (result) {
            let value = JSON.parse(result);
            setValue(value);
        }
    }, []);


    let [disabled , setDisabled] = useState(true);

    const setValueOnClick = () => {
        let newValue = ++value;
        (newValue > 5) ? console.log('maximum') : setValue(newValue);

        setDisabled(false);
    };
    const resetValueOnClick = () => {
        setValue(props.initValue);
        setDisabled(true);
    };
    useEffect(() => {
        localStorage.setItem('countValue', JSON.stringify(value));
    }, [value]);


       return  <div className={style.main}>
                 <CounterBody maxValue={props.maxValue} value={value}/>
                <Buttons  disabled={disabled}value={value} resetValueOnClick={resetValueOnClick} setValueOnClick={setValueOnClick}/>
       </div>
}
