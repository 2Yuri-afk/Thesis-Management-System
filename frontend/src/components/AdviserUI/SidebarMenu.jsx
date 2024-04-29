import React from "react";
import { Link, useLocation } from "react-router-dom";

const SidebarMenu = ({ menuData }) => {
  const location = useLocation();

  return (
    <div className="sidebar">
      <h2>Adviser Dashboard</h2>
      <ul>
        {menuData.map((menuItem) => (
          <li
            key={menuItem.title}
            className={location.pathname === menuItem.path ? "active" : ""}
          >
            <Link
              to={menuItem.path}
              style={{ display: "block", textDecoration: "none" }}
            >
              {menuItem.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarMenu;
