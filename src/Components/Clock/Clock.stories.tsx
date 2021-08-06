import React from 'react';
import {Story} from "@storybook/react";
import {Clock, ClockPropsType} from "./Clock";


export default {
    title: 'Uncontrolled/Clock',
    component: Clock
};

const Template: Story<ClockPropsType> = (args) => {
    return <Clock {...args}/>
};

export const UncontrolledClock = Template.bind({});

UncontrolledClock.args = {
    title: 'Часики'
}

const TemplateAnalog: Story<ClockPropsType> = (args) => {
    return <Clock {...args}/>
};

export const UncontrolledAnalogClock = Template.bind({});

UncontrolledAnalogClock.args = {
    title: 'Часикsи',
    mode: "Analog"
}