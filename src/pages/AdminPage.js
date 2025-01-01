import React from 'react';
import { useNavigate } from 'react-router-dom';

function AdminPage() {
  const navigate = useNavigate(); // Hook for navigation

  // Function to handle back button click
  const handleBackClick = () => {
    navigate('/'); // Navigate back to Home.js
  };

  // Functions for navigation to different sections
  const handleCourseManagement = () => {
    navigate('/course');
  };

  const handleLectureManagement = () => {
    navigate('/lecture');
  };

  const handleHallManagement = () => {
    navigate('/hall');
  };

  const handleScheduleView = () => {
    navigate('/schedule');
  };

  return (
    <div style={styles.container}>
      <div style={styles.top}>
        <div style={styles.header}>
          <h1>Welcome to CMS Admin page</h1>
        </div>
        <div style={styles.profile}>
          <a href="A_profile.html">
            <img src="account-svgrepo-com.svg" alt="Profile" style={styles.profileImage} />
          </a>
        </div>
      </div>

      <div style={styles.menu}>
        <button onClick={handleCourseManagement} style={styles.button}>Course Management</button>
        <button onClick={handleLectureManagement} style={styles.button}>Lecturer Management</button>
        <button onClick={handleHallManagement} style={styles.button}>Hall Management</button>
        <button onClick={handleScheduleView} style={styles.button}>Schedule View</button>
      </div>

      <div>
        <button onClick={handleBackClick} style={styles.backButton}>Back</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    backgroundColor: '#a7c8f1',
    padding: '20px',
  },
  top: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  header: {
    fontSize: '30px',
    textAlign: 'center',
    color: 'white',
    textShadow: '2px 2px 5px black',
    fontFamily: "'Berlin Sans FB', sans-serif",
  },
  profile: {
    position: 'relative',
    marginTop: '10px',
  },
  profileImage: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    objectFit: 'cover',
  },
  menu: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    marginTop: '20px',
  },
  button: {
    backgroundColor: '#b2d0ef',
    color: 'rgb(53, 50, 50)',
    border: '1px solid #fafcfd',
    width: '220px',
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '10px',
    cursor: 'pointer',
    transition: 'background-color 0.3s, color 0.3s',
  },
  backButton: {
    marginTop: '30px',
    backgroundColor: '#f4f4fa',
    color: '#555050',
    padding: '10px 0',
    borderTop: '1px solid #818287',
    width: '100px',
    height: '15px',
    borderRadius: '10%',
    cursor: 'pointer',
  },
};

export default AdminPage;
