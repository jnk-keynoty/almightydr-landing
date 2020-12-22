import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles({
    root: {
        fontSize: "1.2em",
        fontWeight: "bold"
    }
})

export default function Keyword(props) {
    const { children } = props;
    const addClasses = useStyle(props);
    return (
        <span className={addClasses.root}>{children}</span>
    )
}