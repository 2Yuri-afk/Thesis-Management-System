import React from "react";
import "./admin-pages.css";
// import EventScheduler from "../../Calendar/EventScheduler";
import MyCalendar from "../../Calendar/MyCalendar";

export default function schedule() {
  return (
    <>
      <div className="apple">
        <MyCalendar />
      </div>
    </>
  );
}
