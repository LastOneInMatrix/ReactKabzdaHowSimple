import React from 'react';

type HeaderPropsTypes = {
    title: string;
}
export const Header = React.memo((props: HeaderPropsTypes) => {
    console.log('Header was rendered')
    return <h3>{props.title}</h3>
});