import React, {useState} from 'react';
import style from './counter.module.css'
type counterPropsType = {
    setValueOnClick: () => void
    resetValueOnClick: () => void;
    value: number;
    disabled: boolean;
    maximum?: number;
}

export const Buttons = (props: counterPropsType) => {
   let { value, maximum} = props;

    return  <div className={style.ButtonMain}>
        <button disabled={props.value == 5} onClick={props.setValueOnClick} >INK</button>   <button onClick={props.resetValueOnClick} disabled={props.disabled}>reset</button>
    </div>
}
