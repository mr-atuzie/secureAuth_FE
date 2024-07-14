import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

const ForgotPaasword = () => {
  const navigate = useNavigate();
  return (
    <div className=" w-full min-h-screen bg-gray-200 flex justify-center  items-center mx-auto ">
      <div className=" w-full h-screen lg:h-[476px] bg-white lg:w-[456px]  border shadow-md rounded-xl ">
        <form className=" w-full h-full  py-[32px] px-[28px]  ">
          <h1 className=" font3 text-[20px] lg:text-[28px] font-semibold text-center">
            Forgot Password
          </h1>
          <p className=" text-xs lg:text-base text-[#667185] text-center">
            You forgot your password? Enter your email to get a reset link
          </p>

          <div
            className=" flex flex-col gap-2 mt-8 lg:mt-10 
          "
          >
            <label
              className=" tracking-wide capitalize text-sm lg:text-sm font-semibold "
              htmlFor="email"
            >
              email
            </label>
            <div className=" bg-white w-full flex justify-center items-center border-2 border-[#FCB59A] p-3.5  rounded-md">
              <input
                className=" w-full outline-none border-none placeholder:font-normal placeholder:text-sm placeholder:text-gray-400 "
                placeholder="Enter your work email address"
                type="email"
                name="email"
                id="email"
              />
              <MdOutlineEmail size={15} className=" text-gray-400" />
            </div>
          </div>

          <button
            onClick={() => navigate("/reset-password")}
            className=" w-full mt-10 px-[24px] rounded-[12px] py-[16px] font-medium bg-[#FF5D2E]  text-white justify-center items-center flex gap-4"
          >
            Send reset Instruction
          </button>
          <Link to={"/"}>
            <p className=" text-gray-500  text-center w-full my-6 text-sm font-semibold">
              Remeber your password?{" "}
              <span className="text-[#FF6634] ml-1">Click here</span>
            </p>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default ForgotPaasword;
