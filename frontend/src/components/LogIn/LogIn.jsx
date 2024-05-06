import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "./LogIn.module.css";
import tms from "../../assets/SignUp-LogIn/tms.png";
import fullname1 from "../../assets/SignUp-LogIn/fullname-icon.png";
import email1 from "../../assets/SignUp-LogIn/email-icon.png";
import password1 from "../../assets/SignUp-LogIn/password-icon.png";
import google from "../../assets/SignUp-LogIn/google.png";

const LogIn = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:3001/login", { email, password })
      .then((result) => {
        console.log(result);
        if (result.data.message === "Success") {
          console.log("Login Success");
          alert("Login successful!");
          navigate("/DoneScrn");
        } else {
          alert("Incorrect password! Please try again.");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className={styles.background}>
        <div className={styles.card}>
          <div className={styles.cardLeft}>
            <img src={tms} alt="TMS" />
            <div className={styles.title}>
              Thesis<br></br>Management<br></br>System
            </div>
          </div>
          <div className={styles.cardRight}>
            <form onSubmit={handleSubmit}>
              <h1>LOG IN</h1>
              <p>
                Don't have an account yet? <Link to="/SignUp">Sign Up</Link>
              </p>
              <div className={styles.inputBox}>
                <img src={email1} alt="Email Icon" />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div className={styles.inputBox}>
                <img src={password1} alt="Password  Icon" />
                <input
                  type="password"
                  placeholder="Password"
                  required
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
              <button className={styles.button}>Log In</button>
            </form>
            <div className={styles.divider}>
              <h1>or login with</h1>
            </div>
            <form>
              <div className={styles.socMed}>
                <img src={google} alt="google" />
                <p>Log In with Google</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;
