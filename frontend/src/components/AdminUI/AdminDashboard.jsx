import React from "react";
import styles from "./AdminDashboard.module.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SidebarMenu from "../Sidebar/SidebarMenu.jsx";
import Header from "../Header/Header.jsx";
import Schedule from "./tabs/schedule.jsx";
import Panelists from "./tabs/panelists.jsx";
import Roles from "./tabs/roles-select.jsx";
import testPic from "../../assets/StudentDashboard/testpic.jpg";

const userPictureUrl = testPic;

const menuData = [
  {
    title: "Thesis Schedule",
    path: "/schedule",
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
    <div className={styles.container}>
      <SidebarMenu menuData={menuData} role={"Admin"} />
      <div className={styles.mainContent}>
        <Header userPictureUrl={userPictureUrl} />
        <Routes>
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/panelists" element={<Panelists />} />
          <Route path="/roles" element={<Roles />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminDashboard;
