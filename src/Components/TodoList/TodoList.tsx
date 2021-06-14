import React, {ChangeEvent} from 'react';
import {FilterValuesType} from '../../App';
import TodoListStyle from './TodoList.module.css'
import {AddItemForm} from "../AddItemForm/AddItemForm";
import {EditableSpan} from "../EditableSpan/EditableSpan";
import {Checkbox} from "@material-ui/core";

export type TaskType = {
    id: string;
    title: string;
    isDone: boolean;
}

type PropsType = {
    todoListID: string;
    title: string;
    tasks: Array<TaskType>;
    removeTask: (taskId: string, todoListId: string) => void;
    deleteTodoList: (todoListID: string) => void;
    changeFilter: (filter: FilterValuesType, todoListId: string) => void;
    addTask: (title: string, todoListId: string) => void;
    changeTaskStatus: (taskId: string, isDone: boolean, todoListId: string) => void;
    changeTitle: (taskId: string, todoListID: string, newTitle: string) => void;
    changeTodoListTitle: (todoListID: string, newTitle: string) => void;
    filter: FilterValuesType;
}

export function TodoList(props: PropsType) {

    const onAllClickHandler = () => props.changeFilter("all", props.todoListID);
    const onActiveClickHandler = () => props.changeFilter("active", props.todoListID);
    const onCompletedClickHandler = () => props.changeFilter("completed", props.todoListID);
    const addTask = (title: string) => {
        props.addTask(title, props.todoListID)
    }
    const changeTodoListTitle = (newTitle: string) => {
        props.changeTodoListTitle(props.todoListID, newTitle);
    }

    return <div>
        <h3>
            <EditableSpan title={props.title} changeTitle={changeTodoListTitle}/>
            <button onClick={() => props.deleteTodoList(props.todoListID)}>
                x
            </button>
        </h3>
        <AddItemForm addItem={addTask}/>
        <ul style={{listStyle: 'none', padding: '0px'}}>
            {
                props.tasks.map(t => {
                    const  onClickHandler = () => props.removeTask(t.id, props.todoListID)
                    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        props.changeTaskStatus(t.id, e.currentTarget.checked, props.todoListID);
                    }
                    const changeTaskTitleHandler = (newTitle: string) => {
                        props.changeTitle(t.id, props.todoListID, newTitle);
                    }

                    return <li key={t.id} className={t.isDone ? TodoListStyle['is-done'] : ""}>
                        <Checkbox
                            size={'small'}
                            color={"primary"}
                            onChange={onChangeHandler}
                            checked={t.isDone}
                        />

                        <EditableSpan title={t.title} changeTitle={changeTaskTitleHandler}/>
                        <button onClick={onClickHandler}>x</button>
                    </li>
                })
            }
        </ul>
        <div>
            <button className={props.filter === 'all' ? "active-filter" : ""}
                    onClick={onAllClickHandler}>All
            </button>
            <button className={props.filter === 'active' ? "active-filter" : ""}
                    onClick={onActiveClickHandler}>Active
            </button>
            <button className={props.filter === 'completed' ? "active-filter" : ""}
                    onClick={onCompletedClickHandler}>Completed
            </button>
        </div>
    </div>
}


