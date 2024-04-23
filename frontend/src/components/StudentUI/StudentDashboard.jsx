import React from "react";
import "./student-styles.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SidebarMenu from "./SidebarMenu";
import Header from "./Header";
import Schedule from "./pages/schedule.jsx";
import Proposal from "./pages/proposal.jsx";
import Manuscript from "./pages/manuscript.jsx";
import Group from "./pages/group.jsx";
import Profile from "./pages/profile.jsx";
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
    <div className="container">
      <SidebarMenu menuData={menuData} />
      <div className="main-content">
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
