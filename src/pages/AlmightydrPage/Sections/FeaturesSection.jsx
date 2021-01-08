import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles';

import IconPoints2 from '../../../components/IconPoints/IconPoints2';
import Typography from '@material-ui/core/Typography';

import { 
    BillIcon, CardIcon,
    DragIcon,
    GoalIcon, HeartIcon, IdIcon, MailIcon, 
    NstopIcon, Report01Icon, Report02Icon, Report03Icon, 
    Report04Icon, StorageIcon, SyncIcon,
  } from '../../../components/Icons/Icons'

import featuresSectionStyle from '../../../assets/jss/material-kit-react/views/almightydrSections/featuresSectionStyle';

const iconPoints = [
    {title: "유입 고객 DB 자동 저장", icon: SyncIcon},
    {title: "고객 DB별 유입 채널 및 키워드 자동 저장", icon: StorageIcon},
    {title: "고객 DB별 상담/내원/진료 히스토리 저장", icon: IdIcon},
    {title: "논스톱 고객 내원 예약", icon: NstopIcon},
    {title: "드래그앤드랍 예약 변경", icon: DragIcon},
    {title: "예약 안내 문자(또는 알림톡) 자동발송", icon: MailIcon},
    {title: "카드 단말기 결제 정보 연동", icon: CardIcon},
    {title: "자동 계산 결제/청구 시스템", icon: BillIcon},
    {title: "의료비서 올프레도 연동", icon: IdIcon},
    {title: "수술 후 관리 콘텐츠 제공", icon: HeartIcon},
    {title: "유입대비 DB 생성률 리포트 제공", icon: Report04Icon},
    {title: "콜 센터 효율성 리포트 제공", icon: Report01Icon},
    {title: "상담 성공률 리포트 제공", icon: Report02Icon},
    {title: "월별/기간별 총괄 매출 리포트", icon: Report03Icon},
    {title: "월별/기간별 목표 설정 및 분석 시스템 제공", icon: GoalIcon},
]
function FeaturesSection(props) {
    const { classes } = props;
    return (
        <div className={`${classes.root} ${classes.container}`}>
            <Typography variant="h3" className={classes.title}>올마이티닥터 MRM<br/><b>주요 기능</b></Typography>
            <div className={classes.items}>
                {iconPoints.map((prop, key) => {
                    return(
                        <div item key={prop.title} className={classes.item}>
                            <IconPoints2 title={prop.title} icon={prop.icon} iconColor="#522F93" color="rgba(0, 0, 0, 0.87)"/>
                        </div>     
                    )
                })}
            </div>
        </div>
    )
}

export default withStyles(featuresSectionStyle)(FeaturesSection);
