import React, {useState} from "react";

export type RatingProps = {
    /**
     * optional function parameter that show hom many stars must be styled by bold
     */
    value?: number;
    /**
     * Color of stars
     */
    color?: string;
}
const arr: Array<number> = [1, 2, 3, 4, 5];

export function Rating(props: RatingProps) {
    const [value, setValue] = useState(0);

    function changeRating(id: number) {
        setValue(id);
    }

    const arrOfStars = arr.map((el, i) => {
        return <Star color={props.color} key={el} id={el} checked={value > i} changeRating={changeRating}/>
    })

    return <div>
        {arrOfStars}
    </div>
}

type StarPropsType = {
    checked: boolean;
    id: number;
    changeRating: (id: number) => void
    /**
     * Color Of
     */
    color?: string;
}
const Star = ({checked, id, changeRating, ...props}: StarPropsType) => {
    return <span
        style={{color: props.color ? props.color : 'black'}}
        onClick={() => changeRating(id)}>{checked ? <b> star </b> : ' star '}
    </span>
}

