import React from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import { SvgIcon } from '@material-ui/core';
import { useMediaQuery } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import iconPointsStyle from 'assets/jss/material-kit-react/components/iconPointsStyle.jsx'

function IconPoints({ ...props }) {
    const { icon, title, classes } = props;
    const mdScreen = useMediaQuery(theme => theme.breakpoints.up(768));
    const lgScreen = useMediaQuery(theme => theme.breakpoints.up(992));

    return (
        <Grid container className={classes.pointContainer} direction={mdScreen||lgScreen?"column":"row"} alignItems="center" justify="flex-start">
            <Grid item>
                <div className={classes.iconContainer}><SvgIcon component={icon} fontSize="inherit"/></div>
            </Grid>
            <Grid item>
                <h4>{ title }</h4>
            </Grid>
        </Grid>
    );
}

export default withStyles(iconPointsStyle)(IconPoints);