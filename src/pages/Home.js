import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';
const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="body">
      <div className="text">
        <h1>Welcome to class management system</h1>
        <h2>(CMS)</h2>
      </div>
      <section className="home">
        <div className="circle">
          {/* Admin Section */}
          <div className="cir1">
            <div>Admin</div>
            <div className="cir">
              <img
                src="account-svgrepo-com.svg"
                alt="Admin Icon"
              />
            </div>
            <div className="bor">
              <button onClick={() => navigate('/AdminPage')}>Login</button>
            </div>
          </div>
          {/* User/Lecturer Section */}
          <div className="cir2">
            <div>User/Lecturer</div>
            <div className="cir">
              <img
                src="account-svgrepo-com.svg"
                alt="User Icon"
              />
            </div>
            <div className="bor">
              <button onClick={() => navigate('/UserPage')}>Signup</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

