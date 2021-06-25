import {Story,  Meta } from '@storybook/react';

import React from "react";
import {AccordionWithUseReducer, AccordionPropsType} from "./AccordionWithUseReduser";

export default {
    title: 'Uncontrolled/Accordion',
    component: AccordionWithUseReducer,
    argTypes: { onClick: { action: 'clicked' }}
} as Meta;
const Template: Story<AccordionPropsType> = (props) => {
    return <AccordionWithUseReducer {...props}/>
}
export const First = Template.bind({});
First.args = {
    title: 'Open',
};