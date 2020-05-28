import React from "react";
import Sidebar from "../components/sidebar";

const Layout = (props) => {
  return (
    <div className="container-app">
      <Sidebar />
      <main className="main">
        <h1>{props.children}</h1>
      </main>
    </div>
  );
};

export default Layout;
