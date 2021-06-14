import React, {useState} from 'react';
import {Story} from '@storybook/react';
import {CAccordion , AccordionPropsType } from './Accordion';
import {action} from "@storybook/addon-actions";

const onClickCallback =  action('some item was clicked  id is...');

export default {
    title: 'Controlled/Accordion',
    component: CAccordion ,
    argTypes: { onClickCallback: { action: 'clicked' } },
};
//1
const Template: Story<AccordionPropsType> = (args) => {
    return <CAccordion {...args} />
}

export const AccordionWithOutLocalStateCollapsed = Template.bind({});

AccordionWithOutLocalStateCollapsed.args = {
    items: [],
    title: 'Baby',
    collapsed: false,
    setCollapsed: () => {action('clicked')}
};
//2

const TemplateUsers: Story<AccordionPropsType> = (args) => {
    return <CAccordion {...args} />
}

export const AccordionCollapsedUsers = TemplateUsers.bind({});
AccordionCollapsedUsers.args = {
    items: [{value:1, title:'As'}, {value:2, title:'Bars'}, {value:3, title:'Arm'}],
    title: 'Users',
    collapsed: true,
    setCollapsed: () => {action('clicked')},
    onLiClick: (value) => {alert(`user with id: ${value} just clicked`)} //TODO почему не работает c нативным action
}



//3
const Temlate2: Story<AccordionPropsType> = (props) => {
    const [value, setValue] = useState<boolean>(true);
    return <CAccordion  {...props} collapsed={value} setCollapsed={() => setValue(!value) }/>
}

export const AccordionControlledWithLocalState = Temlate2.bind({});
AccordionControlledWithLocalState.args = {
    items: [{value:1, title:'As'}, {value:2, title:'Bars'}, {value:3, title:'Arm'}],
    title: 'NotBaby',
    onLiClick: (value) => {onClickCallback(value)}//TODO почему не работает, точнее тут работает))
}
