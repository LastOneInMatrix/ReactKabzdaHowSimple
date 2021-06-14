import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import styles from './AddItemForm.module.css';
import {TextField} from "@material-ui/core";

type AddItemFromPropsType = {
    addItem: (title: string) => void;
};
type ErrorType = {
    errorText: string;
    isTrue: boolean;
}

export function AddItemForm(props: AddItemFromPropsType) {

    const [tittle, setTittle] = useState<string>('');
    const [error, setError] = useState<null | ErrorType>(null);


    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {

        console.log(e.currentTarget.value);
        setTittle(e.currentTarget.value)

    };
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null);
       if(e.key === 'Enter') {
           addTask();
       }

    };
    const addTask = () => {
        if(!tittle.trim()) {
            setError({errorText: 'надо ввести текст задачи!', isTrue: true});
        }
        else {
            setError(null);
            props.addItem(tittle.trim());
            setTittle('');
        };
    };
    return <div>
        <TextField id="outlined-basic"
                   label="Make It"
                   variant="outlined"
                   size={'small'}
                   value={tittle}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
                   error={error?.isTrue}
                   helperText={error?.isTrue && 'текст ошибки'}
        />
        {/*<input value={tittle}*/}
        {/*       onChange={onChangeHandler}*/}
        {/*       onKeyPress={onKeyPressHandler}*/}
        {/*       className={error?.isTrue ? styles['error'] : ""}*/}
        {/*/>*/}

        <button onClick={addTask}>+</button>
        {error?.isTrue && <div className={styles['error-message']}>{error.errorText}</div>}
    </div>
}