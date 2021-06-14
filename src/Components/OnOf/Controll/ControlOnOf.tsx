import React, {useState} from "react";

export type OnOfPropsType = {
    on?: boolean;
    switchOn: (on: boolean)=> void;
}

export const OnOfControll:React.FC<OnOfPropsType> = ({on, switchOn}) => {


    const onStyle = {
        display: 'inline-bloc',
        border: '1px solid',
        width: '45px',
        backgroundColor:  on ? 'green': 'white'} ;

    const oFStyle = {
        display: 'inline-bloc',
        border: '1px solid',
        width: '45px',
        weight: '40px',
        backgroundColor: !on ? 'red': 'white'};
    const circle = {
        width: '25px',
        weight: '25px',
        display: 'inline-bloc',
        border: '1px solid black',
        margin: '10px',
        borderRadius: '50%',
        backgroundColor: on ? 'green': 'white'}
    ;
    return <div>
        {console.log(on)}
        <button style={onStyle} onClick={()=>{switchOn(true)}}>On</button>
        <button style={oFStyle} onClick={()=>{switchOn(false)}}>Off</button>
        <div style={circle}>CC</div>
    </div>
}
// () => { (on) => setOn(on)}
