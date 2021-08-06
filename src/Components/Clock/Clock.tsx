import React, {useEffect, useState} from 'react';


export type ClockPropsType = {
    title: string
    mode: 'digital' | 'Analog'
}

export const Clock: React.FC<ClockPropsType> = (props) => {

    const [date, setDate] = useState(new Date());
    const StringDDigitDate = (num: number) => num < 10? '0' + num:num;


    useEffect(() => {
        console.log('UseEffect in setInterval');
        const intervalID: NodeJS.Timeout = setInterval(() => {
            console.log('tik in setInterval');   //работает только setInterval c привязкой к области видимости UseEffect
            setDate(new Date());
            }, 1000);
        return () => {
            clearInterval(intervalID);
        }
    }, []);

    let view;
    switch(props.mode) {
        case "Analog": {
            view = <>Analog</>
            break
        }
        case "digital":
        default: view = <>
            <span>{StringDDigitDate(date.getHours())}</span>:
            <span>{StringDDigitDate(date.getMinutes())}</span>:
            <span>{StringDDigitDate(date.getSeconds())}</span>
        </>
    }

    return <div>
        <h3>{props.title}</h3>
        {view}
    </div>
}