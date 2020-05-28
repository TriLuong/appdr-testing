import React from "react";

const Card = ({ title, children, headerRight }) => {
  return (
    <div className="container-card">
      <div className="card-header pb-0 justify-content-between">
        <p className="card-title">{title}</p>
        {headerRight}
      </div>
      <div className="card-content">{children}</div>
    </div>
  );
};

export default Card;
