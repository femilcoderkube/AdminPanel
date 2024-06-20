import React from "react";
import SidebarMenu from "../SidebarMenu/SidebarMenu";
import Menu from "../SidebarMenu/Menu";

export default function MainView(props) {
  return (
    <>
      <SidebarMenu />
      <Menu />
      <div className="app-wrapper flex-column flex-row-fluid">
        {props?.children}
      </div>
    </>
  );
}
