import React, { useState, useRef, useEffect } from "react";
import styles from "./proposal.module.css";

export default function Proposal() {
  const [formContainers, setFormContainers] = useState(1);
  const [submittedForms, setSubmittedForms] = useState([false]); // Track submission status for each form
  const formRefs = useRef([]); // Use an array to store refs for each form

  const addFormContainer = () => {
    setFormContainers(formContainers + 1);
    setSubmittedForms([...submittedForms, false]); // Add a new submission status for the added form
  };

  const handleSubmit = (event, index) => {
    event.preventDefault();
    const form = event.target;
    const inputs = form.querySelectorAll("input, textarea, select");
    let isValid = true;

    inputs.forEach((input) => {
      if (!input.value.trim()) {
        isValid = false;
      }
    });

    if (isValid) {
      const newSubmittedForms = [...submittedForms];
      newSubmittedForms[index] = true; // Mark the form as submitted
      setSubmittedForms(newSubmittedForms);
      // Here you can perform additional actions like submitting the form data
    } else {
      alert("Please fill in all fields before submitting.");
    }
  };

  useEffect(() => {
    if (formRefs.current[formContainers - 2]) {
      formRefs.current[formContainers - 2].scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, [formContainers]);

  return (
    <div className={styles.container}>
      <div className={styles["form-section"]}>
        <div className={styles["form-wrapper"]}>
          <h2 className={styles["proposal-title"]}>PROPOSAL</h2>
          <div className={styles["form-container"]}>
            <form onSubmit={(event) => handleSubmit(event, 0)}>
              <div className={styles["stacked-fields"]}>
                <div>
                  <label htmlFor="title">Title:</label>
                  <input type="text" id="title" name="title" />
                </div>
                <div>
                  <label htmlFor="details">Details:</label>
                  <textarea id="details" name="details" rows="4" cols="50"></textarea>
                </div>
              </div>
              <div className={styles["side-by-side-fields"]}>
                <div className={styles["client-field"]}>
                  <label htmlFor="client">Client:</label>
                  <input type="text" id="client" name="client" />
                </div>
                <div className={styles["field-field"]}>
                  <label htmlFor="field">Field:</label>
                  <select id="field" name="field">
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                    {/* Add more options as needed */}
                  </select>
                </div>
              </div>
              {!submittedForms[0] && <button type="submit">Submit</button>}
              {submittedForms[0] && <div className={`${styles["submission-indicator"]} ${styles.orange}`}></div>}
            </form>
          </div>
        </div>
        {[...Array(formContainers - 1)].map((_, index) => (
          <div className={`${styles["form-wrapper"]} ${styles["animated-form"]}`} key={index + 1}>
            <div className={styles["form-container"]} ref={(ref) => (formRefs.current[index] = ref)}>
              <form onSubmit={(event) => handleSubmit(event, index + 1)}>
                <div className={styles["stacked-fields"]}>
                  <div>
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" name="title" />
                  </div>
                  <div>
                    <label htmlFor="details">Details:</label>
                    <textarea id="details" name="details" rows="4" cols="50"></textarea>
                  </div>
                </div>
                <div className={styles["side-by-side-fields"]}>
                  <div className={styles["client-field"]}>
                    <label htmlFor="client">Client:</label>
                    <input type="text" id="client" name="client" />
                  </div>
                  <div className={styles["field-field"]}>
                    <label htmlFor="field">Field:</label>
                    <select id="field" name="field">
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                      {/* Add more options as needed */}
                    </select>
                  </div>
                </div>
                {!submittedForms[index + 1] && <button type="submit">Submit</button>}
                {submittedForms[index + 1] && <div className={`${styles["submission-indicator"]} ${styles.orange}`}></div>}
              </form>
            </div>
          </div>
        ))}
      </div>
      <button className={styles["add-button"]} onClick={addFormContainer}>
        +
      </button>
    </div>
  );
}
