import React, { useState } from "react";
import { images } from "assets";
import path from "pages/app/path";

import {
  ProcessItem,
  Tabs,
  Procedure,
  CardIssues,
  IssueRequest,
} from "components/home";

import { Card, ShowMore, CardArticle, Popup } from "components/common";

import { dataIssues, dataIssueRequest } from "mock";

const TABS = [
  { id: 1, label: "시간제 쿠폰 서비스" },
  { id: 2, label: "월 후불제" },
  { id: 3, label: "프로젝트" },
];

const Home = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const onOrder = () => {
    console.log("onOrder");
    props.history.push(path.orderAndPayment);
    togglePopup();
  };

  const onService = () => {
    props.history.push(path.purchase);
    togglePopup();
  };

  const onShowMoreRequest = () => {
    props.history.push(path.requestStatus);
  };

  const onDetailIssue = (id) => {
    props.history.push(`/issue/${id}`);
  };

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

      <div className="d-flex justify-content-between section">
        <Card
          className="flex-grow-1 mr-2"
          title="승인 대기 중인 이슈 5건"
          headerRight={
            <button
              className="btn btn-popup align-self-center"
              onClick={togglePopup}
            >
              <p className="btn-popup-text">승인하러 가기</p>
            </button>
          }
        >
          <CardIssues data={dataIssues.issuesPending} />
        </Card>
        <Card className="flex-grow-1 ml-2" title="승인 대기 중인 이슈 14건">
          <CardIssues data={dataIssues.issuesApprove} />
        </Card>
      </div>

      <Card
        className="section"
        title="최근 문의 / 요청 현황"
        headerRight={<ShowMore onShowMore={onShowMoreRequest} />}
      >
        {dataIssueRequest.length !== 0 &&
          dataIssueRequest.map((item) => (
            <IssueRequest
              key={`request-issue-${item.id}`}
              data={item}
              onDetail={onDetailIssue}
            />
          ))}
      </Card>

      <Card title="앱닥터 소식" className="section">
        <div className="row">
          <div className="col-md-6">
            <CardArticle
              thumb={images.thumb}
              thumbWidth="250px"
              thumbHeight="250px"
              title="앱닥터 허석균 대표, 김빛나 본부장 [아산나눔재단/MARU180]
                  인터뷰 소식!!"
              content="안녕하세요. 앱닥터 입니다. 오늘 알려드릴 소식은
                  아산나눔재단/MARU180에서 진행한 인터뷰 소식입니다. 이번
                  인터뷰의 주인공은 바로 앱닥터의 허석균 대표와 김빛나
                  본부장입니다. MARU180의 새 식구가 된 것을 격하게 환영해 주셔서
                  진심으로 감사한 자리였는데…"
              isShowMore
            />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-between">
            <CardArticle
              thumb={images.thumb2}
              thumbWidth="120px"
              thumbHeight="120px"
              title="앱닥터, 앱/웹 유지 보수 재계약 안하신 대표님들 주목~!"
              content="“텍스트 하나만 수정하고 싶은데”, “이미지 하나 더 추가하고 싶은데” “텍스트 하나만 수정하고 싶은데”, “이미지 하나 더 추가하고 싶은데”…"
            />
            <CardArticle
              thumb={images.thumb2}
              thumbWidth="120px"
              thumbHeight="120px"
              title="앱닥터, 앱/웹 유지 보수 재계약 안하신 대표님들 주목~!"
              content="“텍스트 하나만 수정하고 싶은데”, “이미지 하나 더 추가하고 싶은데” “텍스트 하나만 수정하고 싶은데”, “이미지 하나 더 추가하고 싶은데”…"
            />
          </div>
        </div>
      </Card>
      <Popup
        isOpen={isOpen}
        toggle={togglePopup}
        title="쿠폰 구매"
        textBtnLeft="시간제 쿠폰 구매하기"
        textBtnRight="30 시간만 구매하기"
        onBtnLeft={onService}
        onBtnRight={onOrder}
      >
        <div>
          승인하기 위해 시간이 부족해 시간 구매가 필요합니다. 원하시는
          구매형태를 선택해주세요
        </div>
      </Popup>
    </div>
  );
};
export default Home;
