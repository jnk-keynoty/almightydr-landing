import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { SvgIcon } from '@material-ui/core';
import { useMediaQuery } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    pointContainer : {
        width: "140px",
        textAlign: "center",
        wordBreak: "keep-all",
        '& h4': {
            fontWeight: "bold",
        }
    },
    iconContainer : {
        borderRadius: "50%",
        border: "1px solid #fff",
        lineHeight: "1em",
    },
    [theme.breakpoints.down(768)]: {
        pointContainer : {
            width: "100px",
            margin: "0 10px",
            '& h4': {
                fontSize: "16px",
            }
        },
        iconContainer : {
            padding: "15px",
            height: "100px",
            fontSize: "70px",
        },    
    },
    [theme.breakpoints.up(768)]: {
        pointContainer : {
            width: "100px",
            margin: "0 10px",
            '& h4': {
                fontSize: "16px",
            }
        },
        iconContainer : {
            padding: "15px",
            height: "100px",
            fontSize: "70px",
        },    
    },
    [theme.breakpoints.up(992)]: {
        pointContainer : {
            width: "140px",
            margin: "0 20px",
            '& h4': {
                fontSize: "20px",
            }
        },
        iconContainer : {
            padding: "22px",
            height: "140px",
            fontSize: "96px",
        },    
    },

}))

function IconPoints({ ...props }) {
    const { icon, title } = props;
    const addClasses = useStyles();
    const mdScreen = useMediaQuery(theme => theme.breakpoints.up(768));
    const lgScreen = useMediaQuery(theme => theme.breakpoints.up(992));

    return (
        <Grid container className={addClasses.pointContainer} direction={mdScreen||lgScreen?"row":"column"}>
            <Grid item>
                <div className={addClasses.iconContainer}><SvgIcon component={icon} fontSize="inherit"/></div>
            </Grid>
            <Grid item>
                <h4>{ title }</h4>
            </Grid>
        </Grid>
    );
}

export default IconPoints;