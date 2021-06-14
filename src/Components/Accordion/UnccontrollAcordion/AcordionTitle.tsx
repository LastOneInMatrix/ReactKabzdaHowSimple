import React from "react";


type TitlePropsType = {
    title: string;
    openAccordion: () => void
};
export function AccordionTitle(props: TitlePropsType) {
    const styles = {
        h3: {
            border: '1px solid',
            color: 'red',
            textAlign: "center" as "center",
        }
    }
    return <h3 style={styles.h3} onClick={() => props.openAccordion()}>{props.title}</h3>
}
