import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const AuthOptionsCard = ({ head, text, link }) => {
  return (
    <Link to={link}>
      <div className=" border border-[#FFEFEA] w-[280px] h-[120px] lg:h-[150px] shadow-sm flex flex-col justify-center rounded-md px-3 ">
        <h3 className=" font-semibold">{head}</h3>
        <div className=" flex ">
          <p className=" text-sm text-[#707070] ">{text}</p>

          <IoIosArrowForward size={20} />
        </div>
      </div>
    </Link>
  );
};

export default AuthOptionsCard;
