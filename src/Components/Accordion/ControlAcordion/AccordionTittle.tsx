import React from 'react';



type AccordionTittlePropsType = {
    titleValue: string;
    collapsed: boolean;
    setCollapsed:  (collapsed: boolean) => void
}

export function AccordionTittle({collapsed, setCollapsed, ...props}: AccordionTittlePropsType){
    const h3Style = {
        border: '2px dotted',
        width: '150px',
        color: 'red',
    }
    return <h3 style={h3Style} onClick={() => {
        setCollapsed(!collapsed)
    }}>{props.titleValue}</h3>
}
