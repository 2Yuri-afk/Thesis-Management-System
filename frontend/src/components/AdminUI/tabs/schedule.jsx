import React from "react";
import styles from "./schedule.module.css";
import MyCalendar from "../../Calendar/MyCalendar";

export default function schedule({ showAddButton }) {
  return (
    <>
      <div className={styles.scheduleContainer}>
        <div className={styles.calBackground}>
          <MyCalendar
            size="admin"
            selectable={true}
            showAddButton={true}
            isAdmin={true}
          />
        </div>
      </div>
    </>
  );
}
