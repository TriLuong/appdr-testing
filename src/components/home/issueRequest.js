import React from "react";

const IssueRequest = ({ data }) => {
  return (
    <div className="row">
      <p className="sub-text col-md-10">{data.name}</p>
      <p className="text-time col-md-1 text-right">{data.time}</p>
      <p className="sub-text col-md-1 text-center">{data.status}</p>
    </div>
  );
};
export default IssueRequest;
