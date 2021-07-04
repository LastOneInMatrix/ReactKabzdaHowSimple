import React from 'react';

type LikePropsTypes = {
        likes: number;
        setLikeCount: ()=>void;
}
export const Like = React.memo((props: LikePropsTypes) => {
        console.log('Like was rendered');
        return <div style={{border: '1px solid red', margin: '10px'}}>
                {props.likes}
                <button onClick={() => {props.setLikeCount()}}>Like</button>
        </div>
})