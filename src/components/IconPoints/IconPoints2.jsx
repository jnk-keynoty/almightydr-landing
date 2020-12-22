import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { SvgIcon } from '@material-ui/core';
import { useMediaQuery } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    pointContainer : {
        margin: "15px auto",
        textAlign: "center",
        wordBreak: "keep-all",
        '& h4': {
            fontWeight: "bold",
        },
        color: props => props.color,
    },
    iconContainer : {
        borderRadius: "50%",
        color: props => props.iconColor,
        lineHeight: "1em",
        backgroundColor: "#fcfcfc",
        boxShadow:  "5px 5px 5px #d9d9d9, -5px -5px 5px #ffffff",
    },
    [theme.breakpoints.down(576)]: {
        pointContainer : {
            margin: "10px auto",
            padding: "0 15px",
            '& h4': {
                fontSize: "16px",
                textAlign: "left",
            }
        },
        iconContainer : {
            padding: "10px",
            width: "80px",
            height: "80px",
            marginRight: "10px",
            fontSize: "60px",
        },    
    },
    [theme.breakpoints.up(576)]: {
        pointContainer : {
            margin: "0 auto",
            '& h4': {
                fontSize: "14px",
            }
        },
        iconContainer : {
            padding: "10px",
            width: "80px",
            height: "80px",
            fontSize: "60px",
        },    
    },
    [theme.breakpoints.up(768)]: {
        pointContainer : {
            margin: "0 auto",
            '& h4': {
                fontSize: "14px",
            }
        },
        iconContainer : {
            padding: "15px",
            width: "100px",
            height: "100px",
            fontSize: "70px",
        },    
    },
    [theme.breakpoints.up(992)]: {
        pointContainer : {
            maxWidth: "150px",
            margin: "10px auto 0",
            '& h4': {
                fontSize: "16px",
            }
        },
    },
    [theme.breakpoints.up(1200)]: {
        pointContainer : {
            maxWidth: "190px",
            margin: "15px auto",
            '& h4': {
                fontSize: "20px",
            }
        },
        iconContainer : {
            padding: "22px",
            width: "140px",
            height: "140px",
            fontSize: "96px",
            margin: "0 auto"
        },    
    },

}))

function IconPoints2({ ...props }) {
    const { icon, title } = props;
    const addClasses = useStyles(props);
    const smScreen = useMediaQuery(theme => theme.breakpoints.up(576));

    return (
        <Grid container className={addClasses.pointContainer} direction={smScreen?"column":"row"} alignItems="center" justify="flex-start" wrap="nowrap">
            <Grid item>
                <div className={addClasses.iconContainer}><SvgIcon component={icon} fontSize="inherit"/></div>
            </Grid>
            <Grid item>
                <h4>{ title }</h4>
            </Grid>
        </Grid>
    );
}

export default IconPoints2;