import React from "react";
import "../styles/Home.css";
import Sidebar from "./Sidebar";
import { FaRegCalendar } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { IoIosNotificationsOutline } from "react-icons/io";
import SaveLibraryCards from "./SaveLibraryCards";
import Banking from "./Banking";

const Home = () => {
  return (
    <div className="home-container">
      <Sidebar />
      <div className="home-items-container">
        {/* header  */}
        <div className="home-header">
          <div className="name-container">
            <h1>Good Afternoon, Akshay</h1>
            <p>You are subscribed to Retail plan.</p>
          </div>
          <div className="date-container">
            <div className="date">
              <FaRegCalendar className="date-icons" />
              <p>Today, 14 February</p>
              <IoMdTime className="date-icons" />
              <p>16:42</p>
            </div>
            <IoIosNotificationsOutline className="date-icons" />
          </div>
        </div>
        {/* items */}
        <div className="home-save-library-cards-container">
          <SaveLibraryCards />
        </div>
        <div className="home-banking-container-it">
          <Banking />
        </div>
      </div>
    </div>
  );
};

export default Home;
