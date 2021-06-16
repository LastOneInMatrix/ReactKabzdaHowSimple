import React, {useState} from 'react';
import styles from './MyAccordion.module.css';


export const MyAccordion = (props) => {
    //Logic
    const items = props.items;

    const [window, setWindow] = useState(false);
    const [selected, setSelected] = useState(props.title);

    const onH3ClickHandler = () => {
        setWindow(!window);
    };
    const onLiClickHandler = (e) => {
        setSelected(e.currentTarget.innerHTML);
        setWindow(!window);
    };


    //ui
    const itemsForUl = items.map((element, index, arr) => {
        return <li onClick={onLiClickHandler} key={index}>{element.title}</li>
    });
    const style = {
        color: window && '2E6565FF',
        backgroundImage: window && `url("https://pngicon.ru/file/uploads/cel.png")`,
        backgroundSize: window &&`22px`,
        backgroundRepeat: window &&'no-repeat',
        backgroundPosition:  window && 'right'
    };

    return <div className={styles.main}>

        <h3 style={style} onClick={onH3ClickHandler}><a href={void (0)}>{selected}</a></h3>

        {
            window && <ul>
                {itemsForUl}
            </ul>
        }
    </div>
};

