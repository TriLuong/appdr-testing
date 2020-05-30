import React, { useState } from "react";

const Tabs = ({ tabs, className }) => {
  const [tabSelected, setTabSelected] = useState(tabs[1].id);
  return (
    <div
      className={`d-flex justify-content-start align-items-start border-bottom tabs ${
        className || ""
      }`}
    >
      {tabs.map((tab) => (
        <div
          key={`tab-${tab.id}`}
          className={`tab-item btn ${tabSelected === tab.id ? "active" : ""}`}
          onClick={() => setTabSelected(tab.id)}
        >
          <p className="tab-label">{tab.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Tabs;
