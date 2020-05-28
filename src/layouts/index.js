import React from "react";
import Sidebar from "../components/sidebar";

const Layout = () => {
  return (
    <div className="container-app">
      <Sidebar />
      <main>
        <h1>CONTENT</h1>
      </main>
    </div>
  );
};

export default Layout;
