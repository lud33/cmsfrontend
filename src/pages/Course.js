import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Course.css';  // Assuming your styles are in App.css

function Course() {
  return (
    <div className="course-page">
      <div className="top">
        <h1>Admin Page</h1>
        <h2>Course Management</h2>
      </div>

      <div className="menu">
        <div className="add">
          <button type="button">
            <Link to="/Add">Add Course</Link>
          </button>
        </div>
        <div className="del">
          <button type="button">
            <Link to="/Delete">Delete Course</Link>
          </button>
        </div>
        <div className="upd">
          <button type="button">
            <Link to="/Update">Update Course</Link>
          </button>
        </div>
        <div className="sea">
          <button type="button">
            <Link to="/Search">Search Course</Link>
          </button>
        </div>
      </div>

      <div className="back">
        <button type="button">
          <Link to="/AdminPage">Back</Link>
        </button>
      </div>
    </div>
  );
}

export default Course;
