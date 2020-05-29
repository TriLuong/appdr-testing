import React from "react";
import Sidebar from "./sidebar";
import { withRouter } from "react-router-dom";

const Layout = (props) => {
  return (
    <div className="container-app">
      <Sidebar />
      <main className="main">{props.children}</main>
    </div>
  );
};

export default withRouter(Layout);
