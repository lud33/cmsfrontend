import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import '../styles/Add.css';  // Assuming the styles are in Add.css
import { createCourse } from '../api'; // Import the createCourse function

function Add() {
    const navigate = useNavigate(); // Initialize useNavigate
    const [formData, setFormData] = useState({
        courseName: '',
        departmentId: '',
        dayId: '',
        timeId: '',
        hallId: ''
    });

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        const courseData = {
            courseName: formData.courseName,
            department: { id: formData.departmentId }, // Assuming departmentId is sent as an object
            day: formData.dayId, // Directly map dayId to day
            time: formData.timeId, // Ensure this is formatted correctly for LocalTime
            classroom: { id: formData.hallId } // Assuming hallId is the classroom ID
        };

        try {
            const createdCourse = await createCourse(courseData);
            console.log('Course created successfully:', createdCourse);
            navigate('/course'); // Navigate to the course management page after successful creation
        } catch (error) {
            console.error('Error creating course:', error);
        } finally {
            // Clear the form after submission
            setFormData({
                courseName: '',
                departmentId: '',
                dayId: '',
                timeId: '',
                hallId: ''
            });
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
                            <span>Day</span>
                            <input
                                type="text"
                                name="dayId"
                                value={formData.dayId}
                                onChange={handleChange}
                                placeholder="Enter Day"
                                required
                            />
                        </label>

                        <label>
                            <span>Time</span>
                            <input
                                type="text"
                                name="timeId"
                                value={formData.timeId}
                                onChange={handleChange}
                                placeholder="Enter Time (HH:mm)"
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

                        <div className="button-group">
                            <button type="submit">Submit</button>
                            <button type="reset" onClick={() => setFormData({})}>Cancel</button>
                        </div>
                    </fieldset>
                </form>
            </div>

            <Link to="/course">
                <div className="back">Back</div>
            </Link>
        </div>
    );
}

export default Add;