import React from "react";
import Menu from "../components/Menu";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <Menu />
      <Outlet />
    </div>
  );
};

export default MainLayout;
