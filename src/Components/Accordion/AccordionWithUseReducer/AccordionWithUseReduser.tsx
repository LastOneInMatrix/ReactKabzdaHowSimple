import React, {useReducer} from 'react';
import {Tittle} from "./Tittle";
import {Body} from "./Body";

const CHANGE_TOGGLE_STATUS = 'CHANGE_TOGGLE_STATUS';

export type AccordionPropsType = {
    title: string;
    onClick: () => {}
}
export type SimpleActionType = {
    type: string;
}

export type ItemsType = Array<string>
const items: ItemsType = ['First', 'Second', 'Third'];

const reducer = (state: boolean, action: SimpleActionType) => {
    switch(action.type){
        case CHANGE_TOGGLE_STATUS: {
                return !state
        }
        default:
            throw new Error('Bad Action');
            return state;
    }

}


export const AccordionWithUseReducer = ({title}: AccordionPropsType) => {
    const [collapsed, dispatch] = useReducer(reducer, true)
       return  <div>
           <Tittle titleValue={title} collapsed={collapsed} dispatch={dispatch}/>
           {collapsed && <Body items={items} />}
        </div>
}
