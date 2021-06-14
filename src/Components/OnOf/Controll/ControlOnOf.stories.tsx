import React, {useState} from 'react';
import {Story} from '@storybook/react';
import {OnOfControll, OnOfPropsType} from './ControlOnOf';
import {action} from "@storybook/addon-actions";


export default {
    title: 'Controlled/OnOf',
    component: OnOfControll,
    argTypes: { switchOn: { action: 'clicked' } }, // TODO почему не показывает в сторибук?
};

const Template: Story<OnOfPropsType> = (args) => {
    return <OnOfControll {...args} />
}

export const OnOfControlled = Template.bind({});

OnOfControlled.args = {
    on: true,
    switchOn: () => {action('clicked')}
};

const Temlate2: Story<OnOfPropsType> = (props) => {
    const [value, setValue] = useState(true);
    return <OnOfControll {...props} on={value} switchOn={setValue}/>
}

export const OnOfControlledWithChanged = Temlate2.bind({});
OnOfControlledWithChanged.args = {
    on: false,
}
