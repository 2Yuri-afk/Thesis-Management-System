import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./roles-select.module.css";

export default function Roles() {
  const [users, setUsers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [selectedRole, setSelectedRole] = useState("");
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await axios.get("http://localhost:3001/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    }
    fetchUsers();
  }, []);

  const handleUserClick = (userId) => {
    if (selectedUsers.includes(userId)) {
      setSelectedUsers(selectedUsers.filter((id) => id !== userId));
    } else {
      setSelectedUsers([...selectedUsers, userId]);
    }
  };

  const handleRoleClick = (event) => {
    const buttonRect = event.target.getBoundingClientRect();
    const popupTop = buttonRect.bottom + window.pageYOffset + 5;
    const popupLeft = buttonRect.left + window.pageXOffset;
    setPopupPosition({ top: popupTop, left: popupLeft });
    setPopupVisible(true);
  };

  const handleRoleChange = async (role) => {
    try {
      await Promise.all(
        selectedUsers.map(async (userId) => {
          await axios.put(`http://localhost:3001/change-role/${userId}`, {
            role,
          });
        })
      );
      alert("Roles changed successfully!");
      setPopupVisible(false);

      // Remove the selected users from the list after role change
      setUsers(users.filter((user) => !selectedUsers.includes(user._id)));
      setSelectedUsers([]);
    } catch (error) {
      console.error("Error changing roles:", error);
      alert("Failed to change roles. Please try again.");
    }
  };

  return (
    <div>
      <h1 className={styles.accounts}> Accounts </h1>
      <div className={styles.apple}>
        <div className={styles.form}>
          <div>
            {users.map((user) => (
              <div
                key={user._id}
                onClick={() => handleUserClick(user._id)}
                className={
                  selectedUsers.includes(user._id) ? styles.selectedUser : ""
                }
              >
                <div className={styles.name}>
                  <div>
                    {user.name}
                    <div className={styles.email}>{user.email}</div>
                  </div>
                  <input
                    type="checkbox"
                    checked={selectedUsers.includes(user._id)}
                    onChange={() => {}}
                    className={styles.checkbox}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedUsers.length > 0 && (
        <button className={styles.roleButton} onClick={handleRoleClick}>
          Add as +
        </button>
      )}

      {popupVisible && (
        <div
          className={styles.popup}
          style={{ top: popupPosition.top, left: popupPosition.left }}
        >
          <p
            className={styles.cancelBtn}
            onClick={() => setPopupVisible(false)}
          >
            x
          </p>
          <p
            className={styles.popRole}
            onClick={() => handleRoleChange("students")}
          >
            Student
          </p>
          <p
            className={styles.popRole}
            onClick={() => handleRoleChange("teachers")}
          >
            Teacher
          </p>
          <p
            className={styles.popRole}
            onClick={() => handleRoleChange("advisers")}
          >
            Adviser
          </p>
        </div>
      )}
    </div>
  );
}
