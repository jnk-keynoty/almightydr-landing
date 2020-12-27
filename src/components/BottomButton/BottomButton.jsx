import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import CustomButton from '../Button/CustomButton';
import IconButton from '@material-ui/core/IconButton';
import { ReactComponent as ArrowDown } from '../../assets/ico/arrow-down.svg';
import { SvgIcon } from '@material-ui/core';

  const useStyles = makeStyles(theme => ({
      root: {
        position: "absolute",
        bottom: "50px",
        left: 0,
        right: 0,
        textAlign: "center",
      },
  }))
function BottomButton ({...props}) {
    const { color, onClick, buttonCaption } = props;
    const addClasses = useStyles();
        return (
                <div className={addClasses.root}>
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

export default BottomButton;