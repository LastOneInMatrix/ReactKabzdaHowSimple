import React, {useState, MouseEvent, useMemo} from 'react';
import {UsersPropsType, UserType} from "../ReactMemo/ReactMemo.stories";


export default {
    title: 'UseMemo/Example'
};
const usersArr: Array<UserType> = [{id: '1', name: 'As'}, {id: '2', name: 'SS'}, {id: '9', name: 'DS'}, {id: '7', name: 'DaS'}, {id: '6', name: 'DsaS'}]

export const Example1 = () => {
    const [a, setA] = useState<number>(3);
    const [b, setB] = useState<number>(3);

    let resultA = 1;
    let resultB = 1;

    const functionForA = () => {
        let tempResult = 1;
        let fake = 100000000;

        for (let i = 1; i <= a; i++) {
            tempResult *= i;
            while (fake > 0) {
                fake--;
                const fakeValue = Math.random();
            }
        }
        return tempResult;
    }

    const functionForB = () => {
        let tempResultB = 1;
        for (let i = 1; i <= b; i++) {
            tempResultB = tempResultB * i;
        }
        return tempResultB;
    }


    resultB = functionForB();
    resultA = useMemo(() => {
        console.log('a was changed!')
            return functionForA()
        },
        [a]);


    return <>
        <input onChange={(e) => setA(+e.currentTarget.value)}/>
        <span>Result A : {resultA} </span>
        <br/>
        <input onChange={(e) => setB(Number(e.currentTarget.value))}/>
        <span>Result B : {resultB} </span>
     </>
}






const UsersSecret = (props: UsersPropsType) => {
    console.log('users was rendered')
        return <div>
            {props.users.map(u => <li key={u.id}>{u.name}</li>)}
        </div>
}
const Counter = (props: {count: number}) => {
    return <span>{props.count}</span>
};

const UsersMemo = React.memo(UsersSecret);

export const ExampleWithReactMemo = () => {
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState<Array<UserType>>(usersArr);
    const [text, setText] = useState('');
    const addUser = () => {
        const  copy = [...users, {id: new Date().getTime() + '', name: text}]
        setUsers(copy);
    };

    const filteredUsers = useMemo(() => {
        return [...users].filter(u => u.name.split('').includes('a'));
    }, [users]) // потому-то при смене  counter происходит перерисовка компоненты, что вызывает заного фильтрацию, а то в свою очередь прокидывает каждый раз новый массив в пропсы UsersMemo

    return <>
        <button onClick={() => setCounter(counter + 1)}>Count +1</button><Counter count={counter}/>
        <button onClick={addUser}>Add User</button>
        <MyInput text={text} setText={setText}/>
        <UsersMemo users={filteredUsers}/>
    </>
}

const MyInput = React.memo((props: {setText: (text: string)=> void, text: string}) => {
    return <input type={'text'} value={props.text} onChange={(e) => props.setText(e.currentTarget.value)}/>
})