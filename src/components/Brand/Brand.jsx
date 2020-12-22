import { Typography } from '@material-ui/core'
import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    root: {
        display: "inline-block",
        width: "50px",
        height: "50px",
    }
})

export default function Brand({...props}) {
    const {brand, logo} = props;
    const addClasses = useStyles();
    return (
        <a href="/" className={addClasses.root} style={{backgroundImage: "url("+logo+")", backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}><Typography variant="srOnly">{brand}</Typography></a>
    )
}
