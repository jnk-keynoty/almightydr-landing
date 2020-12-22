import React from 'react'
import SectionTypeInput from '../../../components/Sections/SectionTypeInput';
import Typography from '@material-ui/core/Typography';

function AlmightyInquire(props) {
    return (
        <SectionTypeInput
        topNode={
            <div>
                <Typography variant="h1" component="h3" gutterBottom>
                    <b>병원 운영의 시작과 끝</b>
                </Typography>
                <Typography variant="h4" gutterBottom>전지 전능한 병원 관리 솔루션<br/>
                    <b>올마이티닥터</b>
                </Typography>
            </div>
        }
        bottomBgColor="#FFFFFF"
        bottomTextColor="rgba(0, 0, 0, 0.87)"
        buttonCaption="문의 하기"
        buttonColor="primary"
      />

    )
}

export default AlmightyInquire;
