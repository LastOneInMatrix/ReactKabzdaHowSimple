import React, {ChangeEvent, useState} from 'react';
import {Story, Meta} from '@storybook/react';
import {action} from "@storybook/addon-actions";


type ControlledSelectPropsType = {
    value?: string[];
}

const ControlledSelect = (props: ControlledSelectPropsType) => {
    const value = props.value;
    const [parentValue, setParentValue] = useState<string | undefined>('2');
    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value);
    }
    console.log(value);
    return <select value={parentValue} onChange={onChange}>
        {value && <option>none</option>}
        <option value={value && value[0]} >Minsk</option>
        <option value={value && value[1]} >Moscow</option>
        <option value={value && value[2]} >Penza</option>
    </select>
}


export default {
    title: 'Example/Select',
    component: ControlledSelect,
        argTypes: {
            backgroundColor: {control: 'color'},
            onClick: {action: 'click'}
        },
}

const TemplateSelect: Story<ControlledSelectPropsType> = (args) => <ControlledSelect {...args} />;
export const Select = TemplateSelect.bind({});
Select.args = {
         value: ['1', '2', '3']
};
