import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import GridContainer from '../Grid/GridContainer';
import GridItem from "../Grid/GridItem.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import { useMediaQuery } from '@material-ui/core';

import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";
import IconPoints from '../IconPoints/IconPoints';

const useStyles = makeStyles({
    fullHeight: {
        height: "100%",
        position: "relative",
    },
    topRow: {
        height: "70%",
    },
    bottomRow: {
        height: "30%",
    },
    companyName: {
        position: "absolute",
        left: "0px",
        bottom: "30px",
    }
})

function SectionType2({ ...props }) {
    const { children, classes, iconPoints } = props;
    const addClasses = useStyles();
    const mdScreen = useMediaQuery(theme => theme.breakpoints.up(768));
    const lgScreen = useMediaQuery(theme => theme.breakpoints.up(992));

        return (
                <GridContainer 
                    dirction="column" 
                    justify="space-between"
                    alignItems="stretch"
                    className={addClasses.fullHeight}
                >
                    <GridItem className={addClasses.topRow}>
                        <Parallax image={require("assets/img/landing-bg.jpg")} className={addClasses.fullHeight}>
                            <div className={classes.container}>
                                <GridContainer alignItems="center" className={addClasses.fullHeight}>
                                    <GridItem>
                                    { children }
                                    </GridItem>
                                </GridContainer>
                            </div>
                        </Parallax>
                    </GridItem>
                    <GridItem className={addClasses.bottomRow}>
                        <div className={`${classes.container} ${addClasses.fullHeight}`}>
                            <Grid container direction={mdScreen||lgScreen?"row":"column"} alignItems="center" justify="flex-end" className={addClasses.fullHeight}>
                                {iconPoints.map((prop, key) => {
                                    console.log("key" + key);
                                    return(
                                        <Grid item>
                                            <IconPoints key={prop.title} title={prop.title} icon={prop.icon}></IconPoints>
                                        </Grid>
                                    )
                                })}
                                <div className={addClasses.companyName}>ALMIGHTY DR</div>
                            </Grid>
                        </div>
                    </GridItem>
                </GridContainer>
        );
}

export default withStyles(componentsStyle)(SectionType2);