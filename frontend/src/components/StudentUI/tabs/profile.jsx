import React from "react";
import styles from "./profile.module.css";
import testpic from "../../../assets/StudentDashboard/testpic.jpg";

export default function Profile() {
  const PName = "Michelle Drama";
  const profileImageUrl = testpic; // medyo conflict ako here di ako makaadd pic

  return (
    <>
      <h2 className={styles.pageTitle}>PROFILE</h2>

      {/* Profile Section */}
      <div className={styles.profileSection}>
        {/* Profile Icon (Floating Box) */}
        <div className={`${styles.floatingBox} ${styles.profileIconBox}`}>
          <img
            className={styles.profileIcon}
            src={profileImageUrl}
            alt={`${PName}'s profile picture`}
            placeholder="Upload profile picture"
          />
          <div className={styles.profileName}>{PName}</div>
          <div className={styles.studentLabel}>Student</div>
        </div>

        {/* User Information (Floating Box) */}
        <div className={`${styles.floatingBox} ${styles.userInfoBox}`}>
          <h2 className={styles.infoText}>User Information</h2>
          <div className={styles.infoBox}>
            <div className={styles.userInfo}>
              <div className={styles.label}>Name:</div>
              <input type="text" placeholder="Enter your name" />
              <div className={styles.label}>Email:</div>
              <input type="text" placeholder="Enter your email" />
            </div>
          </div>
          <div className={styles.saveButtonContainer}>
            <button className={styles.saveButtonIcon}>Save User Info</button>
          </div>
        </div>

        {/* Password (Floating Box) */}
        <div
          className={`${styles.floatingBox} ${styles.passwordSection} ${styles.uniquePasswordBox}`}
        >
          <h2>Password</h2>
          <div className={styles.infoBox}>
            <div className={styles.passwordFields}>
              <div className={styles.field}>
                <div className={styles.label}>Current Password:</div>
                <input
                  type="password"
                  placeholder="Enter your current password"
                />
              </div>
              <div className={styles.field}>
                <div className={styles.label}>New Password:</div>
                <input type="password" placeholder="Enter your new password" />
              </div>
              <div className={styles.field}>
                <div className={styles.label}>Confirm Password:</div>
                <input
                  type="password"
                  placeholder="Confirm your new password"
                />
              </div>
            </div>
            <div className={styles.saveButtonContainer}>
              <button className={styles.saveButtonIcon}>Save Password</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
