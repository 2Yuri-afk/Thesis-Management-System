import React, { useState } from "react";
import styles from "./SignUp.module.css";
import tms from "../../assets/SignUp-LogIn/tms.png";
import fullname from "../../assets/SignUp-LogIn/fullname-icon.png";
import email1 from "../../assets/SignUp-LogIn/email-icon.png";
import password1 from "../../assets/SignUp-LogIn/password-icon.png";
import google from "../../assets/SignUp-LogIn/google.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import errorIcon from "../../assets/SignUp-LogIn/error-icon.png";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");

  const navigate = useNavigate();

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    axios
      .post("http://localhost:3001/register", {
        name,
        email,
        password,
      })
      .then((result) => {
        console.log(result);

        if (result.data === "Already registered") {
          alert("E-mail already registered! Please Login to proceed.");
          navigate("/");
        } else {
          alert("Registered successfully! Please Login to proceed.");
          navigate("/");
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
            <form className={styles.main} onSubmit={handleSubmit}>
              <h1>Create an Account</h1>
              <p>Let’s get started! Sign up to manage schedules.</p>

              <div className={styles.inputBox}>
                <img src={fullname} alt="Full Name Icon" />
                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  onChange={(event) => setName(event.target.value)}
                />
              </div>
              <div className={styles.inputBox}>
                <img src={email1} alt="Email Icon" />
                <input
                  type="text"
                  placeholder="Email"
                  required
                  onChange={(event) => {
                    setEmail(event.target.value);
                    setEmailError("");
                  }}
                />
                {emailError && (
                  <img
                    src={errorIcon}
                    alt="Error Icon"
                    className={styles.errorIcon}
                  />
                )}
              </div>
              <div className={styles.inputBox}>
                <img src={password1} alt="Password Icon" />
                <input
                  type="password"
                  placeholder="Password"
                  required
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
              <button className={styles.button}>Sign Up</button>
            </form>
            <div className={styles.divider}>
              <h1>or signup with</h1>
            </div>
            <form className={styles.alt}>
              <div className={styles.socMed}>
                <img src={google} alt="Google" />
                <p>Sign up with Google</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
