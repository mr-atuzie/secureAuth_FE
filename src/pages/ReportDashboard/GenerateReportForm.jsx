import React from "react";
import { IoCalendarOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const GenerateReportForm = () => {
  return (
    <>
      <section className=" mt-[170px]S font2 py-16">
        <h1 className=" text-[24px] font-semibold">Generate Report</h1>
        <p className=" text-[#71717A] -mt-2">
          Generate report for any of the business
        </p>

        <form className=" lg:w-[65%] my-10">
          <div className=" grid grid-cols-1 lg:grid-cols-2 my-7 gap-5">
            <div className="border rounded-[10px] px-3 flex items-center gap-4  py-1">
              <IoCalendarOutline />
              <div>
                <label
                  className=" text-[13px] font-semibold mb-1 "
                  htmlFor="email"
                >
                  Start Date
                </label>
                <input
                  type="text"
                  name="date"
                  id="date"
                  placeholder="12/12/2024"
                  className="  w-full bg-transparent outline-none"
                />
              </div>
            </div>
            <div className="border rounded-[10px] px-3 flex items-center gap-4  py-1">
              <IoCalendarOutline />
              <div>
                <label
                  className=" text-[13px] font-semibold mb-1 "
                  htmlFor="email"
                >
                  Start Date
                </label>
                <input
                  type="text"
                  name="date"
                  id="date"
                  placeholder="12/12/2024"
                  className="  w-full bg-transparent outline-none"
                />
              </div>
            </div>
          </div>

          <div className="border rounded-[10px] px-3 py-1 my-7 ">
            <label className=" text-[13px] font-semibold mb-1 " htmlFor="email">
              Filter Date
            </label>
            <select
              name="date"
              id="date"
              className=" w-full bg-transparent outline-none"
            >
              <option value={" "} className=" text-gray-400">
                Fill till Date
              </option>
              <option value="red">red</option>
              <option value="red">red</option>
              <option value="red">red</option>
              <option value="red">red</option>
            </select>
          </div>

          <div className="border rounded-[10px] px-3 py-1 my-7 ">
            <label className=" text-[13px] font-semibold mb-1 " htmlFor="email">
              Report type
            </label>
            <select
              name="date"
              id="date"
              className="  w-full bg-transparent outline-none"
            >
              <option className=" text-gray-400" value={""}>
                Select report type
              </option>
              <option value="red">red</option>
              <option value="red">red</option>
              <option value="red">red</option>
              <option value="red">red</option>
            </select>
          </div>

          <div className="border rounded-[10px] px-3 py-1 my-7 ">
            <label className=" text-[13px] font-semibold mb-1 " htmlFor="email">
              Display Report
            </label>
            <select
              name="date"
              id="date"
              className="  w-full bg-transparent outline-none"
              value={"meee"}
            >
              <option className=" text-gray-400" value={""}>
                Display report by
              </option>
              <option value="red">red</option>
              <option value="red">red</option>
              <option value="red">red</option>
              <option value="red">red</option>
            </select>
          </div>

          <div className=" w-full flex justify-end items-center gap-5">
            <button className=" border border-[#FF5D2E] bg-white text-[#FF5D2E] py-2.5 px-4 rounded-[6px] font-semibold">
              Clear report
            </button>
            <Link to={"/dashboard/generate-report-table"}>
              <button className="  bg-[#FF5D2E] text-white  py-2.5 px-4 rounded-[6px] font-semibold">
                Generate report
              </button>
            </Link>
          </div>
        </form>
      </section>
    </>
  );
};

export default GenerateReportForm;
