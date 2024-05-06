import React from "react";
import styles from "./Header.module.css";
import notif from "../../assets/StudentDashboard/Notif.png";

const Header = ({ userPictureUrl }) => {
  return (
    <div className={styles.header}>
      <div className={styles.searchBar}>
        <input
          type="text"
          placeholder="Search..."
          className={styles.searchInput}
        />
      </div>
      <div className={styles.userInfo}>
        <img src={userPictureUrl} alt="User" className={styles.userPicture} />
        <img src={notif} alt="Notification" className={styles.notif} />
      </div>
    </div>
  );
};

export default Header;
