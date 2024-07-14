import React, { useState } from "react";
import { Link } from "react-router-dom";
import OtpInput from "otp-input-react";

const VerifyEmail = () => {
  const [OTP, setOTP] = useState("");

  const handleSubmit = () => {
    console.log(OTP);
  };
  return (
    <div className=" w-full min-h-screen bg-gray-200 flex justify-center  items-center mx-auto ">
      <div className=" lg:h-[476px] bg-white w-[95%] lg:w-[456px] mx-auto  border shadow-md rounded-xl ">
        <form className=" w-full h-full  py-[32px] px-[28px]  ">
          <h1 className=" font3 text-[20px] lg:text-[28px] font-medium text-center">
            Verify your Email
          </h1>
          <p className=" text-xs lg:text-base text-[#667185] text-center">
            We sent a code to{" "}
            <span className=" text-[#FF5D2E] font-medium">
              (crackwxll@gmail.com)
            </span>
            ,Enter code to continue
          </p>

          <div
            className=" flex flex-col gap-2 mt-8 lg:mt-10 
          "
          >
            <label
              className=" tracking-wide capitalize text-xs lg:text-sm  font-medium "
              htmlFor="code"
            >
              Enter verification code
            </label>
            <OtpInput
              value={OTP}
              onChange={setOTP}
              autoFocus
              OTPLength={6}
              otpType="alphanumeric"
              disabled={false}
              className="otp-container"
            />

            {/* <div className=" bg-white w-full flex justify-center items-center border-2 border-[#FCB59A] p-3.5  rounded-md">
              <input
                className=" w-full outline-none border-none placeholder:font-normal placeholder:text-sm placeholder:text-gray-400 "
                placeholder="Enter verification code"
                type="text"
                name="code"
                id="code"
              />
            </div> */}
          </div>

          <button
            onClick={handleSubmit}
            className=" w-full mt-10 px-[24px] rounded-[12px] py-[16px] font-semibold bg-[#FF5D2E]  text-white justify-center items-center flex gap-4"
          >
            Enter
          </button>
          <Link to={"/"}>
            <p className=" text-gray-500  text-center w-full my-6 text-sm font-medium">
              Didn't recieve email?{" "}
              <span className="text-[#FF6634] ml-1">Resend</span>
            </p>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default VerifyEmail;
