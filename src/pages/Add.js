import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Add.css'; // Assuming the styles are in Add.css
import { createCourse, getDepartments } from '../api'; // Import the createCourse and getDepartments functions

function Add() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    courseName: '',
    departmentId: '', // Change to departmentId
    day: '', // Change to day
    time: '', // Change to time
    classroomId: '', // Change to classroomId
  });

  const [departments, setDepartments] = useState([]); // State to hold departments

  // Fetch departments on component mount
  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const data = await getDepartments(); // Fetch departments from the API
        setDepartments(data);
      } catch (error) {
        console.error('Error fetching departments:', error);
      }
    };

    fetchDepartments();
  }, []);

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
        departmentId: '',
        day: '',
        time: '',
        classroomId: '',
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
              <span>Department</span>
              <select
                name="departmentId"
                value={formData.departmentId}
                onChange={handleChange}
                required
              >
                <option value="">Select Department</option>
                {departments.map(department => (
                  <option key={department.id} value={department.id}>
                    {department.name}
                  </option>
                ))}
              </select>
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