import React, { useState } from "react";
import "./SignUp.css";
import tms from "../../assets/SignUp-LogIn/tms.png";
import fullname from "../../assets/SignUp-LogIn/fullname-icon.png";
import email1 from "../../assets/SignUp-LogIn/email-icon.png";
import password1 from "../../assets/SignUp-LogIn/password-icon.png";
import google from "../../assets/SignUp-LogIn/google.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

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
      <div className="background">
        <div className="card">
          <div className="card-left">
            <img src={tms} alt="TMS" />
            <div className="title">
              Thesis<br></br>Management<br></br>System
            </div>
          </div>
          <div className="card-right">
            <form className="main" onSubmit={handleSubmit}>
              <h1>Create an Account</h1>
              <p>Let’s get Started Sign up to manage schedules.</p>

              <div className="input-box">
                <img src={fullname} alt="Full Name Icon" />
                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  onChange={(event) => setName(event.target.value)}
                />
              </div>
              <div className="input-box">
                <img src={email1} alt="Email Icon" />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div className="input-box">
                <img src={password1} alt="Password Icon" />
                <input
                  type="password"
                  placeholder="Password"
                  required
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
              <button className="button">Sign Up</button>
            </form>
            <div className="divider">
              <h1>or signup with</h1>
            </div>
            <form className="alt">
              <div className="soc-med">
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
