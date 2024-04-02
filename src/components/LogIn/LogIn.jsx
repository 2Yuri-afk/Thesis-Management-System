import React from "react";
import { Link } from "react-router-dom";
import "./LogIn.css";
import tms from "../../assets/SignUp-LogIn/tms.png";
import fullname from "../../assets/SignUp-LogIn/fullname-icon.png";
import email from "../../assets/SignUp-LogIn/email-icon.png";
import password from "../../assets/SignUp-LogIn/password-icon.png";
import google from "../../assets/SignUp-LogIn/google.png";

const LogIn = () => {
  return (
    <body>
      <div className="background">
        <div className="card">
          <div className="card-left">
            <img src={tms} />
            <div className="title">
              Thesis<br></br>Management<br></br>System
            </div>
          </div>
          <div className="card-right">
            <form>
              <h1>LOG IN</h1>
              <p>
                Don't have an account yet? <Link to="/SignUp">Sign Up</Link>
              </p>
              <div className="input-box">
                <img src={email} alt="Email Icon" />
                <input type="email" placeholder="Email" required />
              </div>
              <div className="input-box">
                <img src={password} alt="Password  Icon" />
                <input type="password" placeholder="Password" required />
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
    </body>
  );
};

export default LogIn;
