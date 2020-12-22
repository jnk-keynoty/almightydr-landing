import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles({
    root: {
        borderBottom: "1px solid #FFFFFF",
    }
})

export default function Underline(props) {
    const { children } = props;
    const addClasses = useStyle(props);
    return (
        <span className={addClasses.root}>{children}</span>
    )
}