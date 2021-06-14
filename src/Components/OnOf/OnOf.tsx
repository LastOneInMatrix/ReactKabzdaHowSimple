import React, {useState} from "react";

export type OnOfPropsType = {
    on?: boolean,
    defaultValue?: boolean,
}

export const OnOf: React.FC<OnOfPropsType> = (props) => {
    const [on, setOn] = useState<boolean>(props.defaultValue || false)

    const onStyle = {
        display: 'inline-bloc',
        border: '1px solid',
        width: '45px',
        backgroundColor: on ? 'green' : 'white'
    };

    const oFStyle = {
        display: 'inline-bloc',
        border: '1px solid',
        width: '45px',
        weight: '40px',
        backgroundColor: !on ? 'red' : 'white'
    };
    const circle = {
            width: '25px',
            weight: '25px',
            display: 'inline-bloc',
            border: '1px solid black',
            margin: '10px',
            borderRadius: '50%',
            backgroundColor: on ? 'green' : 'white'
        }
    ;
    return <div>
        <button style={onStyle} onClick={() => {
            setOn(true)
        }}>On
        </button>
        <button style={oFStyle} onClick={() => {
            setOn(false)
        }}>Off
        </button>
        <div style={circle}>CC</div>
    </div>
}
