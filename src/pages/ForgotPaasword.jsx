import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const ForgotPaasword = () => {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [email, setEmail] = useState("");

  // const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    console.log(email);

    if (!email) {
      setLoading(false);
      return toast.error("Please enter your email.");
    }

    try {
      const { data } = await axios.post("/api/v1/users/forgot-password", {
        email,
      });

      if (data) {
        setSent(true);
      }
      console.log(data);
      // navigate("/reset-password");
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
      <div className=" w-full h-screen lg:h-[476px] bg-white lg:w-[456px]  border shadow-md rounded-xl ">
        <form
          onSubmit={handleSubmit}
          className=" w-full h-full p-5  lg:py-[32px] lg:px-[28px]  "
        >
          <h1 className=" font3 text-[20px] lg:text-[28px] font-semibold text-center">
            Forgot Password
          </h1>
          <p className=" text-xs lg:text-base text-[#667185] text-center">
            You forgot your password? Enter your email to get a reset link
          </p>
          {sent && (
            <p className=" p-1.5 bg-green-100 text-green-600 mt-2  rounded-md text-sm lg:text-base text-center">
              Your reset link has been sent to
              <span className="ml-0.5 font-medium">({email})</span>
            </p>
          )}

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
            <div className=" w-full flex -mt-1 justify-center items-center border-2 hover:border-[#FCB59A] border-[#D0D5DD] p-3.5  rounded-md">
              <input
                className=" w-full h-full  border outline-none border-none  placeholder:font-normal placeholder:text-sm placeholder:text-gray-400 "
                placeholder="Enter your work email address"
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <MdOutlineEmail size={15} className=" text-gray-400" />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className=" disabled:opacity-50 w-full mt-10 px-[24px] rounded-[12px] py-[16px] font-medium bg-[#FF5D2E]  text-white justify-center items-center flex gap-4"
          >
            Send reset Instruction
          </button>

          <Link to={"/"}>
            <p className=" text-gray-500  text-center w-full my-6 text-sm font-medium">
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
