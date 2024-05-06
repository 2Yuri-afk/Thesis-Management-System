import React from "react";
import styles from "./TeacherDashboard.module.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SidebarMenu from "../Sidebar/SidebarMenu.jsx";
import Header from "../Header/Header.jsx";
import Schedule from "./tabs/schedule.jsx";
import Proposal from "./tabs/proposal.jsx";
import MyStudents from "./tabs/mystudents.jsx";
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
    title: "My Students",
    path: "/mystudents",
  },
];

const TeacherDashboard = () => {
  return (
    <div className={styles["container"]}>
      <SidebarMenu menuData={menuData} role="Teacher" />
      <div className={styles["mainContent"]}>
        <Header userPictureUrl={userPictureUrl} />
        <Routes>
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/proposal" element={<Proposal />} />
          <Route path="/mystudents" element={<MyStudents />} />
        </Routes>
      </div>
    </div>
  );
};

export default TeacherDashboard;
