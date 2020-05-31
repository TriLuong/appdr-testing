import React from "react";

const IssueDetail = (props) => {
  return (
    <div className="h-100 d-flex justify-content-center align-items-start">
      <h1>Issue Detail {props.match.params.id}</h1>
    </div>
  );
};

export default IssueDetail;
