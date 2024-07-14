import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";

import { Link, useNavigate } from "react-router-dom";

const iconSize = 15;
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    if (!email || !password) {
      setLoading(false);
      return toast.error("Please enter all fields.");
    }

    if (password.length < 7) {
      return toast.error("Password must be up to 7 characters");
    }

    try {
      const { data } = await axios.post("/api/v1/users/login", {
        email,
        password,
      });

      navigate("/verify-email");
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
  return (
    <div className=" w-full min-h-screen bg-gray-200 flex justify-center  items-center mx-auto ">
      <div className="  w-full h-full lg:w-[456px] ">
        <form
          onSubmit={handleSubmit}
          className=" bg-white w-full h-full border border-[#D0D5DD] p-5 lg:py-[32px] lg:px-[28px] shadow-md rounded-xl "
        >
          <h1 className=" text-[20px] lg:text-[28px] font-medium text-center">
            Login your Account
          </h1>
          <p className=" text-xs lg:text-base text-[#667185] text-center">
            Enter your credentials to access your dashboard
          </p>

          {/* email */}
          <div className=" flex flex-col gap-2 mt-4  lg:mt-6">
            <label
              className=" tracking-wide capitalize text-xs lg:text-sm font-medium "
              htmlFor="emai"
            >
              Email
            </label>
            <div className=" w-full flex -mt-1 justify-center items-center border-2 hover:border-[#FCB59A] border-[#D0D5DD] p-3.5  rounded-md">
              <input
                className=" w-full h-full  border outline-none border-none  placeholder:font-normal placeholder:text-sm placeholder:text-gray-400 "
                placeholder="Enter your Username"
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <FaRegUser size={iconSize} className=" text-gray-400 " />
            </div>
          </div>

          <div className=" flex flex-col gap-2 mt-4 lg:mt-6">
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
                value={email}
                onChange={(e) => setPassword(e.target.value)}
              />
              <FaRegEyeSlash size={iconSize} className=" text-gray-400" />
            </div>
          </div>

          <Link to={"/forgot-password"}>
            <p className=" text-[#FF5D2E] text-right w-full my-2 text-sm font-semibold">
              Forgot password?
            </p>
          </Link>

          <button
            type="submit"
            disabled={loading}
            className=" disabled:opacity-50 w-full mt-8 px-[24px] rounded-[12px] py-[12px] lg:py-[16px] font-semibold bg-[#FF5D2E]  text-white justify-center items-center flex gap-4"
          >
            {loading ? "Loading" : "Login"}
          </button>

          <Link to={"/"}>
            <p className=" text-sm text-center  my-4">
              Don't have an account?{" "}
              <span className=" font-medium text-[#FF5D2E]">Register</span>
            </p>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
