import React from 'react';
import {StarC} from "./StarForControl";
import {arrForMap, valueType, mapForRating} from "../../../App";


    export type RatingControlledType = {
    mapForRating: arrForMap;
    value: valueType;
    onclick: (value: valueType) => void
}

export const RatingControlled = (props:RatingControlledType) => {

   const Stars = mapForRating.map((e,i) => {
       return <StarC onclick={props.onclick} selected={props.value>i} value={e}/>
   })

    return (
        <div>
            {Stars}
        </div>
    )
}
