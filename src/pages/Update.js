import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Add.css';  // Assuming the styles are in App.css

function Update() {
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
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);  // Handle the form submission logic here (e.g., send data to the backend)
    // Clear the form after submission
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
  };

  return (
    <div className="main">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Update Course</legend>

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

export default Update;
