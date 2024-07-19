import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      try {
        const { data } = await axios.get("/api/v1/users/");
        setUser(data);
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        toast.error(message);
      }
    };

    getUser();
  }, []);

  const getTimeBasedGreeting = () => {
    const hours = new Date().getHours();
    if (hours < 12) {
      return "Good morning";
    } else if (hours < 18) {
      return "Good afternoon";
    } else {
      return "Good evening";
    }
  };

  const logout = async () => {
    setLoading(true);
    try {
      await axios.get("/api/v1/users/logout");
      navigate("/login");
      setLoading(false);
    } catch (error) {
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
    <div className=" bg-gray-50 w-full min-h-screen flex justify-center items-center">
      <div>
        <div className=" capitalize font-medium">
          <span className=" text-[#FF5D2E]   font-bold">
            {getTimeBasedGreeting()}
          </span>{" "}
          {user?.name}
        </div>
        <p className=" "> Welcome to your Dashboard</p>
        <button
          disabled={loading}
          onClick={logout}
          className=" disabled:opacity-45 w-full mt-8 px-[24px] rounded-[12px] py-[12px] lg:py-[16px] font-semibold bg-[#FF5D2E]  text-white justify-center items-center flex gap-4"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
