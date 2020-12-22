import React from 'react'
import SectionType3 from '../../../components/Sections/SectionType3';
import Typography from '@material-ui/core/Typography';
import Keyword from '../../../components/Titles/Keyword';
import Underline from '../../../components/Titles/Underline';

function CaseSection(props) {
    const {fullpageApi} = props;
    return (
        <SectionType3 
        topNode={
          <Typography variant="h3">
            프랜차이즈와 개인 병원 열두곳에서 <br/>
            <Keyword>이미 올닥MRM을 사용하고 있습니다</Keyword>
          </Typography>
        } 
        bottomNode={
          <Typography variant="h3">
            MRM을 경험한 원장님들의<br/>
            <Underline>이야기를 직접 들어보세요.</Underline>
          </Typography>
        }
        fullpageApi={ fullpageApi }
        topBgColor="#FFFFFF"
        topTextColor="rgba(0, 0, 0, 0.87)"
        bottomBgColor="#FFFFFF"
        bottomTextColor="rgba(0, 0, 0, 0.87)"
        buttonColor="default"
      />
      )
}

export default CaseSection;
