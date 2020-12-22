import React from 'react';
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import { withStyles } from '@material-ui/styles';

import SectionWrapper from '../../components/SectionWrapper/SectionWrapper'
import SectionType1 from '../../components/Sections/SectionType1';
import SectionType2 from '../../components/Sections/SectionType2';

import { ReactComponent as Search } from '../../assets/ico/search.inline.svg'
import logoUrl from '../../assets/ico/logo.svg'

const dashboardRoutes = [];

const styles = theme => ({
  root: {
    color: "#FFF",
  },

})

class AlmightydrPage extends React.Component {


  render(){
    const { classes, ...rest } = this.props;

    return(
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
        <SectionWrapper>
            <SectionType1 buttonCaption = {" 아래로 가기 "}>
                <h1>병원 인식 부터<br/>내원 그리고 결제까지</h1>
                <h3>전지 전능한 병원 관리 솔루션</h3>
                <h3>올마이티닥터</h3>
            </SectionType1>
        </SectionWrapper>
        <SectionWrapper>
            <SectionType2 iconPoints = {[
            {title: "데이터베이스 자동 저장", icon: Search,},
            {title: "데이터 재가공 불필요", icon: Search},
            {title: "정확한 광고 효율 분석", icon: Search},
            ]}>
                <h3>MRM STEP 1.</h3>
                <h2>유입 및 DB 관리</h2>
                <p>광고로 유입된 고객 DB를<br/>
                    따로 입력하거나 관리할 필요가 없어요!<br/><br/>
                    올닥MRM은 전화와 홈페이지로 유입된<br/>
                    고객의 모든 DB와 경로/키워드 등을 자동으로<br/>
                    시스템에 저장합니다.
                </p>
            </SectionType2>
        </SectionWrapper>

  </div>
    )

  }
  }

export default withStyles(styles)(AlmightydrPage);