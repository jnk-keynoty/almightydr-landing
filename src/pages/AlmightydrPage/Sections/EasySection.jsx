import React from 'react'
import SectionType3 from '../../../components/Sections/SectionType3';
import Typography from '@material-ui/core/Typography';
import Underline from '../../../components/Titles/Underline';
import Keyword from '../../../components/Titles/Keyword';

function EasySection(props) {
    const {fullpageApi} = props;
    return (
        <SectionType3 
        topNode={
          <Typography variant="h3">
            <Keyword>전지 전능</Keyword> 한 올닥MRM 기능 때문에<br/>
            도입이나 사용이 어렵다고 생각하실 수 있죠.
          </Typography>
        } 
        bottomNode={
            <Typography variant="h3">
                <Underline>하지만, 걱정할 필요가 없습니다!</Underline><br/>
                MRM 시스템이 많은 부분을 <Keyword>스스로 처리하니까요.</Keyword>
            </Typography>
        }
        bottomBgColor="#FFFFFF"
        bottomTextColor="rgba(0, 0, 0, 0.87)"
        buttonCaption="어떻게 가능하죠?"
        buttonColor="default"
        fullpageApi={ fullpageApi } 
      />

    )
}

export default EasySection
