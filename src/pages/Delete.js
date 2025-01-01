import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import '../styles/Delete.css';

const Delete = () => {
  const navigate = useNavigate(); // Use useNavigate to get the navigate function
  const [courseId, setCourseId] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Normally, you'd send a request to your server here to delete the course
    console.log(`Course with ID: ${courseId} has been deleted.`);
    // Redirect to Course.js (Course Management)
    navigate('/course'); // Use navigate() to go to the /course route
  };

  return (
    <div className="main">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Delete Course</legend>
            <label>
              <span>Course ID</span>
              <input
                type="text"
                name="Course Id"
                value={courseId}
                onChange={(e) => setCourseId(e.target.value)}
                placeholder="Course ID"
                required
              />
            </label>

            <div className="button-group">
              <button type="submit">Submit</button>
              <button type="reset" onClick={() => setCourseId('')}>
                Cancel
              </button>
            </div>
          </fieldset>
        </form>
      </div>

      <div className="back" onClick={() => navigate('/course')}> {/* Update navigation here as well */}
        Back
      </div>
    </div>
  );
};

export default Delete;
