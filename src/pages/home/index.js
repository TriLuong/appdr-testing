import React from "react";
import ProcessItem from "../../components/home/processItem";
import Tabs from "../../components/home/tabs";
import Procedure from "../../components/home/procedure";

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

      <div className="container-tabs">
        <Tabs tabs={TABS} />
      </div>

      <div className="section">
        <Procedure />
      </div>
    </div>
  );
};
export default Home;
