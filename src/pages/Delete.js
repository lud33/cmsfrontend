import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Delete.css';
import { deleteCourse } from '../api'; // Import the deleteCourse function

const Delete = () => {
  const navigate = useNavigate();
  const [courseId, setCourseId] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await deleteCourse(courseId); // Call the deleteCourse function
      console.log(`Course with ID: ${courseId} has been deleted.`);
      navigate('/course'); // Redirect to Course.js (Course Management)
    } catch (error) {
      console.error('Error deleting course:', error);
    }
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
                value={courseId}
                onChange={(e) => setCourseId(e.target.value)}
                placeholder="Course ID"
                required
              />
            </label>

            <div className="button-group">
              <button type="submit">Submit</button>
              <button type="reset" onClick={() => setCourseId('')}>Cancel</button>
            </div>
          </fieldset>
        </form>
      </div>

      <div className="back" onClick={() => navigate('/course')}>
        Back
      </div>
    </div>
  );
};

export default Delete;