import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Add.css'; // Assuming the styles are in Add.css
import { createCourse } from '../api'; // Import the createCourse function

function Add() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    courseName: '',
    courseId: '',
    lecturerId: '',
    batchId: '',
    departmentId: '',
    hallId: '',
    dayId: '',
    timeId: ''
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      await createCourse(formData); // Attempt to create the course
      console.log('Course created successfully:', formData);
      // Clear the form state only after successful submission
      setFormData({
        courseName: '',
        courseId: '',
        lecturerId: '',
        batchId: '',
        departmentId: '',
        hallId: '',
        dayId: '',
        timeId: ''
      });
      navigate('/Course'); // Redirect to the course management page after successful creation
    } catch (error) {
      console.error('Error creating course:', error);
      // Optional: Handle error (e.g., show a message)
    }
  };

  return (
    <div className="main">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Add Course</legend>

            <label>
              <span>Course Name</span>
              <input
                type="text"
                name="courseName"
                value={formData.courseName}
                onChange={handleChange}
                placeholder="Enter Course Name"
                required
              />
            </label>

            <label>
              <span>Course ID</span>
              <input
                type="text"
                name="courseId"
                value={formData.courseId}
                onChange={handleChange}
                placeholder="Enter Course ID"
                required
              />
            </label>

            <label>
              <span>Lecturer ID</span>
              <input
                type="text"
                name="lecturerId"
                value={formData.lecturerId}
                onChange={handleChange}
                placeholder="Enter Lecturer ID"
                required
              />
            </label>

            <label>
              <span>Batch ID</span>
              <input
                type="text"
                name="batchId"
                value={formData.batchId}
                onChange={handleChange}
                placeholder="Enter Batch ID"
                required
              />
            </label>

            <label>
              <span>Department ID</span>
              <input
                type="text"
                name="departmentId"
                value={formData.departmentId}
                onChange={handleChange}
                placeholder="Enter Department ID"
                required
              />
            </label>

            <label>
              <span>Hall ID</span>
              <input
                type="text"
                name="hallId"
                value={formData.hallId}
                onChange={handleChange}
                placeholder="Enter Hall ID"
                required
              />
            </label>

            <label>
              <span>Day ID</span>
              <input
                type="text"
                name="dayId"
                value={formData.dayId}
                onChange={handleChange}
                placeholder="Enter Day ID"
                required
              />
            </label>

            <label>
              <span>Time ID</span>
              <input
                type="text"
                name="timeId"
                value={formData.timeId}
                onChange={handleChange}
                placeholder="Enter Time ID"
                required
              />
            </label>

            <div className="button-group">
              <button type="submit">Submit</button>
              <button type="reset" onClick={() => setFormData({})}>Cancel</button>
            </div>
          </fieldset>
        </form>
      </div>

      <Link to="/Course">
        <div className="back">Back</div>
      </Link>
    </div>
  );
}

export default Add;