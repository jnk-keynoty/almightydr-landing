import React from 'react'
import SectionType3 from '../../../components/Sections/SectionType3';
import Typography from '@material-ui/core/Typography';
import Emphasized from '../../../components/Titles/Emphasized';
import Keyword from '../../../components/Titles/Keyword';

function BestSection(props) {
    const {fullpageApi} = props;
    return (
        <SectionType3 
        topNode={
          <Typography variant="h3">
            <Keyword>올마이티닥터</Keyword>를 도입할 예정이신가요?<br/>
              콜 시도 횟수, 통화 시간, 링타임 전환률 등
          </Typography>
        } 
        bottomNode={
          <>
            <Typography variant="h3">MRM의 콜 데이터 분석에 의한</Typography>
            <Emphasized>최고 효율의 콜 센터도 함께 도입해보세요</Emphasized>
          </>
        }
        buttonCaption="무엇이 다르죠?"
        buttonColor="danger"
        fullpageApi={ fullpageApi } 
      />

    )
}

export default BestSection
