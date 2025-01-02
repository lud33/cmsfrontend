import React from 'react';
import { useNavigate } from 'react-router-dom';

function AdminPage() {
  const navigate = useNavigate(); // Hook for navigation

  // Function to handle back button click
  const handleBackClick = () => {
    navigate('/Home'); // Navigate back to Home.js
  };

  // Functions for navigation to different sections
  const handleCourseManagement = () => {
    navigate('/Course');
  };

  const handleLectureManagement = () => {
    navigate('/Lecture');
  };

  const handleHallManagement = () => {
    navigate('/Hall');
  };

  const handleScheduleView = () => {
    navigate('/Schedule');
  };

  return (
    <div style={styles.container}>
      <div style={styles.top}>
        <div style={styles.header}>
          <h1>Welcome to CMS Admin Page</h1>
        </div>
        <div style={styles.profile}>
          <a href="A_profile.html">
            <div style={styles.circle}>
              <img src="account-svgrepo-com.svg" alt="Profile" style={styles.profileImage} />
            </div>
          </a>
        </div>
      </div>

      <div style={styles.menu}>
        <button onClick={handleCourseManagement} style={styles.menuButton}>Course Management</button>
        <button onClick={handleLectureManagement} style={styles.menuButton}>Lecturer Management</button>
        <button onClick={handleHallManagement} style={styles.menuButton}>Hall Management</button>
        <button onClick={handleScheduleView} style={styles.menuButton}>Schedule View</button>
      </div>

      <div style={styles.backContainer}>
        <button onClick={handleBackClick} style={styles.backButton}>Back</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#a7c8f1',
    height: '100vh',
    margin: 0,
    padding: '20px',
  },
  top: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
    width: '100%',
    fontSize: '60px',
  },
  profile: {
    marginTop: '10px',
    position: 'relative',
  },
  circle: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    backgroundColor: '#c1fcda',
    border: '2px solid black',
    boxShadow: '0 0 10px 4px rgba(255, 255, 255, 0.8)',
    position: 'fixed',
    top: '22px',
    right: '15px',
    overflow: 'hidden',
  },
  profileImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transform: 'scale(0.6)',
  },
  menu: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '15px',
    marginTop: '20px',
  },
  menuButton: {
    backgroundColor: '#b2d0ef',
    color: 'rgb(53, 50, 50)',
    border: '1px solid #fafcfd',
    width: '220px',
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '10px',
    cursor: 'pointer',
    transition: 'background-color 0.3s, color 0.3s',
    position: 'relative',
    marginLeft: '10%',
  },
  menuButtonHover: {
    backgroundColor: '#8fd3c3',
  },
  backContainer: {
    marginTop: '30px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  backButton: {
    backgroundColor: '#f4f4fa',
    color: '#555050',
    padding: '10px 20px',
    borderTop: '1px solid #818287',
    width: '100px',
    height: '40px',
    borderRadius: '10%',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  backButtonHover: {
    backgroundColor: 'rgb(180, 247, 218)',
  },
  header: {
    fontSize: '60px', // Set the size of the h1 here
    textAlign: 'center',
    color: 'white',
    textShadow: '2px 2px 5px black',
    fontFamily: "'Berlin Sans FB', sans-serif",
    paddingTop: '20px',
    paddingBottom: '20px',
    zIndex: 1000,
  },
};


export default AdminPage;