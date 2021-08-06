import React, {useEffect, useState} from 'react';

export default {
    title: 'UseEffect/Examples'
}
export const UseEffectSimple = (props: any)  => {
    const [count, setCount] = useState(0);
    let [fakeCount, setFakeCount] = useState(0);

    useEffect(() => {
        console.log('useEffect every time rednder');

    });
    useEffect(() => {
        console.log('only first time render useEffect (componentDidMount)');
    }, []);
    useEffect(()=>{
        console.log('first time and everytime when count was changed');
        document.title = count.toString()
    },[count])

    return <div>
        <h3>title</h3>
        <pre>
            Count: {count} &ensp;
            FakeCount: {fakeCount}
        </pre>
        <input value={2}/>
        <button onClick={() => setCount(count + 1)}>Push</button>
        <button onClick={() => setFakeCount(fakeCount++)}>Push Fake</button>
    </div>
}
export const UseEffectWithSetTimeOut = (props: any)  => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let id = setTimeout(()=>{
            document.title = count.toString(); //типо запроса на сервер
        },100)
        return () => {
            clearTimeout(id)
        }
    }, [count]);
    useEffect(() => {
        let id = setInterval(() => {
                console.log('this is count into scope:  ' + count);
                    // setCount(count + 1); //так не будет работать так как count береться из замыкания первого вызова useEffect и функции внутри нее
                    setCount(prev => prev + 1); // а так будет за счет того, что React пихает в prev всегда актуальное значение стейта
        }, 1000)

        return () => {
            clearInterval(id)
        }
    }, [])
                // setTimeout(()=>{
                //      document.title = count.toString(); //типо запроса на сервер
                //  }) -  почему нельзя так запустить? потому что при каждом изменении стейта, пропсов и любого другого чиха у нас будет вызывать этот сеттаймаут


    return <div>
        <h3>title</h3>
        <span>{count}</span>
    </div>
}