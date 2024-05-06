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
  existingGroups, // Array of existing groups assigned to events
  existingRooms, // Array of existing rooms assigned to events
}) => {
  const [title, setTitle] = useState("");
  const [room, setRoom] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [selectedGroup, setSelectedGroup] = useState("");

  useEffect(() => {
    if (event) {
      setTitle(event.title);
      setRoom(event.room);
      setStart(moment(event.start).format("YYYY-MM-DDTHH:mm"));
      setEnd(moment(event.end).format("YYYY-MM-DDTHH:mm"));
      setSelectedGroup(event.group);
    } else {
      setTitle("");
      setRoom("");
      setStart(moment(selectedDate).format("YYYY-MM-DDTHH:mm"));
      setEnd(moment(selectedDate).format("YYYY-MM-DDTHH:mm"));
      setSelectedGroup("");
    }
  }, [event, selectedDate]);

  const handleSave = () => {
    if (!selectedGroup || !room) {
      alert("Selecting a group and a room is required!");
      return;
    }

    const newEvent = {
      title: `${room} - ${selectedGroup}`,
      start: moment(start).toDate(),
      end: moment(end).toDate(),
      id: event ? event.id : Date.now(),
      group: selectedGroup,
      room: room,
    };
    saveEvent(newEvent);
  };

  // just some dummy db
  const groupOptions = ["Group 1", "Group 2", "Group 3"].filter(
    (group) => !existingGroups.includes(group)
  );
  const roomOptions = ["Room 1", "Room 2", "Room 3"];

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
            <label className="modal-label">Group:</label>
            <select
              value={selectedGroup}
              onChange={(e) => setSelectedGroup(e.target.value)}
              className="modal-input"
              required
            >
              <option value="">Select Group</option>
              {groupOptions.map((group) => (
                <option key={group} value={group}>
                  {group}
                </option>
              ))}
            </select>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <label className="modal-label">Room:</label>
            <select
              value={room}
              onChange={(e) => setRoom(e.target.value)}
              className="modal-input"
              required
            >
              <option value="">Select Room</option>
              {roomOptions.map((room) => (
                <option key={room} value={room}>
                  {room}
                </option>
              ))}
            </select>
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
