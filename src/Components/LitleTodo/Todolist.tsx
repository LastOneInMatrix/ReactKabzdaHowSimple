import React, {ChangeEvent, useReducer, useState} from "react";
import {addTodoAC, StateType, todoListReducer} from "./Reducer/todoListReducer";
import {Todo} from "./Todo/Todo";

type TodolistPropsType = {
    title: string;
};





export const Todolist = (props: TodolistPropsType) => {
    const [state, dispatch] = useReducer(todoListReducer, [])
    const [name, setName] = useState('');
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value);
    };



    return <div>
        <h3>{props.title}</h3>
        <input type={'text'} value={name} onChange={onChangeHandler}/>
        <button onClick={() => dispatch(addTodoAC(name))}>ADD</button>
        {state.map((t) => <Todo key={t.id} id={t.id} dispatch={dispatch} name={t.tittle} isActive={t.isActive}/>)}
    </div>



}