import React from "react";
import styles from "./AdviserDashboard.module.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SidebarMenu from "../Sidebar/SidebarMenu.jsx";
import Header from "../Header/Header.jsx";
import Schedule from "./tabs/schedule.jsx";
import ManageGroup from "./tabs/managegroup.jsx";
import GroupRequest from "./tabs/grouprequest.jsx";
import Profile from "./tabs/profile.jsx";

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
    <div className={styles["container"]}>
      <SidebarMenu menuData={menuData} role="Adviser" />
      <div className={styles["mainContent"]}>
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
