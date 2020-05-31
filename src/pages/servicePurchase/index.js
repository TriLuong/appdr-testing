import React from "react";
import Tabs from "../../components/servicePurchase/tabs";
import CouponItem from "../../components/servicePurchase/couponItem";
import dataCoupon from "../../mock/dataCoupon";

const TABS = [
  { id: 1, label: "추천" },
  { id: 2, label: "시간제 쿠폰" },
];

const ServicePurchase = () => {
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
          dataCoupon.map((item) => <CouponItem data={item} />)}
      </div>
    </div>
  );
};

export default ServicePurchase;
