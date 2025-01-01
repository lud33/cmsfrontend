import React from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/Course");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log("Form submitted");
  };

  const handleReset = () => {
    console.log("Form reset");
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <form style={styles.form} onSubmit={handleSubmit}>
          <fieldset style={styles.fieldset}>
            <legend style={styles.legend}>Search Course</legend>

            <label style={styles.label}>
              <span style={styles.labelText}>Course ID</span>
              <input
                type="text"
                name="Course Id"
                placeholder="Course ID"
                required
                style={styles.input}
              />
            </label>

            <div style={styles.buttonGroup}>
              <button type="submit" style={{ ...styles.button, ...styles.submitButton }}>
                Submit
              </button>
              <button
                type="reset"
                style={{ ...styles.button, ...styles.resetButton }}
                onClick={handleReset}
              >
                Cancel
              </button>
            </div>
          </fieldset>
        </form>
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
    margin: "0",
    backgroundColor: "#a7c8f1",
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
  buttonGroup: {
    display: "flex",
    justifyContent: "space-between",
    gap: "10px",
  },
  button: {
    width: "calc(50% - 5px)",
    padding: "10px",
    color: "white",
    border: "none",
    borderRadius: "5px",
    fontSize: "1em",
    cursor: "pointer",
  },
  submitButton: {
    backgroundColor: "#85be86",
  },
  resetButton: {
    backgroundColor: "#f44336",
  },
  back: {
    marginTop: "7px",
    marginLeft: "160px",
    marginBottom: "1px",
    textAlign: "center",
    fontSize: "14px",
    color: "#555050",
    padding: "10px 0",
    borderTop: "1px solid #818287",
    backgroundColor: "#f4f4fa",
    width: "100px",
    height: "15px",
    borderRadius: "10%",
    position: "relative",
    left: "40px",
    cursor: "pointer",
  },
};

export default Search;
