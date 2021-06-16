import React from 'react';
import {SimpleActionType} from "./AccordionWithUseReduser";



type AccordionTittlePropsType = {
    titleValue: string;
    collapsed: boolean;
    dispatch:  (action: SimpleActionType) => void
}


export function Tittle({collapsed, dispatch, ...props}: AccordionTittlePropsType){
    const h3Style = {
        border: '2px dotted',
        width: '310px',
        color: 'red',
    }
    return <h3 style={h3Style} onClick={() => {dispatch({type: 'CHANGE_TOGGLE_STATUS'})}}>{props.titleValue}</h3>
}
