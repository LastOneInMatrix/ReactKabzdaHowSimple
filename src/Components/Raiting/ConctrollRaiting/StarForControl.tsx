import React from 'react';
import {valueType} from "../../../App";

type StarCPropsType = {
    selected: boolean;
    onclick: (value: valueType) => void;
    value: valueType
}
export const StarC: React.FC<StarCPropsType> = ({selected, onclick, value,...props} ) => {

    const imgStile = {
            width: '30px',
    }
    return (

            <span onClick={() => {onclick(value)}}>

                {selected ? <b> star </b> : ' star '}
            </span>

    )
}