import React from "react";
import "./teacher-styles.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SidebarMenu from "./SidebarMenu.jsx";
import Header from "./Header.jsx";
import Schedule from "./pages/schedule.jsx";
import Proposal from "./pages/proposals.jsx";
import MyStudents from "./pages/mystudents.jsx";
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
    <div className="container">
      <SidebarMenu menuData={menuData} />
      <div className="main-content">
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
