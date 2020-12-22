import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles({
    root: {
        fontWeight: "bold",
        "& span": {
            display: "inline-block",
            background: "#FFFFFF",
            padding: "0px 1.5em",
            color: (props) => (props.color),
        }
    }
})

export default function Emphasized(props) {
    const { children } = props;
    const addClasses = useStyle(props);
    return (
        <Typography variant="h3" className={addClasses.root}>
            <span>{children}</span>
        </Typography>
    )
}