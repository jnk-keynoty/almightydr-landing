import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import theme from '../../theme';
import { ThemeProvider } from "@material-ui/core/styles"

import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import ReactFullpage from '@fullpage/react-fullpage';

import CallcenterInquire from './Sections/CallcenterInquire';

import callcenterPageStyle from "assets/jss/material-kit-react/views/callcenterPage.jsx";

import logoUrl from '../../assets/ico/logo.svg';
import IntroSection from './Sections/IntroSection';
import BestSection from './Sections/BestSection';
import PointsSection from './Sections/PointsSection';

const dashboardRoutes = [];

class CallcenterPage extends React.Component {  

  componentDidMount() {
    const buttonToLast = document.querySelector('#toLastpage');
    const indexOfLastpage = document.querySelectorAll('.section').length;
    buttonToLast.onclick = () => {window.fullpage_api.silentMoveTo(indexOfLastpage)}
  }
  
  render(){
    const { classes, ...rest } = this.props;

    return(
    <ThemeProvider theme={ theme }>
      
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
      licenseKey = {'20EC16F6-E8624CD0-881BCFE9-F866BC2B'}
      scrollingSpeed = {1000} /* Options here */
      navigation
      sectionsColor={[
        "#FFEF81", "#FFEF81", "#FFEF81", "#FFEF81", "#FFEF81", 
        "#FFEF81"]}
      responsive={768}
      afterLoad= {function(origin, destination, direction){
        const lightPages = [0, 1, 5];
        if(lightPages.includes(destination.index)){
          document.body.classList.add("light-page");
        }
        else {
          document.body.classList.remove("light-page");
        }
      }}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section">
                <IntroSection />
            </div>
            <div className="section">
                <BestSection />
            </div>
            <PointsSection />
            <div className="section">
              <CallcenterInquire/>
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

export default withStyles(callcenterPageStyle)(CallcenterPage);