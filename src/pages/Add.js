import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Add.css'; // Assuming the styles are in Add.css
import { createCourse } from '../api'; // Import only createCourse

function Add() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    courseName: '',
    day: '',
    time: '',
    classroomId: '',
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted with data:', formData);

    try {
      await createCourse(formData);
      console.log('Course created successfully:', formData);
      setFormData({
        courseName: '',
        day: '',
        time: '',
        classroomId: '',
      });
      navigate('/Course'); // Redirect after creation
    } catch (error) {
      console.error('Error creating course:', error);
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
              <span>Day</span>
              <input
                type="text"
                name="day"
                value={formData.day}
                onChange={handleChange}
                placeholder="Enter Day (e.g., Monday)"
                required
              />
            </label>

            <label>
              <span>Time</span>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              <span>Classroom</span>
              <input
                type="text"
                name="classroomId"
                value={formData.classroomId}
                onChange={handleChange}
                placeholder="Enter Classroom ID"
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