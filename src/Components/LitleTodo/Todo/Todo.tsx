import React, {ChangeEvent, Dispatch, ReducerAction, useReducer, useState} from "react";
import {changeToggleAC, deleteTodoAC, R} from "../Reducer/todoListReducer";

type TodolistPropsType = {
    dispatch: Dispatch<ReducerAction<R>>;
    name: string;
    id: string;
    isActive: boolean;
};


export const Todo = ({name, id, dispatch, isActive}: TodolistPropsType) => {
    console.log(isActive);
    return <div>
        <span style={{color: isActive ? 'red' : 'green'}}>{name}</span>
        <button onClick={() => dispatch(changeToggleAC(id))}>do</button>
        <button onClick={() => dispatch(deleteTodoAC(id))}>delete</button>
        <button onClick={() => dispatch({type: 'fake'})}>fake</button>
    </div>
}