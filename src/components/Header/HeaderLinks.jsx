/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "gatsby";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// React icons
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

// core components
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

function HeaderLinks({ ...props }) {
  const { 
      classes,
    } = props;
  return (
    <List className={`${classes.list} head-link-color`}>
      <ListItem className={classes.listItem}>
      <Button
          href="/"
          color="transparent"
          className={classes.navLink}
        >
          올마이티 닥터
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/callcenter"
          color="transparent"
          className={classes.navLink}
        >
          콜센터
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
      <Button
          id="toLastpage"
          color="transparent"
          className={classes.navLink}
        >
          문의하기
        </Button>
      </ListItem>
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
