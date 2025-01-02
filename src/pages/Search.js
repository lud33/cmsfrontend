import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCourseById } from '../api'; // Import the getCourseById function

const Search = () => {
  const navigate = useNavigate();
  const [courseId, setCourseId] = useState('');
  const [courseData, setCourseData] = useState(null); // To hold the fetched course data

  const handleBackClick = () => {
    navigate("/Course");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await getCourseById(courseId);
      setCourseData(result);
      console.log("Course found:", result);
    } catch (error) {
      console.error('Error fetching course:', error);
      setCourseData(null); // Clear previous data on error
    }
  };

  const handleReset = () => {
    setCourseId('');
    setCourseData(null); // Clear course data on reset
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
                value={courseId}
                onChange={(e) => setCourseId(e.target.value)}
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
        {courseData && (
          <div style={styles.resultContainer}>
            <h3>Course Details:</h3>
            <p><strong>Course Name:</strong> {courseData.courseName}</p>
            <p><strong>Department ID:</strong> {courseData.department.id}</p>
            <p><strong>Day:</strong> {courseData.day}</p>
            <p><strong>Time:</strong> {courseData.time}</p>
            <p><strong>Classroom ID:</strong> {courseData.classroom.id}</p>
          </div>
        )}
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
  resultContainer: {
    marginTop: "20px",
    backgroundColor: "#e0f7fa",
    padding: "10px",
    borderRadius: "5px",
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