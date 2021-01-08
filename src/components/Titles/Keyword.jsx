import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import keywordStyle from '../../assets/jss/material-kit-react/components/keywordStyle';

function Keyword(props) {
    const { children, classes } = props;
    return (
        <span className={classes.root}>{children}</span>
    )
}

export default withStyles(keywordStyle)(Keyword);