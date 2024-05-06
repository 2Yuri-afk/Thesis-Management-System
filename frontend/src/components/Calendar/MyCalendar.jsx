import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./calendar.css";
import EventModal from "./EventModal";

const localizer = momentLocalizer(moment);

export default function MyCalendar({ size }) {
  const [events, setEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleSelectSlot = ({ start, end }) => {
    setShowModal(true);
    setSelectedDate(start);
    setSelectedEvent(null);
  };

  const handleSelectFAB = ({ start, end }) => {
    setShowModal(true);
    setSelectedDate(start);
    setSelectedEvent(null);
  };

  const handleSelectEvent = (event) => {
    setShowModal(true);
    setSelectedEvent(event);
  };

  const saveEvent = (newEvent) => {
    if (selectedEvent) {
      const updatedEvents = events.map((e) =>
        e.id === selectedEvent.id ? newEvent : e
      );
      setEvents(updatedEvents);
    } else {
      setEvents([...events, newEvent]);
    }
    setShowModal(false);
  };

  const deleteEvent = (eventToDelete) => {
    const updatedEvents = events.filter((e) => e.id !== eventToDelete.id);
    setEvents(updatedEvents);
    setShowModal(false);
  };

  const calendarStyle = {
    width: size == "admin" ? "1300px" : "1200px",
    height: size == "admin" ? "700px" : "600px",
    border: "1px pink",
    padding: "10px",
  };

  return (
    <>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        selectable={true}
        onSelectSlot={handleSelectSlot}
        onSelectEvent={handleSelectEvent}
        style={calendarStyle}
      />
      <EventModal
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
        event={selectedEvent}
        selectedDate={selectedDate}
        saveEvent={saveEvent}
        deleteEvent={deleteEvent}
        existingGroups={events.map((event) => event.group)}
        existingRooms={events.map((event) => event.room)}
      />
      <button className="add-button" onClick={handleSelectFAB}>
        +
      </button>
    </>
  );
}
