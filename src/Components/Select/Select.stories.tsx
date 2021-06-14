import React, {useState} from 'react';
import {Story} from '@storybook/react';
import {Select, SelectPropsType} from './Select';
import {action} from "@storybook/addon-actions";

const onClickCallback = action('some item was clicked');

export default {
    title: 'Controlled/Select',
    component: Select,
    argTypes: {onClickCallback: {action: 'clicked'}},
};

//3
const TemplateSelect: Story<SelectPropsType> = (args) => {
    const [value, setValue] = useState('1');

    return <Select {...args} value={value} onChange={setValue} />;
}

export const SelectLocal = TemplateSelect.bind({});

SelectLocal.args = {
    items: [{title: 'none', value: '0'}, {title: 'Volgograd', value: '1'}, {title: 'Moscow', value: '2'}, {title: 'Minsk', value: '3'}]
}


//2
const TemplateSelect2: Story<SelectPropsType> = (args) => {
    const [value, setValue] = useState('0');

    return <Select {...args} value={value} />;
}



export const SelectLocal2 = TemplateSelect2.bind({});

SelectLocal2.args = {
    onChange: () => {onClickCallback()},
    items: [{title: 'none', value: '0'}, {title: 'Volgograd', value: '1'}, {title: 'Moscow', value: '2'}, {title: 'Minsk', value: '3'}]
}

