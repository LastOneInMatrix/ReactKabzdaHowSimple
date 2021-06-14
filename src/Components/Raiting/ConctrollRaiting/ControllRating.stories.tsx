import React, {useState} from 'react';
import { Story } from '@storybook/react';
import { RatingControlled, RatingControlledType } from './ControllRating';
import {valueType} from "../../../App";


export default {
    title: 'Controlled/Stars',
    component: RatingControlled
}

const Template: Story<RatingControlledType> = (args) => {
    const [rating, setRating] = useState<valueType>(0);
    return <RatingControlled {...args} value={rating} onclick={setRating}/>
}

export const ChangedRating = Template.bind({});
ChangedRating.args = {
    mapForRating: [1,2,3,4,5]
};

const Template2: Story<RatingControlledType> = (args) => <RatingControlled {...args} />

export const RatingWithValue = Template2.bind({});
RatingWithValue.args = {
    value: 2,
    onclick: () => {},
    mapForRating: [1,2,3,4,5]
};
