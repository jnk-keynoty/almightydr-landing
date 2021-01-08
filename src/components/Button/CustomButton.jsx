import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

import Button from '@material-ui/core/Button';

import customButtonStyle from '../../assets/jss/material-kit-react/components/customButtonStyle';

function CustomButton ({...props}) {
    const { color, onClick, buttonCaption, noShadow, type, classes } = props;
    let buttonClass = classes.default;
    switch (color) {
        case "primary" :
          if (noShadow) {
            buttonClass = ""
          }else {
            buttonClass = classes.primary;
          }
            break;
        case "danger" :
          if (noShadow) {
            buttonClass = ""
          }else {
            buttonClass = classes.danger;
          }
            break;
        case "default" :
          buttonClass = classes.default;
          break;
        default:
          buttonClass = "";
    }
        return (
            <Button variant="contained" color={color} onClick={ onClick } type={type} className={`${buttonClass} ${classes.button}`}>
                {buttonCaption}
            </Button>
        );
}

export default withStyles(customButtonStyle)(CustomButton);