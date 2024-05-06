import React from "react";
import styles from "./StudentDashboard.module.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SidebarMenu from "../Sidebar/SidebarMenu.jsx";
import Header from "../Header/Header.jsx";
import Schedule from "./tabs/schedule.jsx";
import Proposal from "./tabs/proposal.jsx";
import Manuscript from "./tabs/manuscript.jsx";
import Group from "./tabs/group.jsx";
import Profile from "./tabs/profile.jsx";
import testPic from "../../assets/StudentDashboard/testpic.jpg";

const userPictureUrl = testPic;

const menuData = [
  {
    title: "Thesis Schedule",
    path: "/schedule",
  },
  {
    title: "Proposal",
    path: "/proposal",
  },
  {
    title: "Manuscript",
    path: "/manuscript",
  },
  {
    title: "Group",
    path: "/group",
  },
  {
    title: "Profile",
    path: "/profile",
  },
];

const StudentDashboard = () => {
  return (
    <div className={styles.container}>
      <SidebarMenu menuData={menuData} role="Student" />
      <div className={styles.mainContent}>
        <Header userPictureUrl={userPictureUrl} />
        <Routes>
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/proposal" element={<Proposal />} />
          <Route path="/manuscript" element={<Manuscript />} />
          <Route path="/group" element={<Group />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
};

export default StudentDashboard;
