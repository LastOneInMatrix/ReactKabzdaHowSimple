import React from 'react';
import {AccordionTittle} from "./AccordionTittle";
import {AccordionBody} from "./AccordionBody";

export type ItemType = {
    title: string;
    value: any;
}
export type AccordionPropsType = {
    title: string;
    collapsed: boolean;
    setCollapsed: (collapsed: boolean) => void;
    items: ItemType[];
    onLiClick: (value: any) => void;
}

export const CAccordion = ({title, collapsed, ...props}: AccordionPropsType) => {
       return  <div>
           <AccordionTittle titleValue={title} collapsed={collapsed} setCollapsed={props.setCollapsed}/>
           {collapsed && <AccordionBody onLiClick={props.onLiClick} items={props.items}/>}
        </div>
}
