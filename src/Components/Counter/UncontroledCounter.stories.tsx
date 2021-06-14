import {Story} from "@storybook/react";
import React from "react";
import {Counter, counterPropsType} from "./Counter";


export default {
    title: 'Uncontrolled/Counter',
    component: Counter,
    argTypes: { onClick: { action: 'clicked' } },
}
const Template: Story<counterPropsType> = (props) => <Counter {...props}/>;
export  const Counter2 = Template.bind({});
Counter2.args ={
    initValue: 0,
    maxValue: 5
}
