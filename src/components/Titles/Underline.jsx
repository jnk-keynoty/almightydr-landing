import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import underlineStyle from '../../assets/jss/material-kit-react/components/underlineStyle';

function Underline(props) {
    const { children, classes } = props;
    return (
        <span className={classes.root}>{children}</span>
    )
}

export default withStyles(underlineStyle)(Underline);