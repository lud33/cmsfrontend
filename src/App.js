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
        <Route path="/AdminLogin" element={<AdminLogin />} />
        <Route path="/UserLogin" element={<UserLogin />} />
        <Route path="/AdminPage" element={<AdminPage />} />
        <Route path="/UserPage" element={<UserPage />} />
        <Route path="/Course" element={<Course />} />
        <Route path="/Add" element={<Add />} />
        <Route path="/Delete" element={<Delete />} />
        <Route path="/Update" element={<Update />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/Lecture" element={<Lecture />} />
        <Route path="/Hall" element={<Hall />} />
        <Route path="/Schedule" element={<Schedule />} />
        <Route path="/Notification" element={<Notification />} />
      </Routes>
    </Router>
  );
}

export default App;

