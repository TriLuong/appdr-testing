import React from "react";

const Card = ({ title, children, headerRight, className }) => {
  return (
    <div className={`container-card ${className || ""}`}>
      <div className="card-header pb-0 justify-content-between">
        <p className="card-label">{title}</p>
        {headerRight}
      </div>
      <div className="card-content">{children}</div>
    </div>
  );
};

export default Card;
