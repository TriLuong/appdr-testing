import React, { useState } from "react";
import Tabs from "../../components/servicePurchase/tabs";
import CouponItem from "../../components/servicePurchase/couponItem";
import dataCoupon from "../../mock/dataCoupon";
import path from "../app/path";
import Popup from "../../components/common/popup";

const TABS = [
  { id: 1, label: "추천" },
  { id: 2, label: "시간제 쿠폰" },
];

const ServicePurchase = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const onBuy = (hasInfo) => {
    if (hasInfo) {
      props.history.push(path.orderAndPayment);
    } else {
      toggle();
    }
  };

  const onBtnLeft = () => {
    props.history.push(path.companyInfo);
    toggle();
  };
  return (
    <div className="container-service-purchase border-right border-left">
      <h2 className="title">서비스 구매</h2>
      <Tabs tabs={TABS} className="mt-5" disabledTab={1} />

      <div className="d-flex justify-content-between border-bottom container-banner">
        <div className="banner-left">
          <h3 className="banner-title">앱닥터 시간제 쿠폰 서비스</h3>
          <p className="banner-content">
            앱닥터만의 새로운 개발 서비스로 시간을 쿠폰처럼 구매하고, 개발에
            필요한 시간만큼 소진하는 합리적 서비스를 경험해보세요.
          </p>
        </div>
        <button className="btn banner-button">
          <p className="btn-text">배너영역</p>
        </button>
      </div>

      <div className="section-coupon">
        {dataCoupon.length !== 0 &&
          dataCoupon.map((item) => <CouponItem data={item} onBuy={onBuy} />)}
      </div>
      <Popup
        isOpen={isOpen}
        toggle={toggle}
        title="쿠폰 구매"
        textBtnLeft="확인"
        textBtnRight="취소"
        onBtnLeft={onBtnLeft}
        onBtnRight={toggle}
      >
        <div>
          회사정보를 입력하지 않았습니다. 정보수정 >회사정보에 회사정보를
          업데이트 해주세요.
          <a href={path.companyInfo}>정보수정 >회사정보</a>
        </div>
      </Popup>
    </div>
  );
};

export default ServicePurchase;
