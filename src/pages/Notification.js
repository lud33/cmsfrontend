import React from "react";
import { useNavigate } from "react-router-dom";

const Notification = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/UserPage");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log("Form submitted");
  };

  return (
    <div style={styles.body}>
      <div style={styles.main}>
        <div style={styles.container}>
          <form style={styles.form} onSubmit={handleSubmit}>
            <fieldset style={styles.fieldset}>
              <legend style={styles.legend}>Notification</legend>

              <label style={styles.label}>
                <span style={styles.labelText}>Batch ID</span>
                <input
                  type="text"
                  name="Batch Id"
                  placeholder="Enter Batch ID"
                  required
                  style={styles.input}
                />
              </label>

              <label style={styles.label}>
                <span style={styles.labelText}>Department ID</span>
                <input
                  type="text"
                  name="Department Id"
                  placeholder="Enter Department ID"
                  required
                  style={styles.input}
                />
              </label>

              <button type="submit" style={styles.button}>
                View
              </button>
            </fieldset>
          </form>
        </div>
        <div style={styles.back} onClick={handleBackClick}>
          Back
        </div>
      </div>
    </div>
  );
};

const styles = {
  body: {
    fontFamily: "Arial, sans-serif",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    margin: 0,
    backgroundColor: "#a7c8f1",
  },
  main: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  container: {
    width: "100%",
    maxWidth: "400px",
    backgroundColor: "#d2eaf8",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    margin: "0 auto",
    position: "relative",
    left: "40px",
  },
  form: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    width: "350px",
  },
  fieldset: {
    border: "none",
  },
  legend: {
    fontSize: "1.5em",
    fontWeight: "bold",
    marginBottom: "20px",
    textAlign: "center",
  },
  label: {
    position: "relative",
    display: "block",
    marginBottom: "25px",
  },
  labelText: {
    fontWeight: "bold",
    color: "#333",
    display: "block",
    marginBottom: "5px",
  },
  input: {
    width: "100%",
    border: "none",
    borderBottom: "2px solid #ccc",
    padding: "8px 0",
    fontSize: "16px",
    outline: "none",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    fontSize: "1em",
    cursor: "pointer",
  },
  back: {
    marginTop: "20px",
    textAlign: "center",
    fontSize: "14px",
    color: "#555050",
    padding: "10px 0",
    borderTop: "1px solid #818287",
    backgroundColor: "#f4f4fa",
    width: "100px",
    height: "15px",
    borderRadius: "10%",
    cursor: "pointer",
  },
};

export default Notification;
