import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import pages
import Home from './pages/Home';
import AdminLogin from './pages/AdminLogin';
import UserLogin from './pages/UserLogin';
import AdminPage from './pages/AdminPage';
import UserPage from './pages/UserPage';
import Course from './pages/Course';
import Add from './pages/Add';
import Delete from './pages/Delete';
import Update from './pages/Update';
import Search from './pages/Search';
import Lecture from './pages/Lecture';
import Hall from './pages/Hall';
import Schedule from './pages/Schedule';
import Notification from './pages/Notification';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/admin-page" element={<AdminPage />} />
        <Route path="/user-page" element={<UserPage />} />
        <Route path="/course" element={<Course />} />
        <Route path="/add" element={<Add />} />
        <Route path="/delete" element={<Delete />} />
        <Route path="/update" element={<Update />} />
        <Route path="/search" element={<Search />} />
        <Route path="/lecture" element={<Lecture />} />
        <Route path="/hall" element={<Hall />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/notification" element={<Notification />} />
      </Routes>
    </Router>
  );
}

export default App;

