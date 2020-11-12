import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

function BottomButton ({...props}) {
    const { color, onClick } = props;
    const style = {
        position: "absolute",
        bottom: "50px",
        left: 0,
        right: 0,
        textAlign: "center",
    }
        return (
            <div style={ style }>
                <IconButton variant="contained" color={ color } onClick={ onClick }>
                    <ArrowDownwardIcon fontSize="inherit"/>
                </IconButton>
            </div>
        );
}

export default BottomButton;