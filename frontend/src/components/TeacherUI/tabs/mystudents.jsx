import React, { useState, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import styles from "./mystudents.module.css";

export default function MyStudents() {
  const [showStudentModal, setShowStudentModal] = useState(false);
  const [showGroupModal, setShowGroupModal] = useState(false);
  const [students, setStudents] = useState([]);
  const [addedStudents, setAddedStudents] = useState([]);
  const [groups, setGroups] = useState([]);
  const [addedGroups, setAddedGroups] = useState([]);

  useEffect(() => {
    fetchStudents();
    fetchGroups();
  }, []);

  const openStudentModal = () => {
    setShowStudentModal(true);
  };

  const closeStudentModal = () => {
    setShowStudentModal(false);
  };

  const openGroupModal = () => {
    setShowGroupModal(true);
  };

  const closeGroupModal = () => {
    setShowGroupModal(false);
  };

  const fetchStudents = () => {
    fetch("/api/students")
      .then((response) => response.json())
      .then((data) => setStudents(data))
      .catch((error) => console.error("Error fetching students:", error));
  };

  const fetchGroups = () => {
    fetch("/api/groups")
      .then((response) => response.json())
      .then((data) => setGroups(data))
      .catch((error) => console.error("Error fetching groups:", error));
  };

  const handleAddStudent = (student) => {
    setAddedStudents([...addedStudents, student]);
  };

  const handleDeleteStudent = (index) => {
    const updatedStudents = [...addedStudents];
    updatedStudents.splice(index, 1);
    setAddedStudents(updatedStudents);
  };

  const handleAddGroup = (group) => {
    setAddedGroups([...addedGroups, group]);
  };

  const handleDeleteGroup = (index) => {
    const updatedGroups = [...addedGroups];
    updatedGroups.splice(index, 1);
    setAddedGroups(updatedGroups);
  };

  return (
    <>
      <div className={styles.apple}>
        <div className={styles.container}>
          <h2 className={styles.pageTitle}>STUDENTS</h2>
          <div className={styles.Lists}>
            <div className={styles.StudentList}>
              <Button id={styles.btn1} onClick={openStudentModal}>
                Add
              </Button>
              <div className={styles.studentContainer}>
                <h5 className={styles.haha}>Student List</h5>
                <ul>
                  {addedStudents.map((student, index) => (
                    <li key={index}>
                      {student.name}
                      <Button onClick={() => handleDeleteStudent(index)}>
                        TANGGALIN
                      </Button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className={styles.GroupList}>
              <Button id={styles.btn2} onClick={openGroupModal}>
                Add
              </Button>
              <div className={styles.groupContainer}>
                <h5 className={styles.haha}>Group List</h5>
                <ul>
                  {addedGroups.map((group, index) => (
                    <li key={index}>
                      {group.name}
                      <Button onClick={() => handleDeleteGroup(index)}>
                        TANGGALIN
                      </Button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Students List Modal */}
      <Dialog open={showStudentModal} onClose={closeStudentModal}>
        <DialogTitle>Student List</DialogTitle>
        <DialogContent>
          {students.length === 0 ? (
            <p>There are no student/s yet.</p>
          ) : (
            <ul>
              {students.map((student) => (
                <li key={student._id}>
                  {student.name}
                  <Button onClick={() => handleAddStudent(student)}>Add</Button>
                </li>
              ))}
            </ul>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={closeStudentModal}>Close</Button>
          <Button onClick={() => handleAddStudent({ name: "New Student" })}>
            Add a Student
          </Button>
        </DialogActions>
      </Dialog>

      {/* Groups List Modal */}
      <Dialog open={showGroupModal} onClose={closeGroupModal}>
        <DialogTitle>Group List</DialogTitle>
        <DialogContent>
          {groups.length === 0 ? (
            <p>There are no group/s yet.</p>
          ) : (
            <ul>
              {groups.map((group) => (
                <li key={group._id}>
                  {group.name}
                  <Button onClick={() => handleAddGroup(group)}>Add</Button>
                </li>
              ))}
            </ul>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={closeGroupModal}>Close</Button>
          <Button onClick={() => handleAddGroup({ name: "New Group" })}>
            Add a Group
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
