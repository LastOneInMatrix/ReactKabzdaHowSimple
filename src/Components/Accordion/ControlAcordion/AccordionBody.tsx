import React from 'react';
import {ItemType} from "./Accordion";

type AccordionBodyPropsType = {
        items:  ItemType[];
        onLiClick: (value: any) => void;
}

export function AccordionBody({items, ...props}: AccordionBodyPropsType){

    return <div>
        <ul>
            {items.map((item, index) => <li key={index} onClick={() => {props.onLiClick(item.value)}}>{item.title}</li>)}
        </ul>
    </div>
}
