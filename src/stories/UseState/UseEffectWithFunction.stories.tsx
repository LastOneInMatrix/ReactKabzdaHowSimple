import React, {useMemo, useState} from 'react';

export default  {
    title: 'UseState/Example'
}
type ComponentWithUseStatePropsType = {
    prop: {test: string}
}





export const ComponentWithUseState = (props: ComponentWithUseStatePropsType) => {
    // const difficult = (number: number) => {
    //       setTimeout(() => {
    //           console.log('Функция завелась Загрузился')
    //         return number + 1;
    //     }, 3000)
    //     return number + 1;
    // }; -  что бы функция постоянно не заводилась const result = difficult(2) - передаем ее сразу в первоночальное состояние UseState и тогда он запустит ее только один раз
    // const result = useMemo(difficult(200),[]);


    const difficult = (max: number = 100) => {
          setTimeout(() => {
              console.log('Функция завелась Загрузился')
        }, 3000)
        return Math.ceil(Math.random() * max);
    };

    const [count, setCount] = useState(difficult);

    return <div className={props.prop ? 'as' : 'asa'}>
        {count}
        <button onClick={() => setCount(prev => prev + 1)}>+</button>
    </div>
}

const Mother = (props: any) => {
    return <div >
        <ComponentWithUseState prop={{test: 'as'}}/>
    </div>
}