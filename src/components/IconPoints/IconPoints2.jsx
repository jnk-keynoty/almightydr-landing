import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { SvgIcon } from '@material-ui/core';
import { useMediaQuery } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import iconPoints2Style from '../../assets/jss/material-kit-react/components/iconPoints2Style';

function IconPoints2({ ...props }) {
    const { icon, title, classes } = props;
    const smScreen = useMediaQuery(theme => theme.breakpoints.up(576));

    return (
        <Grid container className={classes.pointContainer} direction={smScreen?"column":"row"} alignItems="center" justify="flex-start" wrap="nowrap">
            <Grid item>
                <div className={classes.iconContainer}><SvgIcon component={icon} fontSize="inherit"/></div>
            </Grid>
            <Grid item>
                <h4>{ title }</h4>
            </Grid>
        </Grid>
    );
}

export default withStyles(iconPoints2Style)(IconPoints2);