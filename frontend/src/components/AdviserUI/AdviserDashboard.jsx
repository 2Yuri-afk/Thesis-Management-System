import React from "react";
import "./adviser-styles.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SidebarMenu from "./SidebarMenu.jsx";
import Header from "./Header.jsx";
import Schedule from "./pages/schedule.jsx";
import ManageGroup from "./pages/managegroup.jsx";
import GroupRequest from "./pages/grouprequest.jsx";
import Profile from "./pages/profile.jsx";

import testPic from "../../assets/StudentDashboard/testpic.jpg";

const userPictureUrl = testPic;

const menuData = [
  {
    title: "Thesis Schedule",
    path: "/schedule",
  },
  {
    title: "Group Request",
    path: "/group-request",
  },
  {
    title: "Manage Group",
    path: "/manage-group",
  },
  {
    title: "Profile",
    path: "/profile",
  },
];

const AdviserDashboard = () => {
  return (
    <div className="container">
      <SidebarMenu menuData={menuData} />
      <div className="main-content">
        <Header userPictureUrl={userPictureUrl} />
        <Routes>
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/group-request" element={<GroupRequest />} />
          <Route path="/manage-group" element={<ManageGroup />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdviserDashboard;
