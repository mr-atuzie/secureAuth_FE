import React from "react";
import { useNavigate } from "react-router-dom";
import { IoLockClosedOutline } from "react-icons/io5";

const PasswordChange = () => {
  const navigate = useNavigate();
  return (
    <div className=" w-full min-h-screen bg-[#F7F9FC] flex justify-center flex-col  items-center mx-auto ">
      <div className=" w-[90%] lg:w-[620px] h-[300px] bg-white shadow-sm flex justify-center items-center flex-col">
        <div className=" w-[60px] h-[60px] flex justify-center items-center bg-[#FFEFEA] rounded-full">
          <IoLockClosedOutline size={20} className=" text-[#FF5D2E]" />
        </div>
        <h1 className=" text-[20px] lg:text-[24px] font-medium text-center">
          Password changed successfully!
        </h1>
        <p className="text-xs lg:w-[340px] lg:text-base text-[#8C8C8C] text-center">
          Your password has been successfully updated
        </p>

        <button
          onClick={() => navigate("/admin-login")}
          className=" rounded-lg text-center mt-6 text-white bg-[#FF5D2E] w-[90%] lg:mx-0 lg:w-[400px] h-[55px]"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default PasswordChange;
