import React, {ChangeEvent, useRef, useState} from "react";

export default {
    title: 'Uncontrolled/Input'

}
export const UncontrolledInput = () => <input/>
export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('');
    return <>
        <input onChange={(e: ChangeEvent<HTMLInputElement>) => {
            const actualValue = e.currentTarget.value;
            setValue(actualValue);
        }}/> {value}
    </>;
}
export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null)
    const saveValue = () =>{
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value);
    }
    return <>
    <input ref={inputRef}/> <button onClick={saveValue}>Press</button> {value}
    </>;
}
export const ControlledInput = () => < input value={'As'}/>
