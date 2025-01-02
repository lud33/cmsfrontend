import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCourseById } from '../api'; // Adjust the path as necessary

const Search = () => {
  const [courseId, setCourseId] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      const fetchedCourse = await getCourseById(courseId); // Fetch the course by ID
      navigate("/display", { state: { course: fetchedCourse } }); // Navigate to the display component
    } catch (error) {
      console.error("Error fetching course:", error); // Log any errors
      // Optionally handle errors (e.g., show a notification)
    }
  };

  return (
    <div style={styles.container}>
      <h2>Search for a Course</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Course ID:
          <input
            type="text"
            value={courseId}
            onChange={(e) => setCourseId(e.target.value)}
            required
            style={styles.input}
          />
        </label>
        <button type="submit" style={styles.button}>Search</button>
      </form>
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
  input: {
    padding: "10px",
    margin: "10px 0",
    width: "100%",
    borderRadius: "5px",
    border: "1px solid #ccc",
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

export default Search;