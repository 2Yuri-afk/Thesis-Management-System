import React from "react";
import "./SignUp.css";
import tms from "../../assets/SignUp-LogIn/tms.png";
import fullname from "../../assets/SignUp-LogIn/fullname-icon.png";
import email from "../../assets/SignUp-LogIn/email-icon.png";
import password from "../../assets/SignUp-LogIn/password-icon.png";
import google from "../../assets/SignUp-LogIn/google.png";
import RoleSelect from "../RoleSelect";

const SignUp = () => {
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
            <form className="main">
              <h1>Create an Account</h1>
              <p>Let’s get Started Sign up to manage schedules.</p>
              <RoleSelect />
              <div className="input-box">
                <img src={fullname} alt="Full Name Icon" />
                <input type="text" placeholder="Full Name" required />
              </div>
              <div className="input-box">
                <img src={email} alt="Email Icon" />
                <input type="email" placeholder="Email" required />
              </div>
              <div className="input-box">
                <img src={password} alt="Password  Icon" />
                <input type="password" placeholder="Password" required />
              </div>
              <button className="button">Sign Up</button>
            </form>
            <div className="divider">
              <h1>or signup with</h1>
            </div>
            <form className="alt">
              <div className="soc-med">
                <img src={google} alt="google" />
                <p>Sign up with Google</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </body>
  );
};

export default SignUp;
