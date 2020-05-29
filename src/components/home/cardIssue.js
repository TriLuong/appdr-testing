import React from "react";

const CardIssues = ({ data }) => {
  return (
    <div>
      {data.map((item) => (
        <div className="container-card-issue" key={`issue-${item.id}`}>
          <div
            className={`d-flex justify-content-end align-items-center ${
              item.isApproved ? "" : "invisible"
            }`}
          >
            <p className="text-status highlight mr-2 line-height-0">
              개발자 배정
            </p>
            <div
              className="status-indicator"
              style={{
                backgroundColor: item.isAssigned
                  ? "var(--vibrant-green)"
                  : "var(--greyish-two)",
              }}
            />
          </div>

          <div className="card-issue">
            <div className="d-flex justify-content-between align-items-center flex-grow-1">
              <div className="d-flex justify-content-start align-items-center">
                <div className="container-issue-number">
                  <p className="issue-number">{`Issue, ${item.id}`}</p>
                </div>
                <p className="issue-name ml-3">{item.name}</p>
              </div>
              <div className="d-flex justify-content-center align-items-center pr-4">
                <p
                  className={`text-time highlight pr-4 line-height-0 ${
                    item.isApproved ? "" : "invisible"
                  }`}
                >
                  {item.date}
                </p>
                <p className="issue-name highlight border-left pl-4">32H</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardIssues;
