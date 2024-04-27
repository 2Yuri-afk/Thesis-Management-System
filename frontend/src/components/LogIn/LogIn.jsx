import React from "react";
import "./LogIn.css";
import tms from "../../assets/SignUp-LogIn/tms.png";
import fullname1 from "../../assets/SignUp-LogIn/fullname-icon.png";
import email1 from "../../assets/SignUp-LogIn/email-icon.png";
import password1 from "../../assets/SignUp-LogIn/password-icon.png";
import google from "../../assets/SignUp-LogIn/google.png";
import { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LogIn = () => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
      
    axios.post('http://localhost:3001/login', { email, password })
      .then(result => {
        console.log(result);
        if (result.data.message === "Success") {
          console.log("Login Success");
          alert('Login successful!');
          navigate('/home');
        } else {
          alert('Incorrect password! Please try again.');
        }
      })
      .catch(err => console.log(err));
  }

  return (
    <>
      <div className="background">
        <div className="card">
          <div className="card-left">
            <img src={tms} />
            <div className="title">
              Thesis<br></br>Management<br></br>System
            </div>
          </div>
          <div className="card-right">
            <form onSubmit={handleSubmit}>  
              <h1>LOG IN</h1>
              <p>
                Don't have an account yet? <Link to="/SignUp">Sign Up</Link>
              </p>
              <div className="input-box">
                <img src={email1} alt="Email Icon" />
                <input type="email" placeholder="Email" required 
                onChange={(event) => setEmail(event.target.value)} />
              </div>
              <div className="input-box">
                <img src={password1} alt="Password  Icon" />
                <input type="password" placeholder="Password" required 
                onChange={(event) => setPassword(event.target.value)}/>
              </div>
              <button className="button">Log In</button>
            </form>
            <div className="divider">
              <h1>or login with</h1>
            </div>
            <form>
              <div className="soc-med">
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
