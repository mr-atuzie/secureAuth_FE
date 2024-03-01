import React from "react";
import { FaRegEnvelope } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

const ResetEmail = () => {
  const navigate = useNavigate();
  return (
    <div className=" w-full min-h-screen bg-[#F7F9FC] flex justify-center flex-col  items-center mx-auto ">
      <div className=" w-[620px] h-[300px] bg-white shadow-sm flex justify-center items-center flex-col">
        <div className=" w-[60px] h-[60px] flex justify-center items-center bg-[#FFEFEA] rounded-full">
          <FaRegEnvelope size={20} className=" text-[#FF5D2E]" />
        </div>
        <h1 className=" text-[24px] font-medium text-center">
          Check your email
        </h1>
        <p className=" w-[340px] text-base text-[#8C8C8C] text-center">
          Reset link has been sent to your mail. Follow the instruction to reset
          your password
        </p>

        <button
          onClick={() => navigate("/reset-password")}
          className=" rounded-lg text-center mt-6 text-white bg-[#FF5D2E] w-[400px] h-[55px]"
        >
          Got it
        </button>
      </div>
      <Link to={"/"}>
        <p className=" text-gray-500  text-center w-full my-6 text-sm font-semibold">
          Remeber your password?{" "}
          <span className="text-[#FF6634] ml-1">Click here</span>
        </p>
      </Link>
    </div>
  );
};

export default ResetEmail;
