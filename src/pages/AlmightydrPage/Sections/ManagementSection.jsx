import React from 'react'
import SectionType3 from '../../../components/Sections/SectionType3';
import Typography from '@material-ui/core/Typography';
import Emphasized from '../../../components/Titles/Emphasized';
import Underline from '../../../components/Titles/Underline';
import Keyword from '../../../components/Titles/Keyword';

function ManagementSection(props) {
    const {fullpageApi} = props;
    return (
        <SectionType3 
        topNode={
          <Typography variant="h3">
            <Keyword>마케팅</Keyword>을 통한 <Underline>병원 유입 경로 분석</Underline>은 물론 <br/>
            <Underline>상담, 예약, 내원, 결제</Underline> 그리고 <Keyword>수술 후 관리까지</Keyword>
          </Typography>
        } 
        bottomNode={
          <>
            <Typography variant="h3">병원 고객 프로세스를 한번에 관리하는</Typography>
            <Emphasized color="#64359A" >유일한 병원 매니지먼트 솔루션</Emphasized>
          </>
        }
        buttonCaption="어떻게 가능하죠?"
        buttonColor="primary"
        fullpageApi={ fullpageApi } 
      />

    )
}

export default ManagementSection
