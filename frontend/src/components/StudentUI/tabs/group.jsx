import React, { useState } from "react";
import styles from "./group.module.css";
import PickAdviser from "../../Modals/PickAdviser.jsx";
import testPic from "../../../assets/StudentDashboard/testpic.jpg";

export default function Group() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  //temporary backend-----------------------------
  const members = [
    { name: "Romnick Pagal", profilePic: testPic },
    { name: "Diwata Reyes", profilePic: testPic },
    { name: "Rosmar Pares", profilePic: testPic },
  ];

  const thesis = {
    title: "Effectiveness of Pares Overload to the People of the Philippines",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  };

  const client = "Registrar";
  const field = "Computational Technology";

  //-------------------------------------------------

  return (
    <>
      <div className={styles["group-page-container"]}>
        <h2 className={styles.pageTitle}>GROUP</h2>
        <div className={styles["main-box"]}>
          <div className={styles["boxes-1"]}>
            <div className={styles["members-box"]}>
              <h5 className={styles["members-text"]}>Members</h5>
              <div className={styles.members}>
                {members.map((member, index) => (
                  <div className={styles.member} key={index}>
                    <img
                      src={member.profilePic}
                      alt={member.name}
                      className={styles["profile-pic"]}
                    />
                    <p>{member.name}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles["thesis-box"]}>
              <h5 className={styles["thesis-title-text"]}>
                Thesis Title:{" "}
                <span className={styles["the-title"]}>{thesis.title}</span>
              </h5>
              <p className={styles["description-text"]}>{thesis.description}</p>
            </div>
          </div>
          <div className={styles["boxes-2"]}>
            <div className={styles["adviser-box"]}>
              <h5 className={styles["adviser-text"]}>Adviser</h5>
              <button className={styles["adviser-pick"]} onClick={openModal}>
                Pick an adviser
              </button>
            </div>
            <div className={styles["client-box"]}>
              <h5 className={styles["client-text"]}>Client</h5>
              <p className={styles.client}>{client}</p>
            </div>
            <div className={styles["field-box"]}>
              <h5 className={styles["field-text"]}>Field</h5>
              <p className={styles.field}>{field}</p>
            </div>
          </div>
        </div>
        <PickAdviser isOpen={modalIsOpen} closeModal={closeModal} />
      </div>
    </>
  );
}
