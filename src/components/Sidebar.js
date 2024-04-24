import React from "react";
import "../styles/Sidebar.css";
import { IoMdSettings } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { MdOutlineMonitor } from "react-icons/md";
import { FaRegQuestionCircle } from "react-icons/fa";
import { IoMdCalendar } from "react-icons/io";
import { BiSolidDollarCircle } from "react-icons/bi";
import { FaHeadphones } from "react-icons/fa6";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";

import logo from "../assets/logo.png";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="top-section">
        {/* logo */}
        <div className="logo-container">
          <img src={logo} alt="log" className="logo" />
        </div>
        {/* icons */}
        <div className="icon-container">
          <CiSearch className="icons" />
          <MdOutlineMonitor className="icons" />
          <FaRegQuestionCircle className="icons" />
          <IoMdCalendar className="icons" />
          <HiOutlineBuildingOffice2 className="icons" />
          <BiSolidDollarCircle className="icons" />
          <FaHeadphones className="icons" />
        </div>
      </div>
      <IoMdSettings className="icons" />
    </div>
  );
};

export default Sidebar;
