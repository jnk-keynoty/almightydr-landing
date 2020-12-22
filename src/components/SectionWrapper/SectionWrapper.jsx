import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    root: {
        [theme.breakpoints.down(768)]: {
            minHeight: "100vh",
        },
        [theme.breakpoints.up(768)]: {
            height: "100vh",
        },    
    },
}));

export default function SectionWrapper({children, ...props}) {
    const addClasses = useStyles();
    return (

        <div className={addClasses.root}>
            {children}
        </div>
    )
}
