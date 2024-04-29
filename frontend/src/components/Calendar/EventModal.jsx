import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import moment from "moment";
import "./modal.css";

const EventModal = ({
  isOpen,
  onRequestClose,
  event,
  selectedDate,
  saveEvent,
  deleteEvent,
}) => {
  const [title, setTitle] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  useEffect(() => {
    if (event) {
      setTitle(event.title);
      setStart(moment(event.start).format("YYYY-MM-DDTHH:mm"));
      setEnd(moment(event.end).format("YYYY-MM-DDTHH:mm"));
    } else {
      setTitle("");
      setStart(moment(selectedDate).format("YYYY-MM-DDTHH:mm"));
      setEnd(moment(selectedDate).format("YYYY-MM-DDTHH:mm"));
    }
  }, [event, selectedDate]);

  const handleSave = () => {
    const newEvent = {
      title,
      start: moment(start).toDate(),
      end: moment(end).toDate(),
      id: event ? event.id : Date.now(),
    };
    saveEvent(newEvent);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Event Modal"
      className="modal"
      overlayClassName="modal-overlay"
    >
      <div className="modal-content">
        <div style={{ marginBottom: "20px" }}>
          <h2 className="modal-title">{event ? "Edit Event" : "Add Event"}</h2>
          <div style={{ display: "flex", alignItems: "center" }}>
            <label className="modal-label">Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="modal-input"
              placeholder="Event Title"
            />
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <label className="modal-label">Start Time:</label>
            <input
              type="datetime-local"
              value={start}
              onChange={(e) => setStart(e.target.value)}
              className="modal-input"
            />
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <label className="modal-label">End Time:</label>
            <input
              type="datetime-local"
              value={end}
              onChange={(e) => setEnd(e.target.value)}
              className="modal-input"
            />
          </div>
        </div>
        <div className="buttons">
          <button
            className="modal-button modal-save-button"
            onClick={handleSave}
          >
            {event ? "Update" : "Save"}
          </button>
          {event && (
            <button
              className="modal-button modal-delete-button"
              onClick={() => deleteEvent(event)}
            >
              Delete
            </button>
          )}
          <button
            className="modal-button modal-close-button"
            onClick={onRequestClose}
          >
            Close
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default EventModal;
