import React from "react";
import SideBar from "./SideBar";
import Header from "./Header";
import Modules from "./Modules";


function ParentHome() {
  return (
    <div className="parent-home">
      <div className="parent-sidebar">
        <SideBar />
      </div>
      <div className="parent-container">
        <div className="container-header">
          <Header />
        </div>
        <div className="container-module">
          <Modules />
        </div>
      </div>
    </div>
  );
}

export default ParentHome;
