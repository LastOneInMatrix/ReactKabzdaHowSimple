import React, {useEffect, useState} from 'react';

export type ResetEffectPropsType = {
    title: string
}
export const ResetEffectExample = (props: ResetEffectPropsType) => {
    const [count, setCount] = useState<number>(0);

    console.log('Component Rendered');

    useEffect(() => {
            console.log('Effect')
            return () => {
                console.log('Effect was reset')
            }
        }
        , [count]);

    return <div>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
}

export const KeyTracker = (props: ResetEffectPropsType) => {
    const [text, setText] = useState<string>('0');

    useEffect(() => {

        const handler = (e: KeyboardEvent) => {
            setText(text + e.key);
            console.log('start copy')
        }
        window.addEventListener('keypress', handler)

        return () => {
            window.removeEventListener('keypress', handler)
        }
    }, [text]);

    return <div>
        {props.title}
        <p>{text}</p>

    </div>
}