import React from 'react';
import GridContainer from '../Grid/GridContainer';
import GridItem from "../Grid/GridItem.jsx";
import BottomButton from "../BottomButton/BottomButton.jsx";
import withStyles from "@material-ui/core/styles/withStyles";


import sectionType3Style from "assets/jss/material-kit-react/views/almightydrSections/sectionType3Style.jsx";

function SectionType3(props) {
    const { fullpageApi, buttonCaption, buttonColor, classes, topNode, bottomNode, } = props;
        return (
            <div className={classes.root}>
              <GridContainer className={classes.fullHeight}>
                <GridItem className={classes.topRow} align="flex-end">
                    <div className={`${classes.container} ${classes.fullHeight} ${classes.topRowInner} `}>
                        { topNode }
                    </div>
                </GridItem>
                <GridItem className={classes.bottomRow} align="flex-start">
                    <div className={classes.container}>
                        { bottomNode }
                    </div>
                </GridItem>
              </GridContainer>
              <BottomButton onClick={() => fullpageApi.moveSectionDown()} color={buttonColor} buttonCaption={buttonCaption}/>
            </div>
        );
}

export default withStyles(sectionType3Style)(SectionType3);