import React, { useState } from "react";
import Modal from "react-modal";
import "./PickAdviser.css";
import testPic from "../../assets/StudentDashboard/testpic.jpg";

Modal.setAppElement("#root");

const PickAdviser = ({ isOpen, closeModal }) => {
  const advisers = [
    { name: "Colet Pares", profilePic: testPic },
    { name: "Maloi Ularte", profilePic: testPic },
    { name: "Mikha De Silva", profilePic: testPic },
    { name: "Franklin Miano", profilePic: testPic },
  ];
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      className="pick-adviser-modal"
      overlayClassName="modal-overlay"
    >
      <div className="modal-header">
        <h3 className="pick-text">Pick an Adviser</h3>
        <button onClick={closeModal} className="close-btn">
          X
        </button>
      </div>
      <div className="pick-adviser-modal-content">
        <h4 className="another-text">Advisers in project field</h4>
        <div className="advisers">
          {advisers.map((adviser, index) => (
            <div className="adviser" key={index}>
              <img
                src={adviser.profilePic}
                alt={adviser.name}
                className="profile-pic"
              />
              <p>{adviser.name}</p>
            </div>
          ))}
        </div>
      </div>
    </Modal>
  );
};

export default PickAdviser;
