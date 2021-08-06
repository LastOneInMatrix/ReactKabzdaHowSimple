
import {ResetEffectExample, ResetEffectPropsType, KeyTracker} from "./ResetEffect";
import {Story} from "@storybook/react";
import React from "react";

export default {
    title: 'UseEffect/Reset',
    component: KeyTracker
};
// const Template: Story<ResetEffectPropsType> = (args) => {
//     return <ResetEffectExample {...args}/>
// };
// export const ResetWithEmptyArray= Template.bind({});
//
// ResetWithEmptyArray.args = {
//     title: 'ResetEffect1'
// }



const Template1: Story<ResetEffectPropsType> = (args) => {
    return <KeyTracker {...args}/>
};
export const KeyTrackerExample = Template1.bind({});

KeyTrackerExample.args = {
    title: 'KeyTracker'
}