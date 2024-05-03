import React from "react";
import "./student-pages.css";

export default function Profile() {
  const PName = "Michelle Drama";
  const profileImageUrl = ""; // medyo conflict ako here di ako makaadd pic 

  return (
    <>
      <div className="apple">
        <div className="text">Profile Content</div>
      </div>

      {/* Profile Section */}
      <div className="profileSection">
        {/* Profile Icon (Floating Box) */}
        <div className="floatingBox profileIconBox">
          <img
            className="profileIcon"
            src={profileImageUrl}
            alt={`${PName}'s profile picture`}
            placeholder="Upload profile picture"
          />
          <div className="profileName">{PName}</div>
          <div className="studentlabel">student</div>
        </div>

        {/* User Information (Floating Box) */}
        <div className="floatingBox userInfoBox">
          <h2 className="Infotext">User Information</h2>
          <div className="infoBox">
            <div className="userInfo">
              <div className="label">Name:</div>
              <input
                type="text"
             
                placeholder="Enter your name"
              />
              <div className="label">Email:</div>
              <input
                type="text"
              
                placeholder="Enter your email"
              />
            </div>
          </div>
          <div className="saveButtonContainer">
            <button className="saveButtonIcon">Save User Info</button>
          </div>
        </div>

        {/* Password (Floating Box) */}
        <div className="floatingBox passwordSection uniquePasswordBox">
          <h2>Password</h2>
          <div className="infoBox">
            <div className="passwordFields">
              <div className="field">
                <div className="label">Current Password:</div>
                <input
                  type="password"
               
                  placeholder="Enter your current password"
                />
              </div>
              <div className="field">
                <div className="label">New Password:</div>
                <input
                  type="password"
               
                  placeholder="Enter your new password"
                />
              </div>
              <div className="field">
                <div className="label">Confirm Password:</div>
                <input
                  type="password"
                 
                  placeholder="Confirm your new password"
                />
              </div>
            </div>
            <div className="saveButtonContainer">
              <button className="saveButtonIcon">Save Password</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
