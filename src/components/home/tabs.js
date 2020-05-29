import React, { useState } from "react";

const Tabs = ({ tabs }) => {
  const [tabSelected, setTabSelected] = useState(tabs[0].id);
  return (
    <div className="d-flex justify-content-between align-items-center tabs">
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
