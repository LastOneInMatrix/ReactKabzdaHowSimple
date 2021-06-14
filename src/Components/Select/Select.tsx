import React, {KeyboardEvent, useEffect, useState} from "react";
import SelectStyles from "./Select.module.css";

export type ItemType = {
    title: string;
    value: string;
}
export type SelectPropsType = {
    value: any;
    onChange: (value: any) => void;
    items: ItemType[];
    onLiClick: () => void;
}

export const Select: React.FC<SelectPropsType> = (props) => {

    const [active, setActive] = useState(false);
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value);



    const hoveredItem = props.items.find((it) => it.value === hoveredElementValue);
    const selectedItem = props.items.find((it) => it.value === props.value);

    useEffect(()=>{
        setHoveredElementValue(props.value);
    }, [props.value]);


    const toggleActive = () => setActive(!active);
    const onItemClick = (value: any) => {
        props.onChange(value);
        toggleActive();
    }
    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if(e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const elementPretendent =  e.key === 'ArrowDown' ? props.items[i+1]: props.items[i-1]
                    if(elementPretendent) {
                        props.onChange(elementPretendent.value);
                        break;
                    }
                    else {

                    }

                }
            }
        }
        if(e.key === 'Enter' || e.key === 'Escape') {
            toggleActive();
        }
    };


    const itemsJSX = props.items.map((item, id) => {
        //{title: 'none', value: '0'}
        return <li
            onMouseEnter={() => {
                setHoveredElementValue(item.value);
            }}
            className={SelectStyles.item + ' ' + (hoveredItem === item ? SelectStyles.selected : '')}
            key={id}
            onClick={() => {
                onItemClick(item.value)
            }}
        >
            {item.title}
        </li>
    })

    return <div className={SelectStyles.select + ' ' + (active ? SelectStyles.active : '')} tabIndex={0}
                onKeyUp={onKeyUp}>
        <h3
            className={SelectStyles.selectH3 + ' ' + (active ? SelectStyles.active : '')}
            onClick={toggleActive}
        >
            {selectedItem?.title}
        </h3>
        <div className={SelectStyles.items}>
            {itemsJSX}
        </div>
    </div>
}
