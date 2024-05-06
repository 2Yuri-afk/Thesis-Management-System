import React from 'react';
import styles from './Done.module.css'; // Importing CSS module
import doneimg from "../../assets/SignUp-LogIn/done.png";

export default function Done() {
  return (
    <div className={styles.container}> {/* Using styles.container */}
      <img src={doneimg} alt="doneimg" />
    </div>
  );
}
