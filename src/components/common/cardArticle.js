import React from "react";
import ShowMore from "./showMore";

const CardArticle = ({
  thumb,
  thumbWidth,
  thumbHeight,
  title,
  content,
  isShowMore = false,
}) => {
  return (
    <div className="d-flex">
      <div>
        <img
          src={thumb}
          alt="thumb"
          style={{ width: thumbWidth, height: thumbHeight }}
        />
      </div>

      <div className="ml-4 d-flex flex-column justify-content-around">
        <p className="text-label mb-2">{title}</p>
        <p className="sub-text" style={{ lineHeight: 1.57 }}>
          {content}
        </p>
        {isShowMore && (
          <div className="d-flex justify-content-end align-items-center">
            <p className="sub-text mr-2">더보기</p>
            <ShowMore />
          </div>
        )}
      </div>
    </div>
  );
};

export default CardArticle;
