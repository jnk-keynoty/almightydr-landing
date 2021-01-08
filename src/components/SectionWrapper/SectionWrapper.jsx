import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import sectionWrapperStyle from '../../assets/jss/material-kit-react/components/sectionWrapperStyle';

function SectionWrapper({children, classes, ...props}) {
    return (

        <div className={classes.root}>
            {children}
        </div>
    )
}

export default withStyles(sectionWrapperStyle)(SectionWrapper)