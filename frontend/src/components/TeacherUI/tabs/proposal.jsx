import React from "react";
import styles from "./proposal.module.css";

export default function Proposal() {
  return (
    <>
      <div className={styles.apple}>
        <div className={styles.text}>
          <h2 className={styles.pageTitle}>PROPOSALS</h2>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.container1}>
          <div className={styles.column}>
            <div className={styles.title}>
              <h1>Dancing Computational Technology</h1>
            </div>
            <div className={styles.description}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                odit quas necessitatibus tenetur nulla dolorem exercitationem
                dignissimos suscipit iusto repudiandae perferendis quisquam
                voluptate quos recusandae, temporibus tempora quidem illo!
              </p>
            </div>
            <div className={styles["client-field"]}>
              <div className={styles.client}>
                <h3>
                  Client: <span>Dog Owner</span>
                </h3>
              </div>
              <div className={styles.Field}>
                <h3>
                  Field: <span>Computational Technology</span>
                </h3>
              </div>
            </div>
          </div>

          <div className={styles.column}>
            <div className={styles["button-container"]}>
              <button className={styles.button1}>Approve</button>
              <button className={styles.button1}>Reject</button>
            </div>
            <div className={styles.comment}>
              <sub>Comment: </sub>
              <textarea
                className={styles["comment-input"]}
                placeholder="Comment/Suggestions"
                rows="4"
                cols="50"
              ></textarea>
            </div>
          </div>
        </div>

        <div className={styles.container2}>
          <div className={styles.column}>
            <div className={styles.title}>
              <h1>Dancing Computational Technology</h1>
            </div>
            <div className={styles.description}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                odit quas necessitatibus tenetur nulla dolorem exercitationem
                dignissimos suscipit iusto repudiandae perferendis quisquam
                voluptate quos recusandae, temporibus tempora quidem illo!
              </p>
            </div>
            <div className={styles["client-field"]}>
              <div className={styles.client}>
                <h3>
                  Client: <span>Dog Owner</span>
                </h3>
              </div>
              <div className={styles.Field}>
                <h3>
                  Field: <span>Computational Technology</span>
                </h3>
              </div>
            </div>
          </div>

          <div className={styles.column}>
            <div className={styles["button-container"]}>
              <button className={styles.button1}>Approve</button>
              <button className={styles.button1}>Reject</button>
            </div>
            <div className={styles.comment}>
              <sub>Comment: </sub>
              <textarea
                className={styles["comment-input"]}
                placeholder="Comment/Suggestions"
                rows="4"
                cols="50"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
