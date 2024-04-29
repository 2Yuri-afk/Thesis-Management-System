import React from "react";
import "./teacher-pages.css";

export default function proposal() {
  return (
    <>
      <div className="apple">
        <div className="text"> <h3>Proposals</h3></div>
      </div>
      <div className="content">
        <div className="container1">
          <div className="column">
            <div className="title">
              <h1>Dancing Computational Technology</h1>
            </div>
            <div className="description">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ipsa odit quas necessitatibus tenetur nulla dolorem exercitationem
                dignissimos suscipit iusto repudiandae perferendis quisquam 
                voluptate quos recusandae, temporibus tempora quidem illo!</p>
            </div>
            <div className="client-field">
              <div className="client">
                  <h3>Client: <span>Dog Owner</span></h3>
              </div>
              <div className="Field">
                <h3>Field: <span>Computational Technology</span></h3>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="button-container">
              <button>Approve</button>
              <button>Reject</button>
            </div>
            <div className="comment">
              <sub>Comment: </sub>
              <textarea 
              className="comment-input"
              placeholder="Comment/Suggestions"
              rows="4"
              cols="50">
              </textarea>

            </div>
          </div>
        </div>

        <div className="container2">
          <div className="column">
            <div className="title">
              <h1>Dancing Computational Technology</h1>
            </div>
            <div className="description">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ipsa odit quas necessitatibus tenetur nulla dolorem exercitationem
                dignissimos suscipit iusto repudiandae perferendis quisquam 
                voluptate quos recusandae, temporibus tempora quidem illo!</p>
            </div>
            <div className="client-field">
              <div className="client">
                  <h3>Client: <span>Dog Owner</span></h3>
              </div>
              <div className="Field">
                <h3>Field: <span>Computational Technology</span></h3>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="button-container">
              <button>Approve</button>
              <button>Reject</button>
            </div>
            <div className="comment">
              <sub>Comment: </sub>
              <textarea 
              className="comment-input"
              placeholder="Comment/Suggestions"
              rows="4"
              cols="50">
              </textarea>

            </div>
          </div>



          
        </div>




      </div>
    </>
  );
}

