import React from "react";
import ProcessItem from "../../components/home/processItem";
import Tabs from "../../components/home/tabs";
import Procedure from "../../components/home/procedure";
import Card from "../../components/common/card";

const TABS = [
  { id: 1, label: "시간제 쿠폰 서비스" },
  { id: 2, label: "월 후불제" },
  { id: 3, label: "프로젝트" },
];

const Home = () => {
  return (
    <div className="container-home">
      <div className="container-process">
        <p className="process-title">서비스 진행 현황</p>

        <div className="process-items">
          <ProcessItem
            title="진행 중"
            time="28 시간"
            color="var(--off-blue)"
            percent="10%"
          />
          <ProcessItem
            title="전체 완료"
            time="456 시간"
            color="var(--yellow-orange)"
            percent="90%"
          />
          <ProcessItem
            title="잔여 시간"
            time="12 시간"
            color="var(--topaz)"
            percent="5%"
          />
        </div>
      </div>

      <div className="notes-coupon">
        <p>쿠폰 유효기간( ~ 2020년 3월 10일)이 얼마 남지 않았습니다.</p>
      </div>

      <div className="container-tabs section">
        <Tabs tabs={TABS} />
      </div>

      <div className="section">
        <Procedure />
      </div>

      <div className="section">
        <Card
          title="최근 문의 / 요청 현황"
          headerRight={
            <div className="d-flex">
              <p className="sub-text">더보기</p>
              <div>></div>
            </div>
          }
        >
          <div className="row">
            <p className="sub-text col-md-8">
              저희가 사용중인 앱을 수정하고자 하는데 견적을 알고 싶습니다.
            </p>
            <p className="sub-text col-md-2 text-right">2020.01.13 </p>
            <p className="sub-text col-md-2 text-center">담당자 확인중</p>
          </div>
          <div className="row">
            <p className="sub-text col-md-8">
              앱닥터 수정사항 요청하고 싶습니다. 미팅도 가능한가요? 앱닥터
            </p>
            <p className="sub-text col-md-2 text-right">2020.01.10</p>
            <p className="sub-text col-md-2 text-center"> 답변 완료</p>
          </div>
          <div className="row">
            <p className="sub-text col-md-8">서비스 어떻게 이용하는 건가요?</p>
            <p className="sub-text col-md-2 text-right">2020.01.01</p>
            <p className="sub-text col-md-2 text-center">답변 완료</p>
          </div>
        </Card>
      </div>
    </div>
  );
};
export default Home;
