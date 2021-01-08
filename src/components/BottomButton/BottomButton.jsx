import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

import CustomButton from '../Button/CustomButton';
import IconButton from '@material-ui/core/IconButton';
import { ReactComponent as ArrowDown } from '../../assets/ico/arrow-down.svg';
import { SvgIcon } from '@material-ui/core';

import bottomButtonStyle from 'assets/jss/material-kit-react/components/bottomButtonStyle.jsx'

function BottomButton ({...props}) {
  const { color, onClick, buttonCaption, classes } = props;
  return (
    <div className={classes.root}>
        {buttonCaption?
        <CustomButton color={color} onClick={ onClick } buttonCaption={ buttonCaption}/>
        :
        <IconButton variant="contained" color={ color } onClick={ onClick }>
            <SvgIcon component={ArrowDown} fontSize="inherit" />
        </IconButton>
        }
    </div>
  );
}

export default withStyles(bottomButtonStyle)(BottomButton);