import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { createMuiTheme, CssBaseline } from '@material-ui/core';
import { ThemeProvider } from "@material-ui/core"
import SpoqaHanSans from "typeface-spoqa-han-sans"

import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import ReactFullpage from '@fullpage/react-fullpage';

import IntroSection from './Sections/IntroSection';
import ManagementSection from './Sections/ManagementSection';
import AnalysisSection from './Sections/AnalysisSection';
import EasySection from './Sections/EasySection';
import PointsSection from './Sections/PointsSection';
import FeaturesSection from './Sections/FeaturesSection';
import CaseSection from './Sections/CaseSection';
import EffectiveSection from './Sections/EffectiveSection';
import AlmightyInquire from './Sections/AlmightyInquire';

import almightydrPageStyle from "assets/jss/material-kit-react/views/almightydrPage.jsx";

import logoUrl from '../../assets/ico/logo.svg';

import './fullpage.css';

const dashboardRoutes = [];

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Spoqa Han Sans, Helvetica, Arial, sans-serif',
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [SpoqaHanSans],
      },
    },
  },
  palette: {
    primary: {
      main: '#64359A',
    },
    secondary: {
      main: '#11cb5f',
    },
  },

});

theme.typography.h1 = {
  fontSize: '32px',
  [theme.breakpoints.up(768)]: {
    fontSize: '80px',
  }
}
theme.typography.h2 = {
  fontSize: '32px',
  fontWeight: "lighter",
  [theme.breakpoints.up(768)]: {
    fontSize: '48px',
  }
}
theme.typography.h3 = {
  fontSize: '18px',
  fontWeight: "lighter",
  lineHeight: "2em",
  [theme.breakpoints.up(768)]: {
    fontSize: '36px',
  }
}
theme.typography.h4 = {
  fontSize: '14px',
  fontWeight: "lighter",
  [theme.breakpoints.up(768)]: {
    fontSize: '24px',
  }
}



class AlmightydrPage extends React.Component {

  render(){
    const { classes, ...rest } = this.props;

    return(
      <ThemeProvider theme={theme}>
      <CssBaseline />
  
    <div className={classes.root}>
        <Header
          color="transparent"
          routes={dashboardRoutes}
          brand="올마이티 닥터"
          logo={logoUrl}
          rightLinks={<HeaderLinks />}
          fixed
          {...rest}
        />

      <ReactFullpage
      //fullpage options
      licenseKey = {'YOUR_KEY_HERE'}
      scrollingSpeed = {1000} /* Options here */
      navigation
      sectionsColor={[
        "#64359a", "#64359a", "#64359a", "#64359a", "#64359a", 
        "#64359a", "#64359a", "#64359a", "#64359a", "#64359a", 
        "#64359a", "#FFFFFF", "#64359a", "#64359a"]}
      responsive={768}
  
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section">
              <IntroSection fullpageApi={fullpageApi}/>
            </div>
            <div className="section">
              <ManagementSection fullpageApi={fullpageApi}/>
            </div>
            <PointsSection/>
            <div className="section">
              <AnalysisSection fullpageApi={ fullpageApi }/>
            </div>
            <div className="section">
              <EasySection fullpageApi={ fullpageApi }/>
            </div>
            <div className="section">
              <CaseSection fullpageApi={ fullpageApi }/>
            </div>
            <div className="section">
              <FeaturesSection/>
            </div>
            <div className="section">
              <EffectiveSection fullpageApi={ fullpageApi }/>
            </div>
            <div className="section">
              <AlmightyInquire/>
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  </div>
  </ThemeProvider>
    )

  }
  }

export default withStyles(almightydrPageStyle)(AlmightydrPage);