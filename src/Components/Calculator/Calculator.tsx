import React, {useState} from "react";

type CalculatorPropsTypes = {
    values?: {init: number, current: number, result: number};
    operation?: {plus: boolean, minus: boolean, multiply: boolean, divide: boolean};
    value: number;

}
export const Calculator = (props: CalculatorPropsTypes) => {
    const [count, setCount] = useState(props.value);
    function increment(){
        setCount(prev => prev +1);
    }
    function decrement() {
        setCount(prev => prev -1);
    }
    return <div>
            <button onClick={increment}>-</button>
                <span>{count}</span>
            <button onClick={decrement}>+</button>
    </div>
}