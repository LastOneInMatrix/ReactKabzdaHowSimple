import React from "react";
type AppTitlePropsType = {
    title: string;
}
export function AppTitle({title}:AppTitlePropsType) {
    return <h1>
        {title}
    </h1>
}