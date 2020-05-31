import React, { useState } from "react";

const Tabs = ({ tabs, className, disabledTab }) => {
  const [tabSelected, setTabSelected] = useState(
    tabs.find((item) => item.id !== disabledTab).id
  );

  const onChangeTab = (id) => {
    if (disabledTab !== id) {
      setTabSelected(id);
    } else {
      return null;
    }
  };

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
          onClick={() => onChangeTab(tab.id)}
        >
          <p className="tab-label">{tab.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Tabs;
