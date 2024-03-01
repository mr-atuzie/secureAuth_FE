import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Siderbar from "./Siderbar";

const DashboardLayout = () => {
  return (
    <div className=" w-full  bg-green-900    ">
      <Header />
      <div className=" flex h-full  bg-[#FAFAFB]   ">
        <div className=" w-[20%]  h  static left-0 bg-[#FAFAFB]   ">
          <Siderbar />
        </div>

        <div className=" w-[80%]    py-5    ">
          <div className=" w-[90%] mx-auto">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
