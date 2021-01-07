import React from 'react';
import SectionType2 from '../../../components/Sections/SectionType2';

import { 
    BillIcon, CallIcon, CardIcon, ClickIcon,
    Data02Icon, Data03Icon, DbIcon, DefendIcon, DragIcon,
    HeartIcon, HistoryIcon, MailIcon, 
    NeditIcon, Report01Icon, Report02Icon, Report03Icon, 
    StateIcon, SyncIcon,
  } from '../../../components/Icons/Icons'
  
const pointsData = [
    {
      bgimage: require("assets/img/landing-bg1.jpg"),
      bgcolor: "#64359a",
      iconPoints: [
        {title: "데이터베이스 자동 저장", icon: SyncIcon,},
        {title: "데이터 재가공 불필요", icon: NeditIcon},
        {title: "정확한 광고 효율 분석", icon: Data03Icon},
      ],
      preTitle: "MRM STEP 1.",
      title: "유입 및 DB 관리",
      content: <>광고로 유입된 고객 DB를<br/>
        따로 입력하거나 관리할 필요가 없어요!<br/><br/>
        올닥MRM은 전화와 홈페이지로 유입된<br/>
        고객의 모든 DB와 경로/키워드 등을 자동으로<br/>
        시스템에 저장합니다.
      </>
    },
    {
      bgimage: require("assets/img/landing-bg2.jpg"),
      bgcolor: "#64359a",
      iconPoints: [
        {title: "DB 가공으로 인한 유실/유출 방지", icon: DefendIcon,},
        {title: "모든 상담 히스토리 저장", icon: SyncIcon},
        {title: "전문 콜센터 운용*", icon: CallIcon},
      ],
      preTitle: "MRM STEP 2.",
      title: "상담 및 콜",
      content: <>광전화 상담을 위해 유입된 고객 DB를<br/>
        엑셀로 한번 더 가공하거나 정리하고 계신가요?<br/><br/>
        올닥MRM은 유입된 고객 DB를 편리하게 열람하고<br/>
        언제, 누구와 무슨 상담을 했는지 모든 상담 히스토리를<br/>
        통합 저장합니다.
      </>
    },
    {
      bgimage: require("assets/img/landing-bg3.jpg"),
      bgcolor: "#64359a",
      iconPoints: [
        {title: "색상을 통한 환자 상태 구분", icon: StateIcon,},
        {title: "드래그 앤 드랍 편리한 예약 변경", icon: DragIcon},
        {title: "원클릭 환자 정보 확인", icon: ClickIcon},
        {title: "예약 안내 문자 자동 발송", icon: MailIcon},
        {title: "상담/간호 고객 DB 분리", icon: DbIcon},
      ],
      preTitle: "MRM STEP 3.",
      title: "예약 관리",
      content: <>아직도 내원 예약을 위해<br/>
      고객 DB를 CRM에 한번 더 입력하거나<br/>
      예약 확인을 위해 여러 메뉴를 이동하고 계신가요?<br/><br/>
      올닥MRM은 유입 단계부터 생성된 고객 DB로<br/>
      손쉽게 내원 예약을 잡고 드래그앤드랍 방식으로<br/>
      편리하게 예약을 변경할 수 있죠.
      </>
    },
    {
      bgimage: require("assets/img/landing-bg4.jpg"),
      bgcolor: "#64359a",
      iconPoints: [
        {title: "카드 단말기 결제 정보 연동", icon: CardIcon,},
        {title: "자동 계산으로 편리한 청구", icon: BillIcon},
        {title: "한눈에 들어오는 매출 리포트", icon: Report03Icon},
      ],
      preTitle: "MRM STEP 4.",
      title: "결제 및 매출",
      content: <>지난 달 병원의 매출과 부가세, 미수금, 환불금 등<br/>
      모든 결제/매출 자료를 한번에 확인할 수 있으신가요?<br/><br/>
      올닥MRM은 카드 단말기와 결제 시스템을 연동하여<br/>
      병원의 모든 청구 및 결제, 미수금과 환불금까지<br/>
      순매출을 한번에 확인할 수 있죠.
      </>
    },
    {
      bgimage: require("assets/img/landing-bg5.jpg"),
      bgcolor: "#64359a",
      iconPoints: [
        {title: "의료비서 올프레도 연동*", icon: CardIcon,},
        {title: "모든 고객 히스토리 기록", icon: HistoryIcon},
        {title: "수술 후 관리 콘텐츠 제공", icon: HeartIcon},
      ],
      preTitle: "MRM STEP 5.",
      title: "수술 후 고객 관리",
      content: <>각 고객의 DB를 기준으로<br/>
      모든 프로세스가 기록/관리되는 올닥MRM은<br/><br/>
      의료비서 서비스인 올프레도와 연동되어<br/>
      수술 후 주의사항 전달이나 팔로업 예약 등<br/>
      기수술 고객의 관리에도 유리하죠.
      </>
    },
    {
      bgimage: require("assets/img/landing-bg6.jpg"),
      bgcolor: "#64359a",
      iconPoints: [
        {title: "유입부터 결제까지 자동화 분석", icon: Data02Icon,},
        {title: "콜센터 효율성 리포트", icon: Report01Icon},
        {title: "상담 성공률 리포트", icon: Report02Icon},
      ],
      preTitle: "MRM STEP 6.",
      title: "마케팅 및 통계 분석",
      content: <>특정 매체에 사용한 광고비가<br/>
      얼마의 매출을 발생시키고 있을까요?<br/><br/>
      올닥MRM은 DB 전환률, 내원 성공률, 결제 성공률은<br/>
      물론 콜센터의 통화시간, 링타임까지 분석하여<br/>
      매출 감소 요인을 찾고 경영 효율성을 극대화시킵니다.
      </>
    },
  
  ]
  
  export default function PointsSection() {
      return (
          <>
            {pointsData.map((prop) => {
              return (
                <div className="section" key={prop.preTitle}>
                  <SectionType2 data = {prop} />
                </div>
              )
            })}
          </>
      )
  }
  