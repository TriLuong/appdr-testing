import React from "react";

const ProcessItem = ({ title, time, color, percent }) => {
  return (
    <div className="process-item">
      <p className="process-label">{title}</p>
      <p className="process-time" style={{ color: color }}>
        {time}
      </p>
      <div className="process-bar">
        <div
          className="process-bar process-value"
          style={{ backgroundColor: color, flexBasis: percent }}
        ></div>
      </div>
    </div>
  );
};
export default ProcessItem;
