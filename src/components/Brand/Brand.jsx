import { Typography } from '@material-ui/core'
import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

import brandStyle from '../../assets/jss/material-kit-react/components/brandStyle';

function Brand({...props}) {
    const {brand, logo, classes} = props;
    return (
        <a href="/" className={classes.root} style={{backgroundImage: "url("+logo+")", backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}><Typography variant="srOnly">{brand}</Typography></a>
    )
}

export default withStyles(brandStyle)(Brand)