import React from "react";
import "./teacher-styles.css";
import notif from "../../assets/StudentDashboard/Notif.png";

const Header = ({ userPictureUrl }) => {
  return (
    <div className="header">
      <div className="search-bar">
        <input type="text" placeholder="Search..." className="search-input" />
      </div>
      <div className="user-info">
        <img src={userPictureUrl} alt="User" className="user-picture" />
        <img src={notif} alt="Notification" className="notif" />
      </div>
    </div>
  );
};

export default Header;
