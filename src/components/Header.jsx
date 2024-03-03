import React from "react";
import logo from "../assets/logo.png";
import { GoSearch } from "react-icons/go";
import { IoIosNotificationsOutline } from "react-icons/io";

const Header = () => {
  return (
    <header className=" bg-white w-full h-[61px] flex justify-between items-center px-[20px] py-[8px] lg:px-[42px] lg:py-[16px]">
      <img
        className=" w-[100px] lg:w-[166px] lg:h-[29px] h-[20px] "
        src={logo}
        alt="logo"
      />

      <div className="hidden w-[910px] h-[40px] lg:flex gap-2 items-center border p-2  rounded-md">
        <GoSearch size={20} />
        <input
          className=" w-full outline-none border-none placeholder:font-normal placeholder:text-sm placeholder:text-gray-400 "
          placeholder="Type to search"
          type="text"
          name="search"
          id="search"
        />
      </div>

      <div className=" flex items-center gap-3 lg:gap-5">
        <div className=" hidden lg:block text-[#3F3F46]">
          <IoIosNotificationsOutline size={25} />
        </div>

        <div>
          <h3 className=" text-sm font-semibold">David Okunlola</h3>
          <p className=" text-gray-600 -mt-1 text-xs font-medium capitalize">
            Super admin
          </p>
        </div>

        <img
          src="https://media.istockphoto.com/id/1355110818/photo/studio-shot-of-a-handsome-and-happy-young-man-posing-against-a-grey-background.jpg?s=612x612&w=0&k=20&c=T39jUOOjC8H-Op0cfd-uiNXk1a2XBn1sXkQbKIWwY7E="
          alt="profile-pic"
          className="lg:w-[36px] lg:h-[36px] w-[26px] h-[25px] rounded-full object-cover"
        />
      </div>
    </header>
  );
};

export default Header;
