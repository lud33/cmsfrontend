import axios from 'axios';

const API_URL = "http://localhost:8080/courses"; // Updated URL

// Function to create a new course
export const createCourse = async (courseData) => {
    const response = await axios.post(API_URL, courseData);
    return response.data;
};

// Function to delete a course
export const deleteCourse = async (courseId) => {
    await axios.delete(`${API_URL}/${courseId}`);
};

// Other existing functions (like getCourses)
export const getCourses = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};