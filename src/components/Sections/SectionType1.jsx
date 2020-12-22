import React from 'react';
import GridContainer from '../Grid/GridContainer';
import GridItem from "../Grid/GridItem.jsx";
import BottomButton from "../BottomButton/BottomButton.jsx";
import withStyles from "@material-ui/core/styles/withStyles";

import sectionType1Style from "assets/jss/material-kit-react/views/almightydrSections/sectionType1Style.jsx";

function SectionType1(props) {
    const { children, fullpageApi, buttonCaption, classes, buttonColor, bgimage } = props;
        return (
            <div 
              className={classes.root}
              style={bgimage?{background: `url(${bgimage}) center / cover no-repeat`}:{}}
            >
              <GridContainer className={classes.container} >
                <GridItem align="center">
                  { children }

                </GridItem>
              </GridContainer>
              <BottomButton color={buttonColor} onClick={() => fullpageApi.moveSectionDown()}>
                { buttonCaption }
              </BottomButton>
            </div>
        );
}

export default withStyles(sectionType1Style)(SectionType1);