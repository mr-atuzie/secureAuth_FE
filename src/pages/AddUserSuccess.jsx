import React from "react";
import { useNavigate } from "react-router-dom";
import { TiUserAdd } from "react-icons/ti";
import { IoIosArrowBack } from "react-icons/io";

const AddUserSuccess = () => {
  const navigate = useNavigate();
  return (
    <div className=" font2 relative flex justify-center items-center">
      <button
        onClick={() => navigate(-1)}
        className=" text-sm lg:text-base  flex font-semibold absolute top-2 left-2 items-center justify-center gap-2 "
      >
        <IoIosArrowBack />

        <span className=" underline"> Back</span>
      </button>
      <div className=" w-[90%] lg:w-[40%] h-[150px] lg:h-[300px] p-2 bg-white shadow-sm flex justify-center items-center flex-col">
        <div className=" lg:w-[60px] w-[30px] h-[30px] lg:h-[60px] flex justify-center items-center bg-[#FFEFEA] rounded-full">
          <TiUserAdd size={25} className=" text-[#FF5D2E]" />
        </div>
        <h1 className=" text-[20pz] lg:text-[24px] font-medium text-center">
          Check your email
        </h1>
        <p className=" text-xs lg:w-[340px] lg:text-sm text-[#8C8C8C] text-center">
          Reset link has been sent to your mail. Follow the instruction to reset
          your password
        </p>

        <button
          onClick={() => navigate("/dashboard/main")}
          className=" rounded-lg text-center mt-6 text-white bg-[#FF5D2E] w-[90%] lg:w-[400px] h-[55px]"
        >
          Got it
        </button>
      </div>
    </div>
  );
};

export default AddUserSuccess;
