import React, { useEffect } from "react";
import Sidebar from "./sidebar";
import { withRouter } from "react-router-dom";
import path from "../pages/app/path";

const Layout = (props) => {
  useEffect(() => {
    const widthSidebar = document.getElementById("sidebar").offsetWidth;

    document.getElementById("main").style.marginLeft = `${widthSidebar}px`;
  }, [window.screen.width]);
  return (
    <div
      className="container-app"
      style={{
        backgroundColor:
          props.location.pathname === path.home
            ? "var(--white-three)"
            : "var(--white-two)",
      }}
    >
      <Sidebar />
      <main id="main">{props.children}</main>
    </div>
  );
};

export default withRouter(Layout);
