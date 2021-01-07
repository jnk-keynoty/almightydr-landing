import React from 'react'
import SectionType1 from '../../../components/Sections/SectionType1';
import Typography from '@material-ui/core/Typography';
import Emphasized from '../../../components/Titles/Emphasized';

function IntroSection(props) {
    const {fullpageApi} = props;
    return (
        <SectionType1 bgimage = {require("assets/img/bg_callcenter.jpg")} fullpageApi={ fullpageApi } buttonColor = "inherit">
          <Typography variant="h1" component="h2" gutterBottom><b>고객</b>과 마주하는 최접점<br/> 콜센터는 <b>전문가에게</b></Typography>
          <Emphasized color="" >유일한 병원 매니지먼트 솔루션</Emphasized>
          <Typography variant="h3"><b>전문 콜센터</b></Typography>
        </SectionType1>
    )
}

export default IntroSection;
