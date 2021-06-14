import {Story} from "@storybook/react";
import React from "react";
import {OnOf, OnOfPropsType} from "./OnOf";


export default {
    title: 'Uncontrolled/OnOf',
    component: OnOf,
    argTypes: { onClick: { action: 'clicked' } },
}

const TemplateOn: Story<OnOfPropsType> = (props) => <OnOf {...props}/>;
export  const OnOfWithDefaultOn = TemplateOn.bind({});
OnOfWithDefaultOn.args ={
    defaultValue: true
}

const TemplateOff: Story<OnOfPropsType> = (props) => <OnOf {...props}/>;
export  const OnOfWithDefaultOff = TemplateOn.bind({});
OnOfWithDefaultOff.args ={
    defaultValue: false
}
