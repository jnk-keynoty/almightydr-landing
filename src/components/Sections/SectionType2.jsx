import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import GridContainer from '../Grid/GridContainer';
import GridItem from "../Grid/GridItem.jsx";
import Typography from '@material-ui/core/Typography';

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import { useMediaQuery } from '@material-ui/core';

import sectionType2Style from "assets/jss/material-kit-react/views/almightydrSections/sectionType2Style.jsx";
import IconPoints from '../IconPoints/IconPoints';


function SectionType2({ ...props }) {
    const { classes, data } = props;
    const theme = useTheme();
    const mdScreen = useMediaQuery(theme.breakpoints.up(768));
    const lgScreen = useMediaQuery(theme.breakpoints.up(992));
        return (
            <GridContainer 
                dirction="column" 
                justify={mdScreen||lgScreen?"flex-start":"space-between"}
                alignItems={mdScreen||lgScreen?"flex-start":"stretch"}
                className={classes.fullHeight}
                style={data.bgimage?{background: `url(${data.bgimage}) center / cover no-repeat`}:{}}
            >
                <GridItem className={classes.topRow}>
                    <div className={classes.fullHeight}>
                        <div className={`${classes.container} ${classes.fullHeight}`}>
                            <Grid container alignItems="center" className={classes.fullHeight}>
                                <Grid item className={classes.topText}>
                                    <Typography variant="h4" ><b>{data.preTitle}</b></Typography>
                                    <Typography variant="h3" gutterBottom><b>{data.title}</b></Typography>
                                    {data.content}
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                </GridItem>
                <GridItem className={classes.bottomRow} style={data.bgcolor?{background: data.bgcolor}:{}}>
                    <div className={`${classes.container} ${classes.fullHeight}`}>
                        <Grid container direction={mdScreen||lgScreen?"row":"column"} alignItems="center" justify={mdScreen||lgScreen?"flex-end":"flex-start"} className={`${classes.fullHeight} ${classes.bottomLists}`}>
                            {data.iconPoints.map((prop, key) => {
                                return(
                                    <Grid item key={prop.title} className={classes.bottomList}>
                                        <IconPoints title={prop.title} icon={prop.icon}></IconPoints>
                                    </Grid>
                                )
                            })}
                            <div className={classes.companyName}>ALMIGHTY DR</div>
                        </Grid>
                    </div>
                </GridItem>
            </GridContainer>
        );
}
SectionType2.propTypes = {
    data: PropTypes.object,
};
export default withStyles(sectionType2Style)(SectionType2);
