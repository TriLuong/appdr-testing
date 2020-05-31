import React from "react";
import { icons } from "assets";

const ShowMore = ({ onShowMore }) => {
  return (
    <div
      className="d-flex justify-content-center align-items-center container-show-more"
      onClick={onShowMore || null}
    >
      <p className="sub-text mr-2">더보기</p>
      <div className="icon-show-more">
        <img src={icons.arrowRight} alt="show-more" />
      </div>
    </div>
  );
};

export default ShowMore;
