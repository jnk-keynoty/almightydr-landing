import React from 'react';
import { makeStyles } from '@material-ui/styles';

import Button from '@material-ui/core/Button';

  const useStyles = makeStyles(theme => ({
      button: {
          width: "100%",
          maxWidth: "400px",
          fontSize: "24px",
          fontWeight: "bold",
          paddingTop: "14px",
          paddingBottom: "14px",
            borderRadius: "35px",
      },
      default: {
        backgroundColor: "#FFFFFF",
        boxShadow: "10px 10px 20px #d9d9d9, -10px -10px 20px #ffffff",
        color: "rgba(0, 0, 0, 0.87)",
      },
      primary: {
        boxShadow: "10px 10px 20px #552d83, -10px -10px 20px #733db1",
      },
      [theme.breakpoints.down(768)]: {
        button: {
          maxWidth: "300px",
          fontSize: "18px",
        }
      },
  }))
function CustomButton ({...props}) {
    const { color, onClick, buttonCaption, noShadow, type } = props;
    const addClasses = useStyles();
    let buttonClass = addClasses.default;
    switch (color) {
        case "primary" :
          if (noShadow) {
            buttonClass = ""
          }else {
            buttonClass = addClasses.primary;
          }
            break;
        case "default" :
          buttonClass = addClasses.default;
          break;
        default:
          buttonClass = "";
    }
        return (
            <Button variant="contained" color={color} onClick={ onClick } type={type} className={`${buttonClass} ${addClasses.button}`}>
                {buttonCaption}
            </Button>
        );
}

export default CustomButton;