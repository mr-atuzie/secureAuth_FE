import React from "react";
import { NavLink } from "react-router-dom";
import { links } from "../data";

const Siderbar = () => {
  return (
    <div className=" w-full h-full lg:my-[70px]">
      {links.map((link, index) => {
        return (
          <NavLink
            key={index}
            to={link.link}
            className={({ isActive }) =>
              isActive
                ? "  text-[#FF5D2E] rounded font-semibold  bg-[#FFEFEA] block w-full"
                : " text-[#8C8C8C]"
            }
          >
            <div className="flex gap-3 w-full  items-center px-6  py-3">
              <div className="  ">{link.text}</div>
              <p className="font-medium text-[13px]  font2  ">{link.head}</p>
            </div>
          </NavLink>
        );
      })}
    </div>
  );
};

export default Siderbar;
