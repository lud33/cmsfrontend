import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SearchDisplay = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Check if the course data is passed via state
  const course = location.state ? location.state.course : null;

  const handleBackClick = () => {
    navigate("/Search"); // Navigate back to search
  };

  return (
    <div style={styles.container}>
      <h3>Search Result:</h3>
      {course ? (
        <div>
          <p><strong>Course Name:</strong> {course.name}</p>
          <p><strong>Course ID:</strong> {course.id}</p>
          <p><strong>Description:</strong> {course.description}</p>
        </div>
      ) : (
        <p>No course found. Please check the Course ID and try again.</p>
      )}
      <button style={styles.button} onClick={handleBackClick}>Back to Search</button>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    maxWidth: "400px",
    margin: "0 auto",
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  button: {
    padding: "10px 15px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default SearchDisplay;