import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import '../styles/UserPage.css'; // Assuming you have a separate CSS file for styles

const UserPage = () => {
  const navigate = useNavigate(); // Use useNavigate hook for programmatic navigation

  const handleBackClick = () => {
    // Navigate back to Home.js (root page)
    navigate('/Home'); // This will navigate to the Home page
  };

  return (
    <div>
      {/* Header */}
      <div className="top">
        <div className="head">
          <h1>Welcome to CMS User page</h1>
        </div>
        <div className="cir">
          {/* Profile link */}
          <Link to="/profile">
            <img src="account-svgrepo-com.svg" alt="Profile" />
          </Link>
        </div>
      </div>

      {/* Menu buttons */}
      <div className="menu">
        <div className="sch">
          {/* Schedule View button */}
          <Link to="/schedule">
            <button type="button">Schedule View</button>
          </Link>
        </div>
        <div className="noti">
          {/* Notification button */}
          <Link to="/notification">
            <button type="button">Notification</button>
          </Link>
        </div>
      </div>

      {/* Back Button */}
      <div className="back" onClick={handleBackClick}>
        Back
      </div>
    </div>
  );
};

export default UserPage;
