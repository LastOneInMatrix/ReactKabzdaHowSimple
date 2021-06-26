import React, {MouseEvent, useState} from "react";
export default {
    title: 'ReactMemo/Demo',
}
type UserType = { id: string, name: string }

type UsersPropsType = {
    users: Array<UserType>
}
type NewMessagesCounterProps = { count: number }
const usersArr: Array<UserType> = [{id: '1', name: 'As'}, {id: '2', name: 'Bas'}, {id: '3', name: 'Das'}]



const sum = (n: number) => {
    console.log('Sum was called');
    return n + n;
}
const NewMessagesCounter = (props: NewMessagesCounterProps) => {
    return <div>{props.count}</div>
}

const Users = React.memo((props: UsersPropsType) => {
   const [num, setNum] = useState(0);
   const [isGreen, setIsGreen] = useState(true);
   // const countSum = sum(num); заглушить вызов функции и замемоизировать ее значения
   const countSum = React.useMemo(() => sum(num), [num]);

   const changeColor = (e: MouseEvent<HTMLLIElement>, id: number) => {
      setIsGreen(!isGreen);
   };

    return <div>
        {props.users.map((u, i)=> {
            return   <div key={i}>
                <li id={i+''} style={{color:isGreen? 'green': 'red'}} onClick={(e) => changeColor(e, i)} >{u.name}</li>
                <button onClick={() => setNum(num+1)}>+</button>
                {countSum}
            </div>
        })}

   </div>
})



export const Example1 = () => {
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(usersArr);

    return <>
        <NewMessagesCounter count={counter}/>
        <Users users={users}/>
        <button onClick={() => {setCounter(counter+1)}}>Add</button>
    </>
}
