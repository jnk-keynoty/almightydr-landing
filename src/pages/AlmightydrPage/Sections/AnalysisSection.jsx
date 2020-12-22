import React from 'react'
import SectionType3 from '../../../components/Sections/SectionType3';
import Typography from '@material-ui/core/Typography';
import Keyword from '../../../components/Titles/Keyword';

function AnalysisSection(props) {
    const {fullpageApi} = props;
    return (
      <SectionType3 
      topNode={
        <Typography variant="h3">
          한 명의 고객을 기준으로 <br/>
          <b>병원 인지</b>부터 상담, 내원, 결제 그리고 <b>수술</b>까지.
        </Typography>
      } 
      bottomNode={
        <Typography variant="h3">
            모든 프로세스를 시스템이<br/>
            <Keyword>자동으로 정리하고 분석합니다.</Keyword>
        </Typography>
      }
      topBgColor="linear-gradient(#64359A, #7C51AE);"
      buttonCaption="사용법이 어려운 것 아닌가요?"
      buttonColor="primary"
      fullpageApi={ fullpageApi } 
    />


    )
}

export default AnalysisSection
