import React, {useState} from 'react';
import {AccordionTitle} from "./AcordionTitle";

type AccordionPropsType ={
    title: string;
    collapsed?: boolean;
};


export function Accordion({title}: AccordionPropsType) {
    const [collapsed, setCollapsed] = useState(false);

    function openAccordion() {
        // collapsed ?  setCollapsed(false): setCollapsed(true);
        setCollapsed((prevCount) => !prevCount);
    }

    return <div style={{}}>
        <AccordionTitle openAccordion={openAccordion} title={title}/>
        {collapsed && <AccordionBody/>}
    </div>


}


export function AccordionBody() {
    return <ul>
        <li>Lala</li>
        <li>Gala</li>
        <li>Dala</li>
    </ul>
}