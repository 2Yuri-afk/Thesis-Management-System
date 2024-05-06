import React from "react";
import styles from "./schedule.module.css";
import MyCalendar from "../../Calendar/MyCalendar";

export default function schedule() {
  return (
    <>
      <h2 className={styles["pageTitle"]}>Thesis Schedule</h2>
      <div className={styles["main-container"]}>
        <div className={styles["left"]}>
          <div className={styles["group-schedule-box"]}>
            <h3 className={styles["group-box-text"]}>Group Schedule</h3>
          </div>
          <div className={styles["group-schedule-box"]}>
            <h3 className={styles["group-box-text"]}>Group Schedule</h3>
          </div>
          <div className={styles["group-schedule-box"]}>
            <h3 className={styles["group-box-text"]}>Group Schedule</h3>
          </div>
        </div>
        <div className={styles["calendar"]}>
          <div className={styles["student-cal-bg"]}>
            <MyCalendar />
          </div>
        </div>
      </div>
    </>
  );
}
