import React from 'react'
import SectionType3 from '../../../components/Sections/SectionType3';
import Typography from '@material-ui/core/Typography';
import Keyword from '../../../components/Titles/Keyword';

function EffectiveSection(props) {
    const {fullpageApi} = props;
    return (
        <SectionType3 
        topNode={
          <Typography variant="h3">
            단순 예약판인 CRM을 넘어 <br/>
            <Keyword>유입과 마케팅 분석 </Keyword>그리고<Keyword> 상담, 내원, 결제까지</Keyword>
          </Typography>
        } 
        bottomNode={
          <Typography variant="h3">
           데이터를 기반으로하는 MRM을 통해<br/>
            <b>병원의 저비용 고효율 운영을 지금 시작해보세요!</b>
          </Typography>
        }
        fullpageApi={ fullpageApi }
        topBgColor="#FFFFFF"
        topTextColor="rgba(0, 0, 0, 0.87)"
        bottomBgColor="#FFFFFF"
        bottomTextColor="rgba(0, 0, 0, 0.87)"
      />
      )
}

export default EffectiveSection;
