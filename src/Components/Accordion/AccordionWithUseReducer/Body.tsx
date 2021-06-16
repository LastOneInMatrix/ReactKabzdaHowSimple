import React from 'react';
import {ItemsType} from "./AccordionWithUseReduser";

type AccordionBodyPropsType = {
    items: ItemsType
}

export function Body({items}: AccordionBodyPropsType){
    const liJSX = items.map((it, i) => <li key={i}>{it}</li>)
    return <div style={{textAlign: 'center'}}>
        <ul>
            {liJSX}
        </ul>
    </div>
}
