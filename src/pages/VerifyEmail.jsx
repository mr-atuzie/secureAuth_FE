import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import OtpInput from "otp-input-react";
import toast from "react-hot-toast";
import axios from "axios";

const VerifyEmail = () => {
  const [OTP, setOTP] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const sentTo = sessionStorage.getItem("sentTo");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    if (!OTP) {
      setLoading(false);
      return toast.error("Please enter all fields.");
    }

    try {
      const { data } = await axios.post("/api/v1/users/verify-email", {
        code: OTP,
      });

      navigate("/dashboard");
      console.log(data);
    } catch (error) {
      console.log(error);
      setLoading(false);

      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      toast.error(message);
    }
  };

  const resend = async (e) => {
    setLoading(true);
    try {
      await axios.get("/api/v1/users/resend");
      toast.success("Your verification code has been resent");
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);

      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      toast.error(message);
    }
  };

  return (
    <div className=" w-full min-h-screen bg-gray-200 flex justify-center  items-center mx-auto ">
      <div className=" lg:h-[476px] bg-white w-full h-screen lg:w-[456px] mx-auto  border shadow-md rounded-xl ">
        <form
          onSubmit={handleSubmit}
          className=" w-full h-full p-5  lg:py-[32px] lg:px-[28px]  "
        >
          <h1 className=" font3 text-[20px] lg:text-[28px] font-medium text-center">
            Verify your Email
          </h1>
          <p className=" text-xs lg:text-base text-[#667185] text-center">
            We sent a code to{" "}
            <span className=" text-[#FF5D2E] font-medium">({sentTo})</span>
            ,Enter code to continue
          </p>

          <div
            className=" flex flex-col gap-2 mt-8 lg:mt-10 
          "
          >
            <label
              className=" tracking-wide text-center capitalize text-sm lg:text-sm  font-medium "
              htmlFor="code"
            >
              Enter verification code
            </label>
            <OtpInput
              value={OTP}
              onChange={setOTP}
              autoFocus
              OTPLength={7}
              otpType="any"
              disabled={false}
              className="otp-container"
            />

            {/* <div className=" w-full flex -mt-1 justify-center items-center border-2 hover:border-[#FCB59A] border-[#D0D5DD] p-3.5  rounded-md">
              <input
                className=" w-full outline-none border-none placeholder:font-normal placeholder:text-sm placeholder:text-gray-400 "
                placeholder="Enter verification code"
                type="text"
                name="code"
                id="code"
                value={OTP}
                onChange={(e) => setOTP(e.target.value)}
              />
            </div> */}
          </div>

          <button
            disabled={loading}
            type="submit"
            className=" disabled:opacity-50 w-full mt-10 px-[24px] rounded-[12px] py-[16px] font-semibold bg-[#FF5D2E]  text-white justify-center items-center flex gap-4"
          >
            {loading ? "Loading" : "Enter"}
          </button>
          <button
            type="button"
            onClick={resend}
            className=" text-gray-500  text-center w-full my-6 text-sm font-medium"
          >
            Didn't recieve email?{" "}
            <span className="text-[#FF6634] ml-1">Resend</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default VerifyEmail;
