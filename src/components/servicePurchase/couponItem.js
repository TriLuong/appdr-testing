import React, { useState } from "react";
import { images } from "../../assets";
import imgCoupon from "../../assets/images/coupon.png";

const styleCoupon = {
  backgroundImage: `url("${imgCoupon}")`,
  width: "235px",
  height: "100px",
};

const Coupondata = ({ className, data, onBuy }) => {
  const [numberCoupon, setCoupon] = useState(1);

  const increaseCoupon = () => {
    setCoupon(numberCoupon + 1);
  };

  const decreaseCoupon = () => {
    if (numberCoupon !== 0) {
      setCoupon(numberCoupon - 1);
    }
  };

  return (
    <div className="container-coupon" key={`coupon-${data.id}`}>
      <div className="coupon" style={styleCoupon}>
        <p className="text-coupon">{data.type}</p>
        <p className="percent-coupon pt-1">{`${data.valueCoupon} 쿠폰`}</p>
      </div>

      <p className="value-coupon">{`${data.value.toLocaleString()} ${
        data.currency
      }`}</p>

      <div className="container-count-coupon">
        <div
          className={`box-coupon adjust-count ${
            data.isChange ? "" : "invisible"
          }`}
          onClick={increaseCoupon}
        >
          <p className="text-adjust">+</p>
        </div>

        <div className="box-coupon border">
          <p className="text-count">{numberCoupon}</p>
        </div>

        <div
          className={`box-coupon adjust-count ${
            data.isChange ? "" : "invisible"
          }`}
          onClick={decreaseCoupon}
        >
          <p className="text-adjust">-</p>
        </div>
      </div>

      <div className="container-buy" onClick={() => onBuy(data.hasInfo)}>
        <p className="text-buy">구매하기</p>
      </div>
      <div className="position-absolute container-note">
        <p className="text-note">
          {`시간당 ${data.costPerHour.toLocaleString()}원 / 유효기간 ${
            data.expired
          } / VAT 별도`}
        </p>
      </div>
    </div>
  );
};
export default Coupondata;
