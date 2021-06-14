import React from 'react';
import { Story } from '@storybook/react';
import { Rating, RatingProps } from './Rating';



const getCategoryObj = (categoryName: string) => ({
    table: {
        category: categoryName,
    },
})
export default {
    title: 'Example/Stars',
    component: Rating,
    argsTypes: {
        color: {
            control: 'color',
            ...getCategoryObj('colors'),
        }

    }
}

const Template: Story<RatingProps> = (props) => (<Rating {...props} />);

export const EmptyStars = Template.bind({});
EmptyStars.args = {
    value: 0
};

export const Stars2 = Template.bind({});
Stars2.args = {
    value: 2
};
