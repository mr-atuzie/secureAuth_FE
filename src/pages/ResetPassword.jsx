import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { RiEyeCloseLine } from "react-icons/ri";
import toast from "react-hot-toast";
import axios from "axios";

const ResetPassword = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (password !== confirmPassword) {
      setLoading(false);
      return toast.error("Make sure both password match.");
    }

    try {
      const { data } = await axios.post("/api/v1/users/reset-password/" + id, {
        password,
      });

      toast.success("Password reset successfull,Login.");
      console.log(data);
      navigate("/login");
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
    <div className=" w-full min-h-screen bg-[#F7F9FC] flex justify-center  items-center mx-auto ">
      <div className=" lg:h-[476px] w-full h-screen lg:w-[456px] bg-white border shadow-md rounded-xl ">
        <form
          onSubmit={handleSubmit}
          className=" w-full h-full  p-5 lg:py-[32px] lg:px-[28px]  "
        >
          <h1 className=" font3 text-[20px] lg:text-[28px] font-semibold text-center">
            Reset Password
          </h1>
          <p className=" text-xs lg:text-base text-[#667185] text-center">
            Reset your password. Go ahead and set a new password
          </p>

          <div
            className=" flex flex-col gap-2 mt-10 
          "
          >
            <label
              className=" tracking-wide capitalize text-sm lg:text-sm font-medium "
              htmlFor="password"
            >
              new password
            </label>
            <div className=" w-full flex -mt-1 justify-center items-center border-2 hover:border-[#FCB59A] border-[#D0D5DD] p-3.5  rounded-md">
              <input
                className=" w-full outline-none border-none placeholder:font-normal placeholder:text-sm placeholder:text-gray-400 "
                placeholder="Enter your new password"
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <RiEyeCloseLine size={15} className=" text-gray-300" />
            </div>
          </div>

          <div
            className=" flex flex-col gap-2 mt-5 
          "
          >
            <label
              className=" tracking-wide capitalize text-sm lg:text-sm font-medium "
              htmlFor="Cpassword"
            >
              confirm password
            </label>
            <div className=" w-full flex -mt-1 justify-center items-center border-2 hover:border-[#FCB59A] border-[#D0D5DD] p-3.5  rounded-md">
              <input
                className=" w-full outline-none border-none placeholder:font-normal placeholder:text-sm placeholder:text-gray-400 "
                placeholder="Confirm your new password"
                type="password"
                name="Cpassword"
                id="Cpassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <RiEyeCloseLine size={15} className=" text-gray-300" />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            // onClick={() => navigate("/password-changed")}
            className=" disabled:opacity-50 w-full mt-8 px-[24px] rounded-[12px] py-[16px] font-semibold bg-[#FF5D2E]  text-white justify-center items-center flex gap-4"
          >
            Save changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
