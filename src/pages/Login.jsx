import React from "react";
import { FaRegEyeSlash } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
// import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className=" w-full min-h-screen bg-gray-200 flex justify-center  items-center mx-auto ">
      {/* <button
        // onClick={() => navigate(-1)}
        className="  text-sm lg:text-base fixed flex font-semibold items-center justify-center gap-2 top-2 left-2 lg:top-8  lg:left-8"
      >
        <IoIosArrowBack />
        Go back
      </button> */}

      <div className="  w-[90%] lg:w-[456px] ">
        <form
          //   onSubmit={handleLogin}
          className=" bg-white w-full h-full border border-[#D0D5DD] p-5 lg:py-[32px] lg:px-[28px] shadow-md rounded-xl "
        >
          <h1 className=" text-[20px] lg:text-[28px] font-medium text-center">
            Login in as Admin
          </h1>
          <p className=" text-xs lg:text-base text-[#667185] text-center">
            Enter your credentials to access your dashboard
          </p>

          {/* username */}
          <div
            className=" flex flex-col gap-2 mt-8  lg:mt-10
          "
          >
            <label
              className=" tracking-wide capitalize text-xs lg:text-sm font-medium "
              htmlFor="username"
            >
              Username
            </label>
            <div className=" w-full flex -mt-1 justify-center items-center border-2 hover:border-[#FCB59A] border-[#D0D5DD] p-3.5  rounded-md">
              <input
                className=" w-full h-full  border outline-none border-none  placeholder:font-normal placeholder:text-sm placeholder:text-gray-400 "
                placeholder="Enter your Username"
                type="text"
                name="username"
                id="username"
                // onChange={handleInputChange}
              />
              <MdOutlineEmail size={20} className=" text-gray-400 " />
            </div>
          </div>

          {/* email */}
          <div className=" flex flex-col gap-2 mt-4">
            <label
              className=" tracking-wide capitalize text-xs lg:text-sm font-medium "
              htmlFor="email"
            >
              email
            </label>
            <div className=" w-full flex -mt-1 justify-center items-center border-2 hover:border-[#FCB59A] border-[#D0D5DD] p-3.5  rounded-md">
              <input
                className=" w-full h-full  border outline-none border-none  placeholder:font-normal placeholder:text-sm placeholder:text-gray-400 "
                placeholder="Enter your work email address"
                type="email"
                name="email"
                id="email"
                // onChange={handleInputChange}
              />
              <MdOutlineEmail size={20} className=" text-gray-400 " />
            </div>
          </div>

          <div className=" flex flex-col gap-2 mt-4 ">
            <label
              className=" tracking-wide capitalize text-xs lg:text-sm font-medium "
              htmlFor="password"
            >
              Password
            </label>
            <div className=" w-full flex -mt-1 justify-center items-center border-2 hover:border-[#FCB59A] border-[#D0D5DD] p-3.5  rounded-md">
              <input
                className=" w-full outline-none border-none placeholder:font-normal placeholder:text-sm placeholder:text-gray-400 "
                placeholder="Enter password"
                type="password"
                name="password"
                id="password"
                // onChange={handleInputChange}
              />
              <FaRegEyeSlash size={20} className=" text-gray-400" />
            </div>
          </div>

          <Link to={"/forget-password"}>
            <p className=" text-[#CC400C] text-right w-full my-3 text-sm font-semibold">
              Forget password?
            </p>
          </Link>

          <button
            type="submit"
            // onClick={() => navigate("/dashboard/main")}
            className=" w-full mt-8 px-[24px] rounded-[12px] py-[12px] lg:py-[16px] font-semibold bg-[#FF5D2E]  text-white justify-center items-center flex gap-4"
          >
            Log into Dashboard
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
