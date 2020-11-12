import React from 'react';
import GridContainer from '../Grid/GridContainer';
import GridItem from "../Grid/GridItem.jsx";
import BottomButton from "../BottomButton/BottomButton.jsx";
import withStyles from "@material-ui/core/styles/withStyles";

import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";

function SectionType1({ ...props }) {
    const { children, fullpageApi, buttonCaption, classes } = props;

        return (
            <div  className={classes.container}>
              <GridContainer >
                <GridItem align="center">
                  { children }

                </GridItem>
              </GridContainer>
              <BottomButton color="primary" onClick={() => fullpageApi.moveSectionDown()}>
                { buttonCaption }
              </BottomButton>
            </div>
        );
}

export default withStyles(componentsStyle)(SectionType1);