import React from "react";
import styles from "./grouprequest.module.css";
import testpic from "../../../assets/StudentDashboard/testpic.jpg";

export default function GroupRequest() {
  return (
    <>
      <div className={styles["content"]}>
        <h2 className={styles.pageTitle}>GROUP REQUEST</h2>

        <div className={styles["container1"]}>
          <div className={styles["column"]}>
            <div className={styles["title-container"]}>
              <strong>Thesis Title: </strong>
              <strong>Members: </strong>
            </div>
          </div>

          <div className={styles["column"]}>
            <div className={styles["members"]}>
              <div className={styles["thesis-title"]}>
                <strong>Dancing Computational Technology</strong>
              </div>
              <div className={styles["person-list"]}>
                <div className={styles["person"]}>
                  <img
                    className={styles["person-image"]}
                    src={testpic}
                    alt=""
                  />
                  <div className={styles["person-name"]}>
                    <h3>Michelle Drama</h3>
                  </div>
                </div>
                <div className={styles["person"]}>
                  <img
                    className={styles["person-image"]}
                    src={testpic}
                    alt=""
                  />
                  <div className={styles["person-name"]}>
                    <h3>Lily Pad</h3>
                  </div>
                </div>
                <div className={styles["person"]}>
                  <img
                    className={styles["person-image"]}
                    src={testpic}
                    alt=""
                  />
                  <div className={styles["person-name"]}>
                    <h3>Michelle Drama</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles["column"]}>
            <div className={styles["buttons"]}>
              <button className={styles["accept-button"]}>Accept</button>
              <button className={styles["reject-button"]}>Reject</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
