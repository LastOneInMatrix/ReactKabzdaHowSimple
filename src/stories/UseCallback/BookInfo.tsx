import React, {useState} from 'react';
import {commentsType} from "./Book";

type BookInfoPropsTypes = {
    comments: commentsType;
    addComments: (text:string) => void;
}
export const BookInfo = React.memo((props: BookInfoPropsTypes) => {
    console.log('BookInfo was rendered');
    const [textValue, setTextValue] = useState('');
    return <div style={{border: '1px solid black', padding: '10px'}}>
        <h3>lorem</h3>
        <p>Lorem ipsum dolor sit amet, consectetur.</p>
        <input value={textValue} onChange={e => setTextValue(e.currentTarget.value)}/>
        <button onClick={() => props.addComments(textValue)}>Add Comments</button>
        <ul style={{listStyle: `square`, }}>
            {props.comments.map(c => <li key={c.id}>{c.text}</li>)}
        </ul>
    </div>
})