import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Delete.css';
import { deleteCourse } from '../api';

const Delete = () => {
    const navigate = useNavigate();
    const [courseId, setCourseId] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await deleteCourse(courseId);
            console.log(`Course with ID: ${courseId} has been deleted.`);
            navigate('/Course');
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
            <div className="back" onClick={() => navigate('/Course')}>
                Back
            </div>
        </div>
    );
};

export default Delete;