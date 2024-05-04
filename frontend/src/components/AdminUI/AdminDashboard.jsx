import React from "react";
import "./admin-styles.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SidebarMenu from "./SidebarMenu.jsx";
import Header from "./Header.jsx";
import Schedule from "./pages/schedule.jsx";
import Group from "./pages/group.jsx";
import Panelists from "./pages/panelists.jsx";
import Roles from "./pages/role-select.jsx"
import testPic from "../../assets/StudentDashboard/testpic.jpg";

const userPictureUrl = testPic;

const menuData = [
  {
    title: "Thesis Schedule",
    path: "/schedule",
  },
  {
    title: "Group",
    path: "/group",
  },
  {
    title: "Panelists",
    path: "/panelists",
  },
  {
    title: "Accounts",
    path: "/roles",
  },
];

const AdminDashboard = () => {
  return (
    <div className="container">
      <SidebarMenu menuData={menuData} />
      <div className="main-content">
        <Header userPictureUrl={userPictureUrl} />
        <Routes>
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/group" element={<Group />} />
          <Route path="/panelists" element={<Panelists />} />
          <Route path="/roles" element={<Roles />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminDashboard;
