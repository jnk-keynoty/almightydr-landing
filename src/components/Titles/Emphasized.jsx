import React from 'react';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import emphasizedStyle from '../../assets/jss/material-kit-react/components/emphasizedStyle';

function Emphasized(props) {
    const { children, classes } = props;
    return (
        <Typography variant="h3" className={classes.root}>
            <span>{children}</span>
        </Typography>
    )
}

export default withStyles(emphasizedStyle)(Emphasized)